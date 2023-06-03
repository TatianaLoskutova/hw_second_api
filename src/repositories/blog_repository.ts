import {blogsDataBase} from '../types';


export const blogRepository = {
    findAllBlogs() {
        return blogsDataBase
    },
    findBlogById(id: string) {
        let foundBlog = blogsDataBase.find(p => p.id === id)
        return foundBlog;
    },
    createBlog(name: string, description: string, websiteUrl: string) {
        const newBlog = {
            id: Math.random().toString(36),
            name: name,
            description: description,
            websiteUrl: websiteUrl
        }
        blogsDataBase.push(newBlog)
        return newBlog;
    },


}


