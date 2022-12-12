import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

const authRouter = express.Router();

/**
 * JWT AUTHENTICATION
 */

authRouter.post('/signup', passport.authenticate('signup', { session: false }), async (req, res, next) => {
    return res.status(200).json({
        success: true,
        message: 'User created successfully',
        user: {
            id: req.user.id,
            email: req.user.email,
            password: req.user.password
        }
    });
});

authRouter.post('/login', async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if (err || !user) {
                const error = new Error('An error occurred.');

                return next(error);
            }

            req.login(user, { session: false }, async (error) => {
                if (error) return next(error);

                const body = { _id: user._id, email: user.email };
                const token = jwt.sign({ user: body }, 'TOP_SECRET');

                return res.json({
                    success: true,
                    message: 'User logged in successfully',
                    user,
                    token: 'Bearer ' + token
                });
            });
        } catch (error) {
            return next(error);
        }
    });
});

/**
 * END JWT AUTHENTICATION
 */

export default authRouter;
