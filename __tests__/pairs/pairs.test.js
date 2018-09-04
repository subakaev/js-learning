import {
  cons, car, cdr, isPair,
} from '../../src/pairs/pairs';

test('Should create pair and it must be a function', () => {
  const pair = cons(1, 2);
  expect(isPair(pair)).toBeTruthy();
  expect(isPair(() => {})).toBeFalsy();
  expect(pair('qwerty')).toBeUndefined();
});

test('car should return correct value', () => {
  expect(car(cons(1, null))).toBe(1);
  expect(car(cons(null, undefined))).toBeNull();
  expect(car(cons(undefined, null))).toBeUndefined();
  expect(car(cons('1', null))).toBe('1');
  expect(car(cons(true, null))).toBe(true);

  const arr = [1, 2];
  expect(car(cons(arr, null))).toBe(arr);

  const obj = { someProp: 1 };
  expect(car(cons(obj, null))).toBe(obj);
});

test('cdr should return correct value', () => {
  expect(cdr(cons(null, 1))).toBe(1);
  expect(cdr(cons(undefined, null))).toBeNull();
  expect(cdr(cons(null, undefined))).toBeUndefined();
  expect(cdr(cons(null, '1'))).toBe('1');
  expect(cdr(cons(null, true))).toBe(true);

  const arr = [1, 2];
  expect(cdr(cons(null, arr))).toBe(arr);

  const obj = { someProp: 1 };
  expect(cdr(cons(null, obj))).toBe(obj);
});
