import {
  l, isEmpty, head, tail,
} from '../src/pairs-list/pairs-list';

import {
  make, append, node, name, value, toString as htmlToString,
} from '../src/html-tags';

test('make test', () => {
  expect(isEmpty(make())).toBeTruthy();
  expect(make()).toBe(l());
});

test('node test', () => {
  const tag = node('h1', 'header');
  expect(name(tag)).toEqual('h1');
  expect(value(tag)).toEqual('header');
});

test('append test 1', () => {
  const dom = append(append(make(), node('h1', 'header')), node('p', 'paragraph'));

  expect(name(head(dom))).toEqual('p');
  expect(value(head(dom))).toEqual('paragraph');

  expect(name(head(tail(dom)))).toEqual('h1');
  expect(value(head(tail(dom)))).toEqual('header');
});

test('append test 2', () => {
  const dom = append(make(), node('h1', 'header'));

  expect(name(head(dom))).toEqual('h1');
  expect(value(head(dom))).toEqual('header');
});

test('toString test 1', () => {
  const html = '<h1>header</h1>';

  expect(htmlToString(append(make(), node('h1', 'header')))).toEqual(html);
});

test('toString test 2', () => {
  const html = '<h1>header</h1><p>paragraph</p>';

  expect(htmlToString(append(append(make(), node('h1', 'header')), node('p', 'paragraph')))).toEqual(html);
});
