import { cons, toString } from '../../../src/pairs/pairs';

import sumOfPairs from '../../../src/pairs/exersices/sumOfPairs';

test('sumOfPairs test', () => {
  expect(toString(sumOfPairs(cons(1, 2), cons(3, 4)))).toEqual(toString(cons(4, 6)));
  expect(toString(sumOfPairs(cons(-1, 2), cons(3, -4)))).toEqual(toString(cons(2, -2)));
});
