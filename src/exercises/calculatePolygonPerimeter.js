import { getX, getY } from '../points/points';
import { isEmpty, head, tail } from '../pairs-list/pairs-list';

const getLength = (p1, p2) => {
  const [x1, y1, x2, y2] = [getX(p1), getY(p1), getX(p2), getY(p2)];

  return Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2));
};

export default (points) => {
  if (isEmpty(points)) {
    return null;
  }

  const first = head(points);

  const iter = (list, result, counter, previous) => {
    if (isEmpty(list)) {
      return counter > 2 ? result + getLength(previous, first) : null;
    }

    const current = head(list);

    return iter(tail(list), result + getLength(previous, current), counter + 1, current);
  };

  return iter(tail(points), 0, 1, first);
};
