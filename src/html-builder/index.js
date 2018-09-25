import _ from 'lodash';

import SingleTag from './SingleTag';
import PairedTag from './PairedTag';

const singleTagsList = new Set(['hr', 'img', 'br']);

const typeActions = [
  {
    type: 'body',
    isMatch: _.isString,
    process: _.identity,
  },
  {
    type: 'children',
    isMatch: _.isArray,
    process: (value, fn) => value.map(fn),
  },
  {
    type: 'attributes',
    isMatch: _.isObject,
    process: _.identity,
  },
];

const getTypeAction = value => typeActions.find(({ isMatch }) => isMatch(value));

const buildNode = (name, ...args) => {
  const C = singleTagsList.has(name) ? SingleTag : PairedTag;

  return new C(name, ...args);
};

const parse = (data) => {
  const [tagName, ...rest] = data;

  const emptyTag = {
    name: tagName,
    attributes: {},
    body: '',
    children: [],
  };

  const {
    name, attributes, body, children,
  } = rest.reduce((acc, item) => {
    const { type, process } = getTypeAction(item);

    return { ...acc, [type]: process(item, parse) };
  }, emptyTag);

  return buildNode(name, attributes, body, children);
};

export default parse;
