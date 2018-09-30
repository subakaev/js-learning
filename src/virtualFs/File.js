/* eslint-disable class-methods-use-this */

import Node from './Node';

export default class File extends Node {
  isFile() {
    return true;
  }

  isDirectory() {
    return false;
  }
}
