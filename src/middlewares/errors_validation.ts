import {validationResult} from 'express-validator';
import {NextFunction, Request, Response} from 'express';
import {ErrorsType} from '../types';

export const errorsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // const errorsMessages = errors.array().map((error) => ({
        //     message: error.msg,
        //     field: error.
        // }));
        res.status(400).send({ errors: errors.array() });
    } else {
        next()
    }
}





