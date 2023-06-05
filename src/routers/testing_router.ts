import {Request, Response,Router} from 'express';
import {blogsDataBase, postsDataBase} from '../types';

export const testingRouter = Router()


testingRouter.delete('/all-data', (req: Request, res: Response) => {
    blogsDataBase.splice(0, blogsDataBase.length);
    postsDataBase.splice(0, postsDataBase.length)
    res.sendStatus(204)
})