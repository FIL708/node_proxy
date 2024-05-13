import { Router } from 'express';

import { postRover, getForm } from '../controllers/rover.controller';
import { bodyValidation } from '../middleware/validation.middleware';
import { roverFormSchema } from '../validators/rover.validators';

export const rover = Router()
    .get('/', getForm)
    .post('/', bodyValidation(roverFormSchema), postRover);
