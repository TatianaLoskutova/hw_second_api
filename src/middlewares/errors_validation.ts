import {validationResult} from 'express-validator';
import {NextFunction, Request, Response} from 'express';
import {blogParamsValidation} from './blog_params_validation';
import {ErrorsType} from '../types';

export const errorsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Если есть ошибки - возвращаем ошибку и тело ответа в необходимом формате
        const errorsMessages : ErrorsType[] = []
        errorsMessages.map((error) => ({ message: error.message }));

        res.status(400).send({ errorsMessages });
    } else {
        next()
    }
}





