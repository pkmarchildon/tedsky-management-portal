import {
  getItems,
  getAllItems,
  createItem,
  uptadeItem,
  deleteItem
} from '../models/items.model.js';
import {
  itemFieldsFormatter,
  updatedItemFormatter
} from '../services/formatting.js';

export async function httpGetCategories(req, res) {
  const { category } = req.query;

  if (category) {
    return res.status(200).json(await getItems(category));
  } else {
    return res.status(200).json(await getAllItems());
  }
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
    itemData.units === null ||
    itemData.store === null ||
    itemData.store === ''
  ) {
    return res.status(400).json({ error: 'A property is missing a value' });
  }

  // Verify if a property is missing.
  if (
    itemData.name === undefined ||
    itemData.price === undefined ||
    itemData.units === undefined ||
    itemData.store === undefined
  ) {
    return res.status(400).json({ error: 'A property is missing.' });
  }

  let formatedItem = itemFieldsFormatter(itemData, category);

  let createdItem = await createItem(category, formatedItem);
  let cleanedItem = _cleanMongoObject(createdItem);

  return res.status(200).json(cleanedItem);
}

export async function httpUpdateCategories(req, res) {
  const { category } = req.query;
  const updatedItem = req.body;

  let formatedItem = updatedItemFormatter(updatedItem, category);

  const returnedItem = await uptadeItem(category, formatedItem);

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

function _cleanMongoObject(initialItem) {
  let { _id, __v, ...returningItem } = initialItem._doc;

  return returningItem;
}
