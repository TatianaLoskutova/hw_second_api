import {body} from 'express-validator';


export const postTitleValidation = body('title').exists().bail()
    .trim().isLength({min: 1, max: 30}).bail()
    .isString()
export const postShortDescription = body('shortDescription').exists().bail()
    .trim().isLength({min: 1, max: 100}).bail()
    .isString()
export const postContentValidation = body('"content').exists().bail()
    .trim().isLength({min: 1, max: 1000}).bail()
    .isString()
export const postBlogIdValidation = body('blogId').exists().bail()
    .isString()
export const postBlogNameValidation = body('blogName').exists().bail()
    .isString()



