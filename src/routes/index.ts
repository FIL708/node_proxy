import { Router } from 'express';

import { rover } from './rover.route';
import { home } from './home.route';
import { meteors } from './meteors.route';

export default Router()
    .use('/', home)
    .use('/meteors', meteors)
    .use('/rover', rover);
