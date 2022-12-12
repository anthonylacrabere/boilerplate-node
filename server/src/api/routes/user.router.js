import express from 'express';
import { httpGetAllUsers } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.get('/', httpGetAllUsers);

export default userRouter;
