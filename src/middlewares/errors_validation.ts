import {ValidationError, validationResult} from 'express-validator';
import {NextFunction, Request, Response} from 'express';
import {ErrorsType} from '../types';


export const errorsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errors: ErrorsType = {errorsMessages: []};
}





