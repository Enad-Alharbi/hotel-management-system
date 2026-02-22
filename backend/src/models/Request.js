// Request Model - Service requests (COMPLAINT, MAINTENANCE, HOUSEKEEPING)

const mongoose = require('mongoose');
const { Schema } = mongoose;

const requestSchema = new Schema(
  {
    roomId: {
      type: Schema.Types.ObjectId,
      ref: 'Room',
      required: true
    },
    type: {
      type: String,
      enum: ['COMPLAINT', 'MAINTENANCE', 'HOUSEKEEPING'],
      required: true
    },
    status: {
      type: String,
      enum: ['OPEN', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'],
      required: true,
      default: 'OPEN'
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 500
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  { timestamps: true }
);

// Indexes for filtering and querying
requestSchema.index({ roomId: 1 });
requestSchema.index({ status: 1 });
requestSchema.index({ createdBy: 1 });
requestSchema.index({ roomId: 1, status: 1 });

module.exports = mongoose.model('Request', requestSchema);
