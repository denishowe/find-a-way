import React, { Component } from 'react';
import { render } from 'react-dom';
import Controls from './Controls';
import Maze from './Maze';
import MazeModel from '../model/maze';

/*
 * Generate maze with N random blocks and random start and end points
 * Draw paths tried until find path through all empty cells
 */

class App extends Component {
  constructor() {
    super();
    this.state = { width: 6, height: 6, blocks: 6 };
    this.state.maze = this.newMaze();
    this.setter = this.setter.bind(this);
  }

  componentDidUpdate() {
    this.updateMaze();
  }

  setter(name, value) {
    this.setState({ [name]: value });
  }

  newMaze() {
    const { width, height, blocks } = this.state;

    return new MazeModel(width, height, blocks);
  }

  // (Re-)create the maze model if the controls have changed

  updateMaze() {
    const { width, height, blocks, maze } = this.state;
    if (maze.width !== width || maze.height !== height || maze.blocks.length !== blocks) {
      this.setState({ maze: this.newMaze() });
    }
  }

  render() {
    const { width, height, blocks, maze } = this.state;

    return (
      <div>
        <Controls width={width} height={height} blocks={blocks} setter={this.setter} />
        <Maze maze={maze} />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);

export default App;
