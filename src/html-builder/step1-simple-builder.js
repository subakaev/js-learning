const typeActions = [
  {
    name: 'body',
    isMatch: value => typeof value === 'string',
  },
  {
    name: 'children',
    isMatch: value => value instanceof Array,
  },
  {
    name: 'attributes',
    isMatch: value => value instanceof Object,
  },
];

const getTypeAction = value => typeActions.find(({ isMatch }) => isMatch(value));

const attrsToString = attrs => Object.keys(attrs).map(key => ` ${key}="${attrs[key]}"`).join('');

const buildHtml = (data) => {
  const [tagName, ...rest] = data;

  const emptyTag = {
    name: tagName,
    attributes: {},
    body: '',
    children: [],
  };

  const tag = rest.reduce((acc, item) => {
    const { name } = getTypeAction(item);

    return { ...acc, [name]: item };
  }, emptyTag);

  return `<${tag.name}${attrsToString(tag.attributes)}>${tag.body}${tag.children.map(item => buildHtml(item)).join('')}</${tag.name}>`;
};

export default buildHtml;
