import { Schema, model } from 'mongoose';
// Schema to create User model
const userSchema = new Schema({
    username: { type: String, unique: true, required: true, trimmed: true },
    email: { type: String, Required: true, Unique: true, match: [/.+@.+\..+/, 'Please enter a valid e-mail address'] },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
    ],
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
});
// Create a virtual property `friendCount` that retrieves the length of the user's `friends` array field on query.
userSchema.virtual('friendCount').get(function () {
    return `Total Friends: ${this.friends.length}`;
});
// Initialize our User model
const User = model('user', userSchema);
export default User;
