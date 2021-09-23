import test from '../src/index.js';
import { test as myTest, expect } from '@jest/globals';

myTest('my func', () => {
  expect(test(3)).toBe(9);
});