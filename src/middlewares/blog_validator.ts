import {body} from 'express-validator';

export const blogNameValidation = body('name')
        .trim().isLength({min: 1, max: 15}).withMessage('xxx')
        .isString().withMessage('yyy')
export const blogDescriptionValidation = body('description')
        .trim().isLength({min: 1, max: 500})
        .isString()
export const blogWebsiteUrlValidation = body('websiteUrl').matches('^https://([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$')
        .isLength({min: 1 , max: 100})

