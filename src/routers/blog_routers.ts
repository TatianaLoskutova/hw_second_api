import {Router, Request, Response} from 'express';
import {blogRepository} from '../repositories/blog_repository';
import {IdGetParam} from '../modules/Get_byID';
import {BlogViewModel} from '../modules/blog/Blog_View_model';
import {getBlogViewModel, RequestWithBody, RequestWithParams} from '../types';
import {authHeaderValidator} from '../middlewares/authorization_validation';
import {blogParamsValidation} from '../middlewares/blog_params_validation';
import {errorsMiddleware} from '../middlewares/errors_validation';
import {BlogInputModel} from '../modules/blog/Post_Blog_model';

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
        const newBlog = blogRepository.createBlog(req.body.name, req.body.description, req.body.websiteUrl)
        res.sendStatus(201).send(newBlog)
    })