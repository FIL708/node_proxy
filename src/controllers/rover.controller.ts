import { NextFunction, Request, Response } from 'express';

import { getLastRoverPhotos } from '../services/rover.service';

export const getForm = (req: Request, res: Response) =>
    res.render('pages/rover-form');

export const postRover = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { userName } = req.body;
        const photos = await getLastRoverPhotos();

        return res.render('pages/rover', { photos, userName });
    } catch (error) {
        next(error);
    }
};
