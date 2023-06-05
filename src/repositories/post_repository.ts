import {postsDataBase} from '../types';
import {PostViewModel} from '../modules/post/Post_View_model';
import {blogRepository} from './blog_repository';


export const postRepository = {
    findAllPosts() {
        return postsDataBase
    },
    findPostById(id: string) {
        let foundPost = postsDataBase.find(p => p.id === id)
        return foundPost;
    },
    createPost(id: string, title: string, shortDescription: string, content: string, blogId: string, blogName: string) {
        const postById = blogRepository.findBlogById(blogId)
        const newPost = {
            id: Math.random().toString(36),
            title: title,
            shortDescription: shortDescription,
            content: content,
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

