import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    username: { type: String, unique: true, required: true, trimmed: true },
    email: { type: String, Required: true, Unique: true, match: [/.+@.+\..+/, 'Please enter a valid e-mail address'] },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
});
userSchema.virtual('friendCount').get(function () {
    return `Total Friends: ${this.friends.length}`;
});
const User = model('User', userSchema);
export default User;
