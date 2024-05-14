import path from 'path';
import express, { Application } from 'express';
import config from 'config';
import helmet from 'helmet';
import nunjucks from 'nunjucks';
import * as Sentry from '@sentry/node';
import { nodeProfilingIntegration } from '@sentry/profiling-node';

import routes from './routes';
import { errorHandler } from './middleware/error-handler.middleware';
import { notFound } from './middleware/not-found.middleware';
import { logger } from './utils/logger';

const app: Application = express();
const PORT: number = config.get('PORT');
const SENTRY_URL: string = config.get('SENTRY_URL');

nunjucks.configure('src/views', {
    autoescape: true,
    express: app
});

Sentry.init({
    dsn: SENTRY_URL,
    integrations: [
        new Sentry.Integrations.Http({ tracing: true }),
        new Sentry.Integrations.Express({ app }),
        nodeProfilingIntegration()
    ],
    tracesSampleRate: 1.0,
    profilesSampleRate: 1.0
});

app.set('view engine', 'njk')
    .use(express.static(path.join(__dirname, 'public')))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(helmet())
    .use(Sentry.Handlers.requestHandler())
    .use(Sentry.Handlers.tracingHandler())
    .use('/', routes)
    .use(Sentry.Handlers.errorHandler())
    .use(errorHandler)
    .use(notFound)
    .listen(PORT, () => logger.info(`Server started at: ${PORT}`));
