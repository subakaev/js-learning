import { cons, car, cdr } from './pairs/pairs';

import {
  l, isEmpty, cons as consList, head, tail, reverse,
} from './pairs-list/pairs-list';

import { reverseStr, wc } from './algorithms';

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

export const reduce2 = (func, acc, dom) => {
  if (isEmpty(dom)) {
    return acc;
  }

  return reduce2(func, func(head(dom), acc), tail(dom));
};

export const emptyTagsCount = (tagName, dom) => {
  const reduceFunc = (element, acc) => (is(tagName, element) && value(element) === '' ? acc + 1 : acc);

  return reduce(reduceFunc, 0, dom);
};

export const quotes = dom => map(element => value(element), filter(element => is('blockquote', element), dom));

export const mirror = dom => map(element => node(name(element), reverseStr(value(element))), dom);

export const extractHeaders = html => map(tag => node('p', value(tag)), filter(tag => is('h2', tag), html));

export const wordsCount = (tagName, word, html) => {
  const reduceFunc = (tag, acc) => acc + wc(word, value(tag));
  return reduce(reduceFunc, 0, filter(tag => is(tagName, tag), html));
};

// const select = (tagName, html) => reduce((element, acc) => {
//   const acc2 = hasChildren(element) ? concat(select(tagName, children(element)), acc) : acc;
//   return is(tagName, element) ? consList(element, acc2) : acc2;
// }, l(), html);

// export const select2 = (tagName, html) => {
//   const flatten = (list) => {
//     const reduceFunc = (item, acc) => {
//       const newAcc = consList(item, acc);

//       return hasChildren(item) ? concat(flatten(children(item)), newAcc) : newAcc;
//     };

//     return reduce(reduceFunc, l(), list);
//   }

//   return filter(item => is(tagName, item), flatten(html));
// };
