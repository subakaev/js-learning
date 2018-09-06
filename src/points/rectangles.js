import { cons, car, cdr } from '../pairs/pairs';

import { getX, getY, getQuadrant } from './points';

export const makeRectangle = (location, width, height) => cons(location, cons(width, height));

export const getStartPoint = rect => car(rect);

export const getWidth = rect => car(cdr(rect));
export const getHeight = rect => cdr(cdr(rect));

export const square = rect => getWidth(rect) * getHeight(rect);
export const perimeter = rect => 2 * (getWidth(rect) + getHeight(rect));

export const containsTheOrigin = (rect) => {
  const location = getStartPoint(rect);

  const locationQuadrant = getQuadrant(location);

  if (locationQuadrant !== 2) {
    return false;
  }

  const [x, y, w, h] = [getX(location), getY(location), getWidth(rect), getHeight(rect)];

  return w + x > 0 && h - y > 0;
};
