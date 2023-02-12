import { v4 as uuidv4 } from 'uuid';
import mongoose from 'mongoose';

import {
  getItems,
  createItem,
  uptadeItem,
  deleteItem
} from '../models/categories.model.js';

var categorySchema = new mongoose.Schema({
  name: String,
  price: Number,
  units: String,
  lastUpdated: Date,
  store: String,
  tags: [String],
  history: []
});

export async function httpGetCategories(req, res) {
  const { category } = req.query;

  return res.status(200).json(await getItems(category));
}

export async function httpCreateCategories(req, res) {
  const { category } = req.query;
  const itemData = req.body;

  // Verify if a property is missing a value.
  if (
    itemData.name === '' ||
    itemData.name === null ||
    itemData.price === null ||
    itemData.units === '' ||
    itemData.units === null
  ) {
    return res.status(400).json({ error: 'A property is missing a value' });
  }

  // Verify if a property is missing.
  if (
    itemData.name === undefined ||
    itemData.price === undefined ||
    itemData.units === undefined
  ) {
    return res.status(400).json({ error: 'A property is missing.' });
  }

  itemData.itemId = uuidv4();
  itemData.price *= 100;

  await createItem(category, itemData);

  return res.status(200).json(itemData);
}

export async function httpUpdateCategories(req, res) {
  const { category } = req.query;
  const updatedItem = req.body;

  if (updatedItem.price) {
    updatedItem.price *= 100;
  }

  const returnedItem = await uptadeItem(category, updatedItem);

  if (!returnedItem) {
    return res.status(400).json({ error: 'Could not find the document.' });
  }

  return res.status(200).json(returnedItem);
}

export async function httpDeleteCategories(req, res) {
  const { category, itemId } = req.query;

  const response = await deleteItem(category, itemId);

  return res.status(204).json(response.body);
}
