const { sortArray, searchArray } = require('./index');
const { transactions } = require('../db.json');

describe('searchArray', () => {
  const searchTerm = '3223';
  const expectedSearchResults =  {
    "name": "Checking Account 3223",
  };
  const expectedArray = searchArray(transactions, searchTerm);

  test('The original data is an array', () => {
    expect(Array.isArray(expectedArray)).toBe(true);
  });
  test('The array has Changed', () => {
    expect(JSON.stringify(transactions)).not.toBe(JSON.stringify(expectedArray));
  });
  test('We have the expected result', () => {
    expect(expectedArray).toContainEqual(expect.objectContaining(expectedSearchResults));
  });
});


describe('sortTransations', () => {
  const expectedArray = sortArray(transactions);

  test('The original data is an array', () => {
    expect(Array.isArray(expectedArray)).toBe(true);
  });
  test('The array has Changed', () => {
    expect(JSON.stringify(transactions)).not.toBe(JSON.stringify(expectedArray));
  });
  test('The array is sorted by amount', () => {
    const firstResult = expectedArray[0].amount;
    const secondResult = expectedArray[1].amount;
    expect(secondResult).toBeGreaterThan(firstResult);
  });
});
