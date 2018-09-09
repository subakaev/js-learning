import {
  cons as pairsCons, car, cdr, isPair,
} from '../pairs/pairs';

export const isEmpty = list => list === null;

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

  if (isEmpty(list)) {
    throw new Error('List is empty.');
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

export const toString = (list) => {
  const iter = (current, acc) => {
    if (isEmpty(current)) {
      return acc;
    }

    return iter(tail(current), `${acc}${acc !== '' ? ', ' : ''}${head(current)}`);
  };

  return `(${iter(list, '')})`;
};

export const has = (list, element) => {
  const iter = (current) => {
    if (isEmpty(current)) {
      return false;
    }

    if (head(current) === element) {
      return true;
    }

    return iter(tail(current));
  };

  return iter(list);
};

export const reverse = (list) => {
  const iter = (current, result) => {
    if (isEmpty(current)) {
      return result;
    }

    return iter(tail(current), cons(head(current), result));
  };

  return iter(list, l());
};

export const concat = (list1, list2) => {
  const iter = (current, result) => {
    if (isEmpty(current)) {
      return result;
    }

    return iter(tail(current), cons(head(current), result));
  };

  return iter(reverse(list1), list2);
};
