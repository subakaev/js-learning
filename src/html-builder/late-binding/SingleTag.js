import Node from './Node';

function toString() {
  return `<${this.name}${this.attributesToString()}>`;
}

function SingleTag(name, attributes) {
  Node.apply(this, [name, attributes]);
  this.toString = toString;
}

export default SingleTag;
