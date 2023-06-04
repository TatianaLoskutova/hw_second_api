import {body} from 'express-validator';


export const blogParamsValidation = body('name')
        .isString()
        .withMessage('name should be string')
        .isLength({max: 15})
        .withMessage('name is too long')
    ;
    body('description')
        .isString()
        .withMessage('description should be string')
        .isLength({max: 500})
        .withMessage('description is too long')
    ;
    body('"websiteUrl')
        .isString()
        .withMessage('websiteUrl should be string')
        .isLength({max: 100})
        .withMessage('website url is too long')
        .matches(/^https:\/\/([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$/)
        .withMessage('website url does not match the template')

