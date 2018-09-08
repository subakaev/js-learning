import { isPair } from '../../../src/pairs/pairs';

import {
  make, numer, denom, toString, isEqual, add, sub, mul, div,
} from '../../../src/pairs/exercises/rational';

test('make rational test', () => {
  const number = make(1, 2);

  expect(isPair(number)).toBeTruthy();
  expect(numer(number)).toBe(1);
  expect(denom(number)).toBe(2);
});

test('toString test', () => {
  expect(toString(make(1, 2))).toEqual('1 / 2');
  expect(toString(make(4, 1))).toEqual('4 / 1');
});

test('isEqual test', () => {
  expect(isEqual(make(1, 2), make(1, 2))).toBeTruthy();
  expect(isEqual(make(1, 2), make(2, 4))).toBeTruthy();

  expect(isEqual(make(1, 2), make(2, 1))).toBeFalsy();
});

test('add test', () => {
  const number1 = add(make(1, 3), make(1, 3));

  expect(numer(number1)).toBe(6);
  expect(denom(number1)).toBe(9);

  const number2 = add(make(1, 3), make(1, 2));

  expect(numer(number2)).toBe(5);
  expect(denom(number2)).toBe(6);
});

test('sub test', () => {
  const number1 = sub(make(2, 3), make(1, 3));

  expect(numer(number1)).toBe(3);
  expect(denom(number1)).toBe(9);

  const number2 = sub(make(1, 3), make(1, 2));

  expect(numer(number2)).toBe(-1);
  expect(denom(number2)).toBe(6);
});

test('mul test', () => {
  const number1 = mul(make(2, 3), make(1, 3));

  expect(numer(number1)).toBe(2);
  expect(denom(number1)).toBe(9);

  const number2 = mul(make(1, 3), make(1, 2));

  expect(numer(number2)).toBe(1);
  expect(denom(number2)).toBe(6);
});

test('div test', () => {
  const number1 = div(make(2, 3), make(1, 3));

  expect(numer(number1)).toBe(6);
  expect(denom(number1)).toBe(3);

  const number2 = div(make(1, 3), make(1, 2));

  expect(numer(number2)).toBe(2);
  expect(denom(number2)).toBe(3);
});
