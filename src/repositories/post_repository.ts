import {postsDataBase} from '../types';

export const postRepository = {
    findAllPosts() {
        return postsDataBase
    },
    findPostById(id: string) {
        let foundPost = postsDataBase.find(p => p.id === id)
        return foundPost;
    },



}