import { centsToDollars, dollarsToCents } from './functions.js';

test('Convert cents to dollars.', () => {
  expect(centsToDollars(99)).toBe(0.99);
});

test('Convert dollars to cents.', () => {
  expect(dollarsToCents(1)).toBe(100);
});
