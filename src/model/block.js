export default class Block {
  constructor(maze) {
    this.position = maze.randomPosition();
  }

  isEqual(b) {
    return this.position.x === b.position.x && this.position.y === b.position.y;
  }
}
