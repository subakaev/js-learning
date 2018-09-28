function attributesToString() {
  return Object.keys(this.attributes).map(x => ` ${x}="${this.attributes[x]}"`).join('');
}

function Node(name, attributes) {
  this.name = name;
  this.attributes = attributes || {};
  this.attributesToString = attributesToString;
}

export default Node;
