import { Schema, model } from 'mongoose';
import dayjs from 'dayjs';
import reactionSchema from './Reaction.js';
// Schema to create Post model
const thoughtSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: () => dayjs().format('MMM DD, YYYY [at] hh:mm a'),
    },
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    reactions: [
        reactionSchema
    ]
}, {
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
});
// Create a virtual property `reactionCount` that gets the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});
// Initialize our Post model
const Thought = model('thought', thoughtSchema);
export default Thought;
