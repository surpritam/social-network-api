const { Schema, model, Types } = require('mongoose');
const dayjs = require('dayjs');

// Schema for Reaction
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dayjs(timestamp).format('MMM DD, YYYY [at] hh:mm A'),
  },
},
{
  toJSON: {
    getters: true,
  },
  id: false,
});

module.exports = reactionSchema;