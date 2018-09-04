import { cons, car, cdr } from '../pairs/pairs';

export const makePoint = (x, y) => cons(x, y);

export const getX = point => car(point);
export const getY = point => cdr(point);

export const toString = point => `(${getX(point)}, ${getY(point)})`;

export const getQuadrant = (point) => {
  const [x, y] = [getX(point), getY(point)];

  if (x > 0 && y > 0) {
    return 1;
  }

  if (x < 0 && y > 0) {
    return 2;
  }

  if (x < 0 && y < 0) {
    return 3;
  }

  if (x > 0 && y < 0) {
    return 4;
  }

  return null;
};

export const getSymmetricalPoint = point => makePoint(-getX(point), -getY(point));

export const calculateDistance = (point) => {
  const [x, y] = [getX(point), getY(point)];

  return Math.sqrt((x ** 2) + (y ** 2));
};

export const makeSegment = (point1, point2) => cons(point1, point2);

export const startSegment = segment => car(segment);
export const endSegment = segment => cdr(segment);
