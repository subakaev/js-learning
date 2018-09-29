import path from 'path';
import Tree from '../trees';

const getPathParts = filePath => filePath.split(path.sep).filter(x => x.length > 0);

export default class {
  constructor() {
    this.tree = new Tree('/', { type: 'dir' });
  }

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }

  mkdirSync(filePath) {
    const { dir, base } = path.parse(filePath);

    const node = this.findNode(dir);

    if (!node) {
      return false;
    }

    return node.addChild(base, { type: 'dir' });
  }

  touchSync(filePath) {
    const { dir, base } = path.parse(filePath);

    const node = this.findNode(dir);

    if (!node) {
      return false;
    }

    return node.addChild(base, { type: 'file' });
  }

  isDirectory(filePath) {
    const node = this.findNode(filePath);

    return node ? node.getMeta().type === 'dir' : false;
  }

  isFile(filePath) {
    const node = this.findNode(filePath);

    return node ? node.getMeta().type === 'file' : false;
  }
}
