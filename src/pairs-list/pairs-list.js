import {
  cons as pairsCons, car, cdr, isPair,
} from '../pairs/pairs';

const isList = (list) => {
  if (list === null) {
    return true;
  }

  if (isPair(list)) {
    return isList(cdr(list));
  }

  return false;
};

const checkList = (list) => {
  if (!isList(list)) {
    throw new Error('Argument is not a list.');
  }
};

export const cons = (element, list) => pairsCons(element, list);

export const l = (...args) => args.reverse().reduce((acc, item) => cons(item, acc), null);

export const head = (list) => {
  checkList(list);
  return car(list);
};

export const tail = (list) => {
  checkList(list);
  return cdr(list);
};

export const isEmpty = list => list === null;

export const toString = (list) => {
  const iter = (current, acc) => {
    if (isEmpty(current)) {
      return acc;
    }

    return iter(tail(current), `${acc}${acc !== '' ? ', ' : ''}${head(current)}`);
  };

  return `(${iter(list, '')})`;
};
