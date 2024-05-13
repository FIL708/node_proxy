import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';

import { HttpError } from '../utils/http-error';

export const queryValidation =
    (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.query);

        if (error) {
            throw new HttpError(
                `ValidationError in request query parameters: ${error.details[0].message}`,
                400
            );
        }

        next();
    };

export const bodyValidation =
    (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body);

        if (error) {
            throw new HttpError(
                `ValidationError in request body parameters: ${error.details[0].message}`,
                400
            );
        }

        next();
    };
