export default class Node {
  constructor(name, attributes) {
    this.name = name;
    this.attributes = attributes || {};
  }

  getName() {
    return this.name;
  }

  attributesToString() {
    return Object.keys(this.attributes).map(x => ` ${x}="${this.attributes[x]}"`).join('');
  }
}
