import {body} from 'express-validator';
import {CustomValidator} from 'express-validator/src/base';
import * as validator from 'validator';


export const blogParamsValidation = [
    body('name')
        .isString().withMessage('name should be string')
        .trim().notEmpty().withMessage('name should not be empty')
        .isLength({max: 15}).withMessage('Max length is 15 symbols')
]

    body('description')
        .isString()
        .withMessage('description should be string')
        .isLength({max: 500})
        .withMessage('description is too long');

   body('"websiteUrl')
        .isString()
        .withMessage('websiteUrl should be string')
        .isLength({max: 100})
        .withMessage('website url is too long')
        .matches(/^https:\/\/([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$/)
        .withMessage('website url does not match the template')


