import Node from './Node';

function toString() {
  return `<${this.name}${this.attributesToString()}>${this.body}${this.children.map(x => x.toString()).join('')}</${this.name}>`;
}

function PairedTag(name, attributes, body, children) {
  Node.apply(this, [name, attributes]);
  this.body = body || '';
  this.children = children || [];
  this.toString = toString;
}

export default PairedTag;
