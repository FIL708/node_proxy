import { Request, Response } from 'express';

import { logger } from '../utils/logger';

export const notFound = (req: Request, res: Response) => {
    const { originalUrl } = req;

    logger.error({ statusCode: 404, message: 'Not Found', originalUrl });

    return res.status(404).render('pages/not-found', { url: originalUrl });
};
