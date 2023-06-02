import {Router, Request, Response} from 'express';
import {postRepository} from '../repositories/post_repository';

export const postRouters = Router();


postRouters.get('/', (req:Request, res: Response) => {
    res.send(postRepository.findAllPosts())
})