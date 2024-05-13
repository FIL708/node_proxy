import path from 'path';
import express, { Application } from 'express';
import config from 'config';
import nunjucks from 'nunjucks';

import routes from './routes';
import { errorHandler } from './middleware/error-handler.middleware';
import { notFound } from './middleware/not-found.middleware';
import { logger } from './utils/logger';

const app: Application = express();
const PORT = config.get('PORT');

nunjucks.configure('src/views', {
    autoescape: true,
    express: app
});

app.set('view engine', 'njk')
    .use(express.static(path.join(__dirname, 'public')))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use('/', routes)
    .use(errorHandler)
    .use(notFound)
    .listen(PORT, () => logger.info(`Server started at: ${PORT}`));
