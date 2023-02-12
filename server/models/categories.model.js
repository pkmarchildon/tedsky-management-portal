import meatsDB from './meats.schema.js';
import condimentsDB from './condiments.schema.js';
import fruitsDB from './fruits.schema.js';
import productsDB from './products.schema.js';
import vegetablesDB from './vegetables.schema.js';

export async function getItems(category) {
  if (category === 'meat') {
    return await _getItem(meatsDB);
  }

  if (category === 'condiments') {
    return await _getItem(condimentsDB);
  }

  if (category === 'fruits') {
    return await _getItem(fruitsDB);
  }

  if (category === 'products') {
    return await _getItem(productsDB);
  }

  if (category === 'vegetables') {
    return await _getItem(vegetablesDB);
  }
}

export async function createItem(category, newItem) {
  if (category === 'meat') {
    return await _createItem(meatsDB, newItem);
  }

  if (category === 'condiments') {
    return await _createItem(condimentsDB, newItem);
  }

  if (category === 'fruits') {
    return await _createItem(fruitsDB, newItem);
  }

  if (category === 'products') {
    return await _createItem(productsDB, newItem);
  }

  if (category === 'vegetables') {
    return await _createItem(vegetablesDB, newItem);
  }
}

export async function uptadeItem(category, updatedItem) {
  if (category === 'meat') {
    return await _updateItem(meatsDB, updatedItem);
  }

  if (category === 'condiments') {
    return await _updateItem(condimentsDB, updatedItem);
  }

  if (category === 'fruits') {
    return await _updateItem(fruitsDB, updatedItem);
  }

  if (category === 'products') {
    return await _updateItem(productsDB, updatedItem);
  }

  if (category === 'vegetables') {
    return await _updateItem(vegetablesDB, updatedItem);
  }
}

export async function deleteItem(category, itemId) {
  if (category === 'meat') {
    return await _deleteItem(meatsDB, itemId);
  }

  if (category === 'condiments') {
    return await _deleteItem(condimentsDB, itemId);
  }

  if (category === 'fruits') {
    return await _deleteItem(fruitsDB, itemId);
  }

  if (category === 'products') {
    return await _deleteItem(productsDB, itemId);
  }

  if (category === 'vegetables') {
    return await _deleteItem(vegetablesDB, itemId);
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
