export default class Stats {
  constructor(file, dir) {
    this.file = file;
    this.dir = dir;
  }

  isFile() {
    return this.file;
  }

  isDirectory() {
    return this.dir;
  }
}
