import {NextFunction, Request, Response} from 'express';
import {ValidationError, validationResult} from 'express-validator';


export const errorsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errorFormat = ({msg, type} : ValidationError) => {
        return {message: msg, field: type}
    }
    const errors = validationResult(req).formatWith(errorFormat)
    if (!errors.isEmpty()) {
        res.status(400).send({errorsMessages: errors.array({onlyFirstError: true})})
    } else {
        next()
    }
}





