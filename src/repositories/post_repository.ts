import {postsDataBase} from '../types';
import {PostViewModel} from '../models/post/Post_View_model';
import {blogRepository} from './blog_repository';
import {PostInputModel} from '../models/post/Post_Post_model';


export const postRepository = {
    findAllPosts() {
        return postsDataBase
    },
    findPostById(id: string) {
        let foundPost = postsDataBase.find(p => p.id === id)
        return foundPost;
    },
    createPost(data: PostInputModel) {
        const postById = blogRepository.findBlogById(data.blogId)
        const newPost = {
            id: Math.random().toString(36),
            title: data.title,
            shortDescription: data.shortDescription,
            content: data.content,
            blogId: postById.id,
            blogName: postById.name
        }
        postsDataBase.push(newPost)
        return newPost;
    },
    updatePost(id: string, title: string, shortDescription: string, content: string, blogId: string) {
        let postRepositoryUpdated = postsDataBase.find(p => p.id === id);
        if (postRepositoryUpdated) {
            postRepositoryUpdated.title = title
            postRepositoryUpdated.shortDescription = shortDescription
            postRepositoryUpdated.content = content
            postRepositoryUpdated.blogId = blogId
            return true;
        } else {
            return false;
        }
    },
    deletePost(id: string) {
        for (let i = 0; i < postsDataBase.length; i++) {
            if (postsDataBase[i].id === id) {
                postsDataBase.splice(i, 1);
                return true;
            }
        }
        return false
    }


}

