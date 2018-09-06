import { cdr, isPair } from '../../src/pairs/pairs';

import { makePoint } from '../../src/points/points';

import {
  makeRectangle, getStartPoint, getWidth, getHeight, square, perimeter, containsTheOrigin,
} from '../../src/points/rectangles';

test('makeRectangle test', () => {
  const rect = makeRectangle(makePoint(1, 1), 10, 10);

  expect(isPair(rect)).toBeTruthy();
  expect(isPair(cdr(rect))).toBeTruthy();
});

test('getStartPoint test', () => {
  const location = makePoint(1, 2);

  expect(getStartPoint(makeRectangle(location, 10, 20))).toBe(location);
});

test('getWidth test', () => {
  expect(getWidth(makeRectangle(makePoint(1, 1), 10, 20))).toBe(10);
});

test('getHeight test', () => {
  expect(getHeight(makeRectangle(makePoint(1, 1), 10, 20))).toBe(20);
});

test('square test', () => {
  expect(square(makeRectangle(makePoint(1, 1), 10, 20))).toBe(200);
  expect(square(makeRectangle(makePoint(1, 1), 1, 2))).toBe(2);
});

test('perimeter test', () => {
  expect(perimeter(makeRectangle(makePoint(1, 1), 10, 20))).toBe(60);
  expect(perimeter(makeRectangle(makePoint(1, 1), 1, 2))).toBe(6);
});

test('containsTheOrigin test', () => {
  expect(containsTheOrigin(makeRectangle(makePoint(1, 1), 10, 20))).toBeFalsy();
  expect(containsTheOrigin(makeRectangle(makePoint(1, -1), 10, 20))).toBeFalsy();
  expect(containsTheOrigin(makeRectangle(makePoint(-1, -1), 10, 20))).toBeFalsy();
  expect(containsTheOrigin(makeRectangle(makePoint(-10, 1), 9, 20))).toBeFalsy();
  expect(containsTheOrigin(makeRectangle(makePoint(-10, 1), 10, 20))).toBeFalsy();
  expect(containsTheOrigin(makeRectangle(makePoint(-10, 10), 11, 10))).toBeFalsy();
  expect(containsTheOrigin(makeRectangle(makePoint(-10, 10), 11, 9))).toBeFalsy();

  expect(containsTheOrigin(makeRectangle(makePoint(-10, 10), 11, 11))).toBeTruthy();
});
