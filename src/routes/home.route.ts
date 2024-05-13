import { Request, Response, Router } from 'express';
import dayjs from 'dayjs';

export const home = Router().get('/', (req: Request, res: Response) =>
    res.render('pages/home', {
        maxDate: dayjs().format('YYYY-MM-DD')
    })
);
