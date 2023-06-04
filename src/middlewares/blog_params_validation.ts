import {body} from 'express-validator';
import {CustomValidator} from 'express-validator/src/base';
import * as validator from 'validator';


export const blogParamsValidation = body('name')
        .isString()
        .withMessage('name should be string')
        .isLength({max: 15})
        .withMessage('name is too long')
    ;
    body('description')
        .isString()
        .withMessage({ field: 'description', message: 'description should be string' })
        .isLength({max: 500})
        .withMessage({ field: 'description', message: 'description is too long' })
    ;
    body('"websiteUrl')
        .isString()
        .withMessage({ field: 'websiteUrl', message: 'websiteUrl should be string' })
        .isLength({max: 100})
        .withMessage({ field: 'websiteUrl', message: 'website url is too long' })
        .matches(/^https:\/\/([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$/)
        .withMessage({ field: 'websiteUrl', message: 'website url does not match the template' })

