import { cons, car, cdr } from '../pairs/pairs';

import {
  makePoint, getX, getY, toString,
} from './points';

export const makeSegment = (point1, point2) => cons(point1, point2);

export const startSegment = segment => car(segment);
export const endSegment = segment => cdr(segment);

export const segmentToString = segment => `[${toString(startSegment(segment))}, ${toString(endSegment(segment))}]`;

export const midpointSegment = (segment) => {
  const p1 = startSegment(segment);
  const p2 = endSegment(segment);

  const [x1, y1, x2, y2] = [getX(p1), getY(p1), getX(p2), getY(p2)];

  return makePoint((x1 + x2) / 2, (y1 + y2) / 2);
};
