import { cons, car, cdr } from './pairs/pairs';

import {
  l, isEmpty, cons as consList, head, tail, reverse,
} from './pairs-list/pairs-list';

import { reverseStr } from './algorithms';

export const make = () => l();

export const node = (tagName, content) => cons(tagName, content);

export const name = tag => car(tag);
export const value = tag => cdr(tag);

export const is = (tagName, tag) => name(tag) === tagName;

export const append = (dom, tag) => consList(tag, dom);

export const toString = (dom) => {
  const iter = (current, result) => {
    if (isEmpty(current)) {
      return result;
    }

    const tag = head(current);
    const tagName = name(tag);

    return iter(tail(current), `<${tagName}>${value(tag)}</${tagName}>${result}`);
  };

  return iter(dom, '');
};

export const map = (func, dom) => {
  const iter = (current, result) => {
    if (isEmpty(current)) {
      return reverse(result);
    }

    return iter(tail(current), cons(func(head(current)), result));
  };

  return iter(dom, l());
};

export const filter = (func, dom) => {
  const iter = (elements, result) => {
    if (isEmpty(elements)) {
      return reverse(result);
    }

    const headTag = head(elements);

    return iter(tail(elements), func(headTag) ? cons(headTag, result) : result);
  };

  return iter(dom, l());
};

export const reduce = (func, acc, dom) => {
  const iter = (elements, result) => {
    if (isEmpty(elements)) {
      return result;
    }

    return iter(tail(elements), func(head(elements), result));
  };

  return iter(dom, acc);
};

export const emptyTagsCount = (tagName, dom) => {
  const reduceFunc = (element, acc) => (is(tagName, element) && value(element) === '' ? acc + 1 : acc);

  return reduce(reduceFunc, 0, dom);
};

export const quotes = dom => map(element => value(element), filter(element => is('blockquote', element), dom));

export const mirror = dom => map(element => node(name(element), reverseStr(value(element))), dom);
