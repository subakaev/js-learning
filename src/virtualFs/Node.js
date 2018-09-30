import Stats from './Stats';

export default class Node {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getStats() {
    return new Stats(this.isFile(), this.isDirectory());
  }
}
