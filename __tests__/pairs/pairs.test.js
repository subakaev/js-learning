import { cons, car, cdr } from '../../src/pairs/pairs';

test('Should create pair and it must be a function', () => {
  expect(typeof cons(1, 1)).toBe('function');
});

test('car should return correct value', () => {
  expect(car(cons(1, null))).toBe(1);
  expect(car(cons(null, undefined))).toBe(null);
  expect(car(cons(undefined, null))).toBe(undefined);
  expect(car(cons('1', null))).toBe('1');
  expect(car(cons(true, null))).toBe(true);
  expect(car(cons([1, 2], null))).toEqual([1, 2]);
  expect(car(cons({}, null))).toEqual({});
});

test('cdr should return correct value', () => {
  expect(cdr(cons(null, 1))).toBe(1);
  expect(cdr(cons(undefined, null))).toBe(null);
  expect(cdr(cons(null, undefined))).toBe(undefined);
  expect(cdr(cons(null, '1'))).toBe('1');
  expect(cdr(cons(null, true))).toBe(true);
  expect(cdr(cons(null, [1, 2]))).toEqual([1, 2]);
  expect(cdr(cons(null, {}))).toEqual({});
});
