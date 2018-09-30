/* eslint-disable class-methods-use-this */

import Node from './Node';

export default class Dir extends Node {
  isFile() {
    return false;
  }

  isDirectory() {
    return true;
  }
}
