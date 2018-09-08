import {
  l, cons, head, tail, isEmpty, toString as listToString,
} from '../../src/pairs-list/pairs-list';

test('l test', () => {
  expect(l()).toBeNull();

  const list = l(1, 2);
  expect(head(list)).toBe(1);
  expect(head(tail(list))).toBe(2);
});

test('cons test', () => {
  expect(head(cons(10, l()))).toBe(10);
  expect(head(cons(10, l(1)))).toBe(10);
  expect(head(cons(10, l(1, 2)))).toBe(10);
});

test('isEmpty test', () => {
  expect(isEmpty(l())).toBeTruthy();
  expect(isEmpty(l(1))).toBeFalsy();
  expect(isEmpty(l(1, 2))).toBeFalsy();
});

test('toString test', () => {
  expect(listToString(l())).toEqual('()');
  expect(listToString(l(1))).toEqual('(1)');
  expect(listToString(l(1, 2))).toEqual('(1, 2)');
});
