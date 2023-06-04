import {param, ValidationError, validationResult} from 'express-validator';
import {NextFunction, Request, Response} from 'express';


export const errorsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
            res.status(400).send({ errorsMessages: errors.array({onlyFirstError: true})});
    } else {
        next()
    }
}



