import {body, validationResult} from 'express-validator';
import {NextFunction, Request, Response} from 'express';

export const blogParamsValidation = body('name')
        .isString()
        .isLength({max: 15})
        .withMessage('name is too long')
    ;
    body('description')
        .isString()
        .isLength({max: 500})
        .withMessage('description is too long')
    ;
    body('"websiteUrl')
        .isString()
        .isLength({max: 100})
        .withMessage('website url is too long')
        .matches(/^https:\/\/([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$/)
        .withMessage('website url does not match the template')



// export function validateBlogParams(req: Request, res: Response, next: NextFunction) {
//     const blogParamsValidation = [
//         body('name')
//             .isString()
//             .isLength({max: 15})
//             .withMessage('name is too long')
//         , body('description')
//             .isString()
//             .isLength({max: 500})
//             .withMessage('description is too long')
//         , body('"websiteUrl')
//             .isString()
//             .isLength({max: 100})
//             .withMessage('website url is too long')
//             .matches(/^https:\/\/([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$/)
//             .withMessage('website url does not match the template')
//     ]
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }
//     next();
// }