import { getMessages } from '../models/message.model.js';

export const httpGetAllMessages = async (req, res) => {
    const messages = await getMessages();
    return res.status(200).json(messages);
};
