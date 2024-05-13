import { Router } from 'express';

import { getMeteors, getForm } from '../controllers/meteors.controllers';
import { queryValidation } from '../middleware/validation.middleware';
import { meteorsQuerySchema } from '../validators/meteors.validators';

export const meteors = Router()
    .get('/', getForm)
    .get('/data', queryValidation(meteorsQuerySchema), getMeteors);
