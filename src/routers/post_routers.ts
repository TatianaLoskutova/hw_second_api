import {Router, Request, Response} from 'express';
import {postRepository} from '../repositories/post_repository';
import {getPostViewModel, RequestWithBody, RequestWithParams, RequestWithParamsAndBody} from '../types';
import {IdGetParam} from '../modules/Get_byID';
import {PostViewModel} from '../modules/post/Post_View_model';
import {errorsMiddleware} from '../middlewares/errors_validation';
import {PostInputModel} from '../modules/post/Post_Post_model';
import {postBlogIdValidation, postContentValidation, postShortDescription, postTitleValidation} from '../middlewares/post_validator';
import {PostUpdateModel} from '../modules/post/Put_Post_model';
import {authMiddleware} from '../middlewares/authorization_validation';

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

postRouters.post('/',
    authMiddleware,
    postTitleValidation,
    postShortDescription,
    postContentValidation,
    postBlogIdValidation,
    errorsMiddleware,
    (req: RequestWithBody<PostInputModel>, res: Response<PostInputModel>) => {
        const newPost = postRepository.createPost(req.body.id, req.body.title,req.body.shortDescription, req.body.content, req.body.blogId, req.body.blogName)
        res.status(201).send(newPost)
    })

postRouters.put('/:id',
    authMiddleware,
    postTitleValidation,
    postShortDescription,
    postContentValidation,
    postBlogIdValidation,
    errorsMiddleware,
    (req: RequestWithParamsAndBody<IdGetParam,PostUpdateModel>, res: Response) => {
        const isUpdated = postRepository.updatePost(req.params.id, req.body.title, req.body.shortDescription, req.body.content, req.body.blogId)
        if (isUpdated) {
            res.sendStatus(204)
        } else {
            res.sendStatus(404)
        }
    })

postRouters.delete('/:id',
    authMiddleware,
    postTitleValidation,
    postShortDescription,
    postContentValidation,
    postBlogIdValidation,
    errorsMiddleware,
    (req:RequestWithParams<IdGetParam>, res:Response) => {
        const isDeleted = postRepository.deletePost(req.params.id)
        if (isDeleted) {
            res.sendStatus(204);
        } else {
            res.sendStatus(404);
        }
    })
