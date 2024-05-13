import { NextFunction, Request, Response } from 'express';
import { logger } from '../utils/logger';
import { HttpError } from '../utils/http-error';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof HttpError) {
        const { statusCode, message } = err;

        logger.error(err);

        return res
            .status(statusCode)
            .render('pages/error', { statusCode, message });
    }

    logger.error(err);

    next();
};
