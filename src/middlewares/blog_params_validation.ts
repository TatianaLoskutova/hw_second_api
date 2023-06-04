import {body, ValidationError, validationResult} from 'express-validator';
import {NextFunction, Request, Response} from 'express';


export const nameValidation = body('name')
    .isString()
    .trim()
    .isLength({min: 1, max: 15})
    .withMessage('Name is not correct')

export const descriptionValidation = body('description')
    .isString()
    .trim()
    .isLength({min: 1, max: 500})
    .withMessage('description is not correct');

export const websiteValidation = body('"websiteUrl')
    .isString()
    .trim()
    .isLength({min: 1 , max: 100})
    .isURL({protocols: ['https']})
    .withMessage('website is not correct')

export const errorsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errorFormatter = ({location, msg, param, value, nestedErrors}: ValidationError) => {
        return { message: msg, field: param};
    };
    const result = validationResult(req).formatWith(errorFormatter)
    const validatorArray = result.array({onlyFirstError: true})
    const myArray = validatorArray.map((element) => {
        return {
            field: element.field,
            message: element.message
        }
    })
    if (!result.isEmpty()) {
        res.status(400).send({ errorsMessages: myArray});
    } else {
        next()
    }
}

