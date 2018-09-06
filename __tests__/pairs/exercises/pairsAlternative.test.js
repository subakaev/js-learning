import { cons, car, cdr } from '../../../src/pairs/exercises/pairsAlternative';

test('pairsAlternative test', () => {
  const pair = cons(1, 2);
  expect(typeof pair).toEqual('function');

  expect(car(pair)).toBe(1);
  expect(cdr(pair)).toBe(2);
});
