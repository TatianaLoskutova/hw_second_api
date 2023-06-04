import base64 from 'js-base64';
import {NextFunction, Request, Response} from 'express';


export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const log = 'Basic YWRtaW46cXdlcnR5'
    if (req.headers.authorization !== log) {
        res.sendStatus(401)
    } else {
        next()
    }
}