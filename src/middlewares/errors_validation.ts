import {validationResult} from 'express-validator';
import {NextFunction, Request, Response} from 'express';
import {ErrorsType} from '../types';

export const errorsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // // Если есть ошибки - возвращаем ошибку и тело ответа в необходимом формате
        // const errorsMessages : ErrorsType[] = errors.array().map((error) => ({
        //     message: error.msg,
        //     field: error.param
        // }));
        res.status(400).send({ errors: errors.array() });
    } else {
        next()
    }
}





