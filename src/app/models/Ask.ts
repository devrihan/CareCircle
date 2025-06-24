// src/app/models/Ask.ts
import mongoose, { Document, Model } from 'mongoose';

export interface AskDoc extends Document {
  name: string;
  age: number;
  whatINeed: string;
  contact: string;
  email: string;
}

const AskSchema = new mongoose.Schema({
  name: String,
  age: Number,
  whatINeed: String,
  contact: String,
  email: String,
}, { timestamps: true });

const Ask: Model<AskDoc> = mongoose.models.Ask || mongoose.model('Ask', AskSchema);
export default Ask;
