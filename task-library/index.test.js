const { sortTransations } = require('./index');
const { transactions } = require('../db.json');

describe('sortTransations', () => {
  const expectedArray = sortTransations(transactions);

  test('The original data is an array', () => {
    expect(Array.isArray(expectedArray)).toBe(true);
  });
  test('We have sorted the array', () => {
    expect(JSON.stringify(transactions)).not.toBe(JSON.stringify(expectedArray));
  });
});
