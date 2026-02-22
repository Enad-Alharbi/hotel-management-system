// Stay Model - Guest check-in/check-out temporal data

const mongoose = require('mongoose');
const { Schema } = mongoose;

const staySchema = new Schema(
  {
    roomId: {
      type: Schema.Types.ObjectId,
      ref: 'Room',
      required: true
    },
    guestName: {
      type: String,
      required: true,
      trim: true
    },
    guestPhone: {
      type: String,
      required: true,
      trim: true
    },
    checkInDate: {
      type: Date,
      required: true
    },
    checkOutDate: {
      type: Date,
      default: null
    },
    status: {
      type: String,
      enum: ['CHECKED_IN', 'CHECKED_OUT'],
      required: true,
      default: 'CHECKED_IN'
    }
  },
  { timestamps: true }
);

// Validation: if checkOutDate exists, it must be after checkInDate
staySchema.pre('validate', function(next) {
  if (this.checkOutDate && this.checkOutDate <= this.checkInDate) {
    this.invalidate('checkOutDate', 'Check-out date must be after check-in date');
  }
  next();
});

// Indexes for efficient querying
staySchema.index({ roomId: 1 });
staySchema.index({ roomId: 1, status: 1 });

module.exports = mongoose.model('Stay', staySchema);
