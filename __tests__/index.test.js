import sum from '../src/index';

test('sum must be correct', () => {
  expect(sum(1, 2)).toBe(3);
});
