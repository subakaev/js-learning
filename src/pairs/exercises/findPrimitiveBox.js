import { car, cdr, isPair } from '../pairs';

const findPrimitiveBox = (pair) => {
  if (!isPair(pair)) {
    return undefined;
  }

  const left = car(pair);

  if (isPair(left)) {
    return findPrimitiveBox(left);
  }

  const right = cdr(pair);

  if (isPair(right)) {
    return findPrimitiveBox(right);
  }

  return pair;
};

export default findPrimitiveBox;
