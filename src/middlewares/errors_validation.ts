import {param, validationResult} from 'express-validator';
import {NextFunction, Request, Response} from 'express';


export const errorsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // const errors = validationResult(req).formatWith(({msg, param}) => ({message: msg, field: param}));
    const errors = validationResult(req).formatWith(({ msg, param }) => ({ field: param, message: msg }));

    if (!errors.isEmpty()) {
        const errorsMessages= errors.array().map(({ field, message }) => ({ field, message }));
            res.status(400).send({ errorsMessages });
    } else {
        next()
    }
}



