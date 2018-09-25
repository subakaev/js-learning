export default class PairedTag {
  constructor(name, attributes, body, children) {
    this.name = name;
    this.attributes = attributes || {};
    this.body = body || '';
    this.children = children || [];
  }

  toString() {
    const attrsStr = Object.keys(this.attributes).map(x => ` ${x}="${this.attributes[x]}"`).join('');

    return `<${this.name}${attrsStr}>${this.body}${this.children.map(x => x.toString()).join('')}</${this.name}>`;
  }
}
