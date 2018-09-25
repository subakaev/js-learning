export default class SingleTag {
  constructor(name, attributes) {
    this.name = name;
    this.attributes = attributes || {};
  }

  toString() {
    const attrsStr = Object.keys(this.attributes).map(x => ` ${x}="${this.attributes[x]}"`).join('');

    return `<${this.name}${attrsStr}>`;
  }
}
