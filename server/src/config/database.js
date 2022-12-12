import mongoose from 'mongoose';

import { MONGO_URL } from './constants.js';

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

export const mongoConnect = async () => {
    await mongoose.connect(MONGO_URL);
};

export const mongoDisconnect = async () => {
    await mongoose.disconnect();
};
