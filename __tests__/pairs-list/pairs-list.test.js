import {
  l, cons, head, tail, isEmpty, toString as listToString,
  has, reverse, concat,
} from '../../src/pairs-list/pairs-list';

test('l test', () => {
  expect(l()).toBeNull();

  const list = l(1, 2);
  expect(head(list)).toBe(1);
  expect(head(tail(list))).toBe(2);
});

test('should throw error', () => {
  try {
    head(l());
  } catch (e) {
    expect(e).toBeDefined();
  }
  try {
    tail(l());
  } catch (e) {
    expect(e).toBeDefined();
  }
  try {
    head(5);
  } catch (e) {
    expect(e).toBeDefined();
  }
  try {
    tail(3);
  } catch (e) {
    expect(e).toBeDefined();
  }
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

test('has test', () => {
  expect(has(l(), 2)).toBeFalsy();
  expect(has(l(1, 2, 3), 10)).toBeFalsy();
  expect(has(l(1), 1)).toBeTruthy();
  expect(has(l(1, 2, 3), 2)).toBeTruthy();
});

test('reverse test', () => {
  expect(listToString(reverse(l()))).toEqual('()');
  expect(listToString(reverse(l(1)))).toEqual('(1)');
  expect(listToString(reverse(l(1, 2, 3)))).toEqual('(3, 2, 1)');
});

test('concat test', () => {
  expect(listToString(concat(l(), l()))).toEqual('()');
  expect(listToString(concat(l(1), l()))).toEqual('(1)');
  expect(listToString(concat(l(), l(1)))).toEqual('(1)');
  expect(listToString(concat(l(1, 2), l(3, 4, 5)))).toEqual('(1, 2, 3, 4, 5)');
});
