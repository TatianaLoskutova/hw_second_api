import {Router, Request, Response} from 'express';
import {postRepository} from '../repositories/post_repository';
import {getPostViewModel, RequestWithParams} from '../types';
import {IdGetParam} from '../modules/Get_byID';
import {PostViewModel} from '../modules/post/Post_View_model';

export const postRouters = Router();


postRouters.get('/', (req:Request, res: Response) => {
    res.status(200).send(postRepository.findAllPosts())
})

postRouters.get('/:id', (req:RequestWithParams<IdGetParam>, res: Response<PostViewModel>) => {
    let foundPost = postRepository.findPostById(req.params.id)
    if (!foundPost) {
        res.sendStatus(404)
        return;
    }
    res.status(200).send(getPostViewModel(foundPost))
})

