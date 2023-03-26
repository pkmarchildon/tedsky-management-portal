import { tagsFormatter, updateHistory } from './formatting.js';

test('Tags formatting.', () => {
  const initialTags = 'pomme banane';
  let returnedTags = tagsFormatter(initialTags);

  expect(returnedTags).toEqual(['pomme', 'banane']);
});

test('Add to history.', () => {
  const itemData = {
    itemId: '1faebe78-cd41-423d-bea1-a38bf1c476c6',
    name: 'boeuf hâché',
    category: 'meat',
    price: 199,
    units: 'lb',
    lastUpdated: new Date('2023-03-26T19:11:41.000+00:00'),
    store: 'Adonis',
    tags: [],
    history: [
      {
        price: 199,
        units: 'lb',
        lastUpdated: new Date('2023-03-21T19:11:41.000+00:00'),
        store: 'Super C',
        brand: 'my brand'
      }
    ],
    brand: 'my brand'
  };

  const returnedItem = updateHistory(itemData);

  expect(returnedItem.history.length).toBe(2);
});
