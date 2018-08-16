import React from 'react';
import 'isomorphic-fetch';
import { fetchAPI } from './utils';

describe('fetchAPI', () => {
  const testUrl = 'http://localhost:3000/api/transactions';
  test('We should be able to request some data without failing', async () => {
    let data = await fetchAPI(testUrl);
    expect(Array.isArray(data)).toBe(true);
  });
});
