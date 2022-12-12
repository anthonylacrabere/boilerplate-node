import Message from '../schemas/message.schema.js';

export const getMessages = async () => {
    console.log('get messages...');
    return await Message.find(
        {},
        {
            _id: 0,
            __v: 0
        }
    );
};
