import { Schema, model, Document, ObjectId } from 'mongoose';

interface IUser extends Document {
  username: string;
  email: string;
  thoughts: ObjectId[];
  friends: ObjectId[];
  friendCount: number;
}

const userSchema = new Schema(
  {
    username: { type:String, unique: true, required: true, trimmed: true }, 
    email: { type:String, Required: true, Unique: true, match: [/.+@.+\..+/, 'Please enter a valid e-mail address'] },
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
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function (this: IUser) {
    return `Total Friends: ${this.friends.length}`;
  })
 
const User = model('User', userSchema);

export default User;
