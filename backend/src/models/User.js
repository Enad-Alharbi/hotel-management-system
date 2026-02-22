// User Model - Authentication accounts (RECEPTION or ROOM role)

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      minlength: 3,
      maxlength: 50
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['RECEPTION', 'ROOM'],
      required: true,
      default: 'ROOM'
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

// Index for login queries
userSchema.index({ username: 1 });

module.exports = mongoose.model('User', userSchema);
