import {
  makePoint,
  getX,
  getY,
  toString,
  getQuadrant,
  getSymmetricalPoint,
  calculateDistance,
  makeSegment,
  startSegment, endSegment,
} from '../../src/points/points';

test('Should make point', () => {
  const point = makePoint(5, 4);

  expect(getX(point)).toEqual(5);
  expect(getY(point)).toEqual(4);
});

test('toString test', () => {
  const point = makePoint(5, 4);

  expect(toString(point)).toEqual('(5, 4)');
});

test('getQuadrant test', () => {
  expect(getQuadrant(makePoint(0, 0))).toBe(null);
  expect(getQuadrant(makePoint(1, 0))).toBe(null);
  expect(getQuadrant(makePoint(-1, 0))).toBe(null);
  expect(getQuadrant(makePoint(0, 1))).toBe(null);
  expect(getQuadrant(makePoint(0, -1))).toBe(null);
  expect(getQuadrant(makePoint(1, 1))).toBe(1);
  expect(getQuadrant(makePoint(-1, 1))).toBe(2);
  expect(getQuadrant(makePoint(-1, -1))).toBe(3);
  expect(getQuadrant(makePoint(1, -1))).toBe(4);
});

test('getSymmetricalPoint test', () => {
  expect(toString(getSymmetricalPoint(makePoint(0, 0)))).toBe('(0, 0)');
  expect(toString(getSymmetricalPoint(makePoint(1, 1)))).toBe('(-1, -1)');
  expect(toString(getSymmetricalPoint(makePoint(-1, 1)))).toBe('(1, -1)');
  expect(toString(getSymmetricalPoint(makePoint(1, -1)))).toBe('(-1, 1)');
  expect(toString(getSymmetricalPoint(makePoint(-1, -1)))).toBe('(1, 1)');
});

test('calculateDistance test', () => {
  expect(calculateDistance(makePoint(1, 1))).toEqual(Math.sqrt(2));
  expect(calculateDistance(makePoint(2, 0))).toEqual(2);
});

test('segment test', () => {
  const p1 = makePoint(1, 1);
  const p2 = makePoint(2, 2);
  const segment = makeSegment(p1, p2);

  expect(typeof segment).toBe('function');
  expect(segment('qwwerty')).toBeUndefined();
  expect(startSegment(segment)).toBe(p1);
  expect(endSegment(segment)).toBe(p2);
});
