import { cons, car, cdr } from './pairs/pairs';

import {
  l, isEmpty, cons as consList, head, tail,
} from './pairs-list/pairs-list';

export const make = () => l();

export const node = (tagName, content) => cons(tagName, content);

export const name = tag => car(tag);
export const value = tag => cdr(tag);

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
