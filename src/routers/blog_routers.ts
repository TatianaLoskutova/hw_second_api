import {Router, Request, Response} from 'express';
import {blogRepository} from '../repositories/blog_repository';
import {IdGetParam} from '../modules/Get_byID';
import {BlogViewModel} from '../modules/blog/Blog_View_model';
import {getBlogViewModel, RequestWithBody, RequestWithParams, RequestWithParamsAndBody} from '../types';
import {authHeaderValidator} from '../middlewares/authorization_validation';
import {blogParamsValidation} from '../middlewares/blog_params_validation';
import {errorsMiddleware} from '../middlewares/errors_validation';
import {BlogInputModel} from '../modules/blog/Post_Blog_model';
import {BlogUpdateModel} from '../modules/blog/Put_Blog_model';

export const blogRouters = Router();

blogRouters.get('/', (req:Request, res: Response) => {
    res.status(200).send(blogRepository.findAllBlogs())
})
blogRouters.get('/:id', (req:RequestWithParams<IdGetParam>, res: Response<BlogViewModel>) => {
    let foundBlog = blogRepository.findBlogById(req.params.id)
    if (!foundBlog) {
        res.sendStatus(404)
        return;
    }
    res.status(200).send(getBlogViewModel(foundBlog))
})
blogRouters.post('/',
    authHeaderValidator,
    blogParamsValidation,
    errorsMiddleware,
    (req: RequestWithBody<BlogInputModel>, res: Response<BlogViewModel>) => {
        const newBlog = blogRepository.createBlog(req.body.id,req.body.name, req.body.description, req.body.websiteUrl)
        res.status(201).send(newBlog)
    })

blogRouters.put('/:id',
    authHeaderValidator,
    blogParamsValidation,
    errorsMiddleware,
    (req: RequestWithParamsAndBody<IdGetParam,BlogUpdateModel>, res: Response) => {
        const isUpdated = blogRepository.updateBlog(req.params.id, req.body.websiteUrl)
        if (isUpdated) {
            res.sendStatus(204)
        } else {
            res.sendStatus(404)
        }
    })

blogRouters.delete('/:id',
    authHeaderValidator,
    errorsMiddleware,
    (req:RequestWithParams<IdGetParam>, res:Response) => {
    const isDeleted = blogRepository.deleteBlog(req.params.id)
    if (isDeleted) {
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
})
