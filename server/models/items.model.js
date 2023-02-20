import mongoose from 'mongoose';

import { categorySchema } from './item.schema.js';

const meatModel = mongoose.model('meats', categorySchema);
const condimentsModel = mongoose.model('condiments', categorySchema);
const fruitsModel = mongoose.model('fruits', categorySchema);
const productsModel = mongoose.model('products', categorySchema);
const vegetablesModel = mongoose.model('vegetables', categorySchema);

export async function getAllItems() {
  const meatItems = await _getItem(meatModel);
  const condimentsItems = await _getItem(condimentsModel);
  const fruitsItems = await _getItem(fruitsModel);
  const productsItems = await _getItem(productsModel);
  const vegetablesItems = await _getItem(vegetablesModel);

  let items = [
    ...meatItems,
    ...condimentsItems,
    ...fruitsItems,
    ...productsItems,
    ...vegetablesItems
  ];

  return items;
}

export async function getItems(category) {
  switch (category) {
    case 'meat':
      return await _getItem(meatModel);

    case 'condiments':
      return await _getItem(condimentsModel);

    case 'fruits':
      return await _getItem(fruitsModel);

    case 'products':
      return await _getItem(productsModel);

    case 'vegetables':
      return await _getItem(vegetablesModel);

    default:
      throw new Error('Unknown category: ' + category);
  }
}

export async function createItem(category, newItem) {
  switch (category) {
    case 'meat':
      return await _createItem(meatModel, newItem);

    case 'condiments':
      return await _createItem(condimentsModel, newItem);

    case 'fruits':
      return await _createItem(fruitsModel, newItem);

    case 'products':
      return await _createItem(productsModel, newItem);

    case 'vegetables':
      return await _createItem(vegetablesModel, newItem);

    default:
      throw new Error('Unknown category: ' + category);
  }
}

export async function uptadeItem(category, updatedItem) {
  switch (category) {
    case 'meat':
      return await _updateItem(meatModel, updatedItem);

    case 'condiments':
      return await _updateItem(condimentsModel, updatedItem);

    case 'fruits':
      return await _updateItem(fruitsModel, updatedItem);

    case 'products':
      return await _updateItem(productsModel, updatedItem);

    case 'vegetables':
      return await _updateItem(vegetablesModel, updatedItem);

    default:
      throw new Error('Unknown category: ' + category);
  }
}

export async function deleteItem(category, itemId) {
  switch (category) {
    case 'meat':
      return await _deleteItem(meatModel, itemId);

    case 'condiments':
      return await _deleteItem(condimentsModel, itemId);

    case 'fruits':
      return await _deleteItem(fruitsModel, itemId);

    case 'products':
      return await _deleteItem(productsModel, itemId);

    case 'vegetables':
      return await _deleteItem(vegetablesModel, itemId);

    default:
      throw new Error('Unknown category: ' + category);
  }
}

async function _getItem(categoryDB) {
  return await categoryDB.find({}, { '_id': 0, '__v': 0 });
}

async function _createItem(categoryDB, newItem) {
  return await categoryDB.create(newItem);
}

async function _updateItem(categoryDB, updatedItem) {
  return await categoryDB.findOneAndUpdate(
    { itemId: updatedItem.itemId },
    updatedItem,
    {
      upsert: false,
      new: true,
      projection: { '_id': 0, '__v': 0 }
    }
  );
}

async function _deleteItem(categoryDB, itemId) {
  return await categoryDB.findOneAndDelete({ itemId });
}
