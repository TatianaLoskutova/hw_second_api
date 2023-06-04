import {blogsDataBase} from '../types';


export const blogRepository = {
    findAllBlogs() {
        return blogsDataBase
    },
    findBlogById(id: string) {
        let foundBlog = blogsDataBase.find(p => p.id === id)
        return foundBlog;
    },
    createBlog(id: string,name: string, description: string, websiteUrl: string) {
        const newBlog = {
            id: Math.random().toString(36),
            name: name,
            description: description,
            websiteUrl: websiteUrl
        }
        blogsDataBase.push(newBlog)
        return newBlog;
    },
    updateBlog(id: string,name: string, description: string ,websiteUrl: string) {
        let blogRepositoryUpdated = blogsDataBase.find(p => p.id === id);
        if (blogRepositoryUpdated) {
            blogRepositoryUpdated.name = name
            blogRepositoryUpdated.description = description
            blogRepositoryUpdated.websiteUrl = websiteUrl
            return true;
        } else {
            return false;
        }
    },
    deleteBlog(id: string) {
        for (let i = 0; i < blogsDataBase.length; i++) {
            if (blogsDataBase[i].id === id) {
                blogsDataBase.splice(i, 1);
                return true;
            }
        }
        return false
    }


}


