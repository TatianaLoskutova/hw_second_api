import {param, ValidationError, validationResult} from 'express-validator';
import {NextFunction, Request, Response} from 'express';


// export const errorsMiddleware = (req: Request, res: Response, next: NextFunction) => {
//     const errorFormatter = ({location, msg, param, value, nestedErrors}: ValidationError) => {
//         return { message: msg, field: param}
//     }
//     const errors = validationResult(req).formatWith(errorFormatter)
//     const validatorArray = errors.array({onlyFirstError: true})
//     const myArray = validatorArray.map((el) => {
//         return {
//             field: el.field,
//             message: el.message
//         }
//     })
//     if (!errors.isEmpty()) {
//             res.status(400).send({ errorsMessages: myArray});
//     } else {
//         next()
//     }
// }



