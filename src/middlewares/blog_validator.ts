import {body} from 'express-validator';

export const blogNameValidation = body('name')
        .trim().isLength({min: 1, max: 15}).withMessage('Incorrect length')
        .isString().withMessage('Should be string')
export const blogDescriptionValidation = body('description')
        .trim().isLength({min: 1, max: 500}).withMessage('Incorrect length')
        .isString().withMessage('Should be string')
export const blogWebsiteUrlValidation = body('websiteUrl').matches('^https://([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$').withMessage('Incorrect URL')
        .isLength({min: 1 , max: 100}).withMessage('Incorrect length')

