import Node from './Node';

export default class PairedTag extends Node {
  constructor(name, attributes, body, children) {
    super(name, attributes);
    this.body = body || '';
    this.children = children || [];
  }

  toString() {
    const content = this.children.length > 0
      ? this.children.map(x => x.toString()).join('')
      : this.body;

    return `<${this.getName()}${this.attributesToString()}>${content}</${this.getName()}>`;
  }
}
