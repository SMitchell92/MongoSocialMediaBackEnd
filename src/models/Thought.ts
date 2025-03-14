import { Schema, model, Document } from 'mongoose';
import dayjs from 'dayjs';
import reactionSchema from './Reaction';

interface IThought extends Document {
  username: string;
  createdAt:  Date | string;
  thoughtText: string;
  reactions: [];
}

// Schema to create Post model
const thoughtSchema = new Schema<IThought>(
  {
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
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Create a virtual property `reactionCount` that gets the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get(function (this: any) {
    return this.reactions.length;
  });

// Initialize our Post model
const Thought = model('thought', thoughtSchema);

export default Thought;
