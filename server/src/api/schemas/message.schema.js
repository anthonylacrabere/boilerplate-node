import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    sender: {
        type: String,
        required: true
    },
    recipient: {
        type: String,
        required: true
    }
});

export default mongoose.model('Message', messageSchema);
