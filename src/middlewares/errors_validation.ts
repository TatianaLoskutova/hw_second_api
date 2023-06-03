import {validationResult} from 'express-validator';
import {NextFunction, Request, Response} from 'express';

export const errorsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Если есть ошибки - возвращаем ошибку и тело ответа в необходимом формате
        const errorsMessages = errors
            .array()
            .map((error) => ({ message: error.msg, field: error.type }));

        res.status(400).send({ errorsMessages });
    } else {
        // Если ошибок нет - возвращаем успешный результат
        next()
    }
}





