import mongoose from 'mongoose';
const { Schema } = mongoose;

import { historySchema } from './history.schema.js';

export const categorySchema = new Schema({
  itemId: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: false },
  price: { type: Number, required: true },
  units: { type: String, required: true },
  lastUpdated: { type: Date, required: true },
  store: { type: String, required: true },
  tags: [{ type: String, required: true }],
  history: [historySchema]
});
