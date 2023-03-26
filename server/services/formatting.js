import { v4 as uuidv4 } from 'uuid';

export function itemFieldsFormatter(itemData, category) {
  itemData.itemId = uuidv4();
  itemData.price *= 100;
  itemData.category = category;
  itemData.lastUpdated = new Date().toString();

  return itemData;
}

export function updatedItemFormatter(itemData, category) {
  // Add to history
  itemData = updateHistory(itemData);

  if (itemData.price) {
    itemData.price = parseFloat(itemData.price) * 100;
  }

  /*
  if (itemData.tags) {
    itemData.tags = tagsFormatter(itemData.tags);
  }
  */

  itemData.category = category;
  itemData.lastUpdated = new Date().toString();

  return itemData;
}

export function tagsFormatter(inputTags) {
  let tags = [];

  if (inputTags) {
    tags = inputTags.split(/[\s,]+/);
  }

  return tags;
}

export function updateHistory(itemData) {
  let isInHistory = false;
  const { price, units, lastUpdated, store, brand } = itemData;

  itemData.history.forEach((historyItem) => {
    if (historyItem.lastUpdated.getDate() === itemData.lastUpdated.getDate()) {
      isInHistory = true;
      return;
    }
  });

  if (!isInHistory) {
    itemData.history.push({ price, units, lastUpdated, store, brand });
  }

  return itemData;
}
