// src/models/User.ts
import mongoose, { Schema, models } from 'mongoose';

const UserSchema = new Schema(
  {
    uid: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default models.User || mongoose.model('User', UserSchema);

