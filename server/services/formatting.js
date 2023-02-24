import { v4 as uuidv4 } from 'uuid';

export function itemFieldsFormatter(itemData, category) {
  itemData.itemId = uuidv4();
  itemData.price *= 100;
  itemData.category = category;
  itemData.lastUpdated = new Date().toString();

  return itemData;
}

export function updatedItemFormatter(itemData, category) {
  if (itemData.price) {
    itemData.price = parseFloat(itemData.price) * 100;
  }

  itemData.category = category;
  itemData.lastUpdated = new Date().toString();

  return itemData;
}

function tagsFormatter(inputTags) {
  let tags = [];

  if (inputTags) {
    tags = inputTags.split(' ');
  }

  return tags;
}
