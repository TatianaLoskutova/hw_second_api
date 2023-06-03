import {body} from 'express-validator';
import base64 from 'js-base64';


export const authHeaderValidator = [
    body('Authorization')
        .notEmpty()
        .isString()
        .withMessage('Authorization header is missing')
        .custom((value: string) => {
            if (!value.startsWith('Basic ')) {
                throw new Error('Invalid Authorization header format');
            }

            const credentials = value.replace('Basic ', '');
            const [login, password] = base64.decode(credentials).split(':');
            if (login !== 'admin' || password !== 'qwerty') {
                throw new Error('Invalid login or password');
            }
            return true;
        }),
];