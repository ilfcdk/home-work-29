// tests/math.test.js

import { sum, divide } from '../src/math.js';

describe('sum', () => {
  test('sum(2, 3) returns 5', () => {
    expect(sum(2, 3)).toBe(5);
  });
});

describe('divide', () => {
  test('divide(6, 2) returns 3', () => {
    expect(divide(6, 2)).toBe(3);
  });

  test('divide by zero throws error', () => {
    expect(() => divide(4, 0)).toThrow('Cannot divide by zero');
  });
});
