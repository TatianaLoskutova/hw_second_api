import {NextFunction, Request, Response} from 'express';
import {ValidationError, validationResult} from 'express-validator';


export const errorsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errorFormat = ({msg, param} : ValidationError) => {
        return {message: msg, field: param}
    }
    const errors = validationResult(req).formatWith(errorFormat)
    if (!errors.isEmpty()) {
        res.status(400).send({errorsMessages: errors.array({onlyFirstError: true})})
    } else {
        next()
    }
}





