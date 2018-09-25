import _ from 'lodash';

const singleTagsList = new Set(['hr', 'img', 'br']);

const typeActions = [
  {
    name: 'body',
    isMatch: _.isString,
    process: _.identity,
  },
  {
    name: 'children',
    isMatch: _.isArray,
    process: (value, fn) => value.map(fn),
  },
  {
    name: 'attributes',
    isMatch: _.isObject,
    process: _.identity,
  },
];

const getTypeAction = value => typeActions.find(({ isMatch }) => isMatch(value));

export const parse = (data) => {
  const [tagName, ...rest] = data;

  const emptyTag = {
    name: tagName,
    attributes: {},
    body: '',
    children: [],
  };

  return rest.reduce((acc, item) => {
    const { name, process } = getTypeAction(item);

    return { ...acc, [name]: process(item, parse) };
  }, emptyTag);
};

export const render = (tag) => {
  const {
    name, attributes, body, children,
  } = tag;

  const attrsLine = Object.keys(attributes).map(key => ` ${key}="${attributes[key]}"`).join('');

  if (singleTagsList.has(name)) {
    return `<${name}${attrsLine}>`;
  }

  const content = children.length > 0 ? children.map(item => render(item)).join('') : body;

  return `<${name}${attrsLine}>${content}</${name}>`;
};
