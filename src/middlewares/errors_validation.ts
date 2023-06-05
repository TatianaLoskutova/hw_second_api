import {NextFunction, Request, Response} from 'express';
import {ValidationError, validationResult} from 'express-validator';


export const errorsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).send({errorsMessages: errors.array({onlyFirstError: true}).map(p => {
            return {
                message: p.msg,
                field: p.type
            }
            })
        })
    } else {
        next()
    }
}





