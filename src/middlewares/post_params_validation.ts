import {body} from 'express-validator';


export const postParamsValidation = body('title')
    .isString()
    .withMessage('title should be string')
    .isLength({max: 30})
    .withMessage('title is too long')
;
body('shortDescription')
    .isString()
    .withMessage('shortDescription should be string')
    .isLength({max: 100})
    .withMessage('shortDescription is too long')
;
body('"content')
    .isString()
    .withMessage('content should be string')
    .isLength({max: 1000})
    .withMessage('content url is too long')
;
body('blogId')
    .isString()
    .withMessage('blogId should be string')


