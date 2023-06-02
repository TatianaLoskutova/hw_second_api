import {Request} from 'express';
import {PostViewModel} from './modules/post/Post_View_model';

export type PostsType = {
    id: string
    title: string
    shortDescription: string
    content: string
    blogId: string
    blogName: string
}

export const postsDataBase: PostsType[] = [];
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

export type RequestWithParams<T> = Request<T>