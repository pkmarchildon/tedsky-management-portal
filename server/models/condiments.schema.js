import mongoose from 'mongoose';

const condimentsSchema = new mongoose.Schema({
  itemId: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  units: { type: String, required: true }
});

export default mongoose.model('Condiments', condimentsSchema);
