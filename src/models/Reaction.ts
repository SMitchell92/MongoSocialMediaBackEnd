import { Schema, Document, Types } from 'mongoose';
import dayjs from 'dayjs';

interface IReaction extends Document {
  username: string;
  createdAt:  Date | string;
    reactionBody: string;
    reactionId: Schema.Types.ObjectId;
}

const reactionSchema = new Schema<IReaction>(
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
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
},
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);


export default reactionSchema;
