export default class Tree {
  constructor(key, meta, parent) {
    this.key = key;
    this.meta = meta;
    this.parent = parent;
    this.children = new Map();
  }

  getKey() {
    return this.key;
  }

  getMeta() {
    return this.meta;
  }

  addChild(key, meta) {
    const node = new Tree(key, meta, this);

    this.children.set(key, node);

    return node;
  }

  getChild(key) {
    return this.children.get(key);
  }

  hasChildren() {
    return this.children.size > 0;
  }

  hasChild(key) {
    return this.children.has(key);
  }

  getParent() {
    return this.parent;
  }

  removeChild(key) {
    if (this.hasChild(key)) {
      this.children.delete(key);

      return true;
    }

    return false;
  }

  getChildren() {
    return Array.from(this.children.values());
  }

  getDeepChild(keys) {
    if (keys.length === 0) {
      return null;
    }

    const [key, ...rest] = keys;

    if (!this.hasChild(key)) {
      return null;
    }

    const child = this.getChild(key);

    if (rest.length === 0) {
      return child;
    }

    return child.getDeepChild(rest);
  }
}
