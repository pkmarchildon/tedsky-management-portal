import mongoose from 'mongoose';
const { Schema } = mongoose;

export const historySchema = new Schema({
  date: { type: Date, required: true },
  price: { type: Number, required: true },
  units: { type: String, required: true },
  store: { type: String, required: true }
});
