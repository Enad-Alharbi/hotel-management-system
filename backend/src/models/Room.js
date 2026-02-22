// Room Model - Physical hotel room + linked user account

const mongoose = require('mongoose');
const { Schema } = mongoose;

const roomSchema = new Schema(
  {
    roomNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true
    },
    floor: {
      type: Number,
      required: true,
      min: 1
    },
    capacity: {
      type: Number,
      required: true,
      min: 1
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

// Indexes for efficient queries
roomSchema.index({ isActive: 1 });
roomSchema.index({ userId: 1 });

module.exports = mongoose.model('Room', roomSchema);
