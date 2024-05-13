import { NextFunction, Request, Response } from 'express';
import dayjs from 'dayjs';

import { getMeteorsData } from '../services/meteors.service';
import { MeteorsQuery } from '../types/meteors';

export const getMeteors = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const {
            start_date,
            end_date,
            count,
            were_dangerous_meteors
        }: MeteorsQuery = req.query;

        const meteorsData = await getMeteorsData(
            start_date,
            end_date,
            count,
            were_dangerous_meteors
        );

        return res.render('pages/meteors', meteorsData);
    } catch (error) {
        next(error);
    }
};

export const getForm = (req: Request, res: Response) =>
    res.render('pages/meteors-form', {
        maxDate: dayjs().format('YYYY-MM-DD')
    });
