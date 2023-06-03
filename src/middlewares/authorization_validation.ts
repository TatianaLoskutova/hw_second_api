import base64 from 'js-base64';
import {NextFunction, Request, Response} from 'express';


export const authHeaderValidator = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Basic ')) {
        res.sendStatus(401);
        res.send('Authorization header is missing');
        return;
    }

    const credentials = authHeader.replace('Basic ', '');
    const [login, password] = base64.decode(credentials).split(':');


    if (login !== 'admin' && password !== 'qwerty') {
        res.sendStatus(401);
        res.send('Invalid credentials');
    }
    next()
}
