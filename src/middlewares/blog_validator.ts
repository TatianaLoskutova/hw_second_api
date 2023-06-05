import {body} from 'express-validator';

export const blogNameValidation = body('name').exists().bail()
        .trim().isLength({min: 1, max: 15}).bail()
        .isString()
export const blogDescriptionValidation = body('description').exists().bail()
        .trim().isLength({min: 1, max: 500}).bail()
        .isString()
export const blogWebsiteUrlValidation = body('"websiteUrl').exists().matches('^https://([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$')
        .isLength({min: 1 , max: 100})

