import express from 'express';
import passport from 'passport';

import messageRouter from './message.router.js';
import authRouter from './auth.router.js';
import userRouter from './user.router.js';
import { authGuard } from '../middlewares/authGuard.js';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', authGuard, userRouter);
router.use('/messages', messageRouter);

// TODO update this to be cleaner
router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.status(200).json({ success: true });
});

export default router;
