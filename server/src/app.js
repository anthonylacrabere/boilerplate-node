import cors from 'cors';
import http from 'http';
import helmet from 'helmet';
import express from 'express';
import passport from 'passport';

import router from './api/routes/router.js';
import { PORT } from './config/constants.js';
import { mongoConnect } from './config/database.js';
import './api/services/auth.js';

const app = express();

app.use(
    cors({
        origin: 'http://localhost:3000'
    })
);
app.use(helmet());

app.use(express.json());
app.use(passport.initialize());

app.use('/', router);

/**
 * SERVER START
 */

const server = http.createServer(app);

await mongoConnect();

server.listen(PORT, () => {
    console.log('listening on port', PORT);
});
