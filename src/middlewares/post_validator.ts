import {body} from 'express-validator';


export const postTitleValidation = body('title')
    .trim().isLength({min: 1, max: 30}).withMessage('Incorrect length')
    .isString().withMessage('Should be string')
export const postShortDescription = body('shortDescription')
    .trim().isLength({min: 1, max: 100}).withMessage('Incorrect length')
    .isString().withMessage('Should be string')
export const postContentValidation = body('"content')
    .trim().isLength({min: 1, max: 1000}).withMessage('Incorrect length')
    .isString().withMessage('Should be string')
export const postBlogIdValidation = body('blogId')
    .isString().withMessage('Should be string')
export const postBlogNameValidation = body('blogName')
    .isString()



