// src/app/models/Give.ts
import mongoose, { Document, Model } from 'mongoose';

export interface GiveDoc extends Document {
  name: string;
  age: number;
  help: string;
  contact: string;
  email: string;
}

const GiveSchema = new mongoose.Schema({
  name: String,
  age: Number,
  help: String,
  contact: String,
  email: String,
}, { timestamps: true });

const Give: Model<GiveDoc> = mongoose.models.Give || mongoose.model('Give', GiveSchema);
export default Give;
