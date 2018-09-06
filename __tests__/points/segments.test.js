import { makePoint, toString } from '../../src/points/points';

import {
  makeSegment, startSegment, endSegment, segmentToString, midpointSegment,
} from '../../src/points/segments';

test('segment test', () => {
  const p1 = makePoint(1, 1);
  const p2 = makePoint(2, 2);
  const segment = makeSegment(p1, p2);

  expect(segment('qwwerty')).toBeUndefined();
  expect(startSegment(segment)).toBe(p1);
  expect(endSegment(segment)).toBe(p2);
});

test('segmentToString test', () => {
  expect(segmentToString(makeSegment(makePoint(1, 2), makePoint(3, 4)))).toEqual('[(1, 2), (3, 4)]');
  expect(segmentToString(makeSegment(makePoint(-1, 2), makePoint(3, -4)))).toEqual('[(-1, 2), (3, -4)]');
});

test('midpointSegment test', () => {
  expect(toString(midpointSegment(makeSegment(makePoint(1, 1), makePoint(2, 2))))).toEqual('(1.5, 1.5)');
  expect(toString(midpointSegment(makeSegment(makePoint(1, 1), makePoint(-1, -2))))).toEqual('(0, -0.5)');
});
