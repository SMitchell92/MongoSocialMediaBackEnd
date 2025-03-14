import { Schema, Types } from 'mongoose';
import dayjs from 'dayjs';
const reactionSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: () => dayjs().format('MMM DD, YYYY [at] hh:mm a'),
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
}, {
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
});
export default reactionSchema;
