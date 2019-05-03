import Block from './block';
import { random } from '../utils';

export default class MazeModel {
  constructor(width, height, blockCount) {
    this.width = width;
    this.height = height;
    this.blocks = [];
    this.addBlocks(blockCount);
  }

  newBlock() {
    let block;
    do {
      block = new Block(this);
    } while (this.blocks.find(block.isEqual));

    return block;
  }

  addBlocks(num) {
    while (this.blocks.length < num) {
      let blk = null;
      do {
        blk = new Block(this);
      } while (this.blocks.find(blk.isEqual));
      this.blocks.push(blk);
    }
  }

  randomPosition() {
    return { x: random(0, this.width - 1), y: random(0, this.height - 1) };
  }
}
