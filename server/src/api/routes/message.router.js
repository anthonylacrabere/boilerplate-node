import express from 'express';
import { httpGetAllMessages } from '../controllers/message.controller.js';

const messageRouter = express.Router();

messageRouter.get('/', httpGetAllMessages);

export default messageRouter;
