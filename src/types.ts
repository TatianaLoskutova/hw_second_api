import {Request} from 'express';
import {PostViewModel} from './modules/post/Post_View_model';
import {BlogViewModel} from './modules/blog/Blog_View_model';

export type PostsType = {
    id: string
    title: string
    shortDescription: string
    content: string
    blogId: string
    blogName: string
}
export type BlogsType = {
    id: string
    name: string
    description: string
    websiteUrl: string

}

export const blogsDataBase: BlogsType[] = []
export const postsDataBase: PostsType[] = [];
export const getBlogViewModel = (dbBlog: BlogsType): BlogViewModel => {
    return {
        id: dbBlog.id,
        name: dbBlog.name,
        description: dbBlog.description,
        websiteUrl: dbBlog.websiteUrl
    }
}
export const getPostViewModel = (dbPost: PostsType): PostViewModel => {
    return {
        id: dbPost.id,
        title: dbPost.title,
        shortDescription: dbPost.shortDescription,
        content: dbPost.content,
        blogId: dbPost.blogId,
        blogName: dbPost.blogName
    }
}

export type ErrorsMessageType = {
    message: string;
    field: string
}

export type ErrorsType = {
    errorsMessages: ErrorsMessageType[];
}


export type RequestWithParams<T> = Request<T>
export type RequestWithBody<T> = Request<{}, {}, T>
export type RequestWithParamsAndBody<T, B> = Request<T, {}, B>