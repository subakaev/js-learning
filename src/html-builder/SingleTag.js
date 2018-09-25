import Node from './Node';

export default class SingleTag extends Node {
  toString() {
    return `<${this.getName()}${this.attributesToString()}>`;
  }
}
