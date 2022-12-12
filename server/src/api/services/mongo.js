import mongoose from 'mongoose';
import dbConfig from '../config/database.js';

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

export const mongoConnect = async () => {
    await mongoose.connect(dbConfig.MONGO_URL);
};

export const mongoDisconnect = async () => {
    await mongoose.disconnect();
};
