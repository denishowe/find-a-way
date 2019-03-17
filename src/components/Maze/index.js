import React, { Component, createRef } from "react";

/* A maze consist of a grid of points, some of which contain blocks. */

export default class Maze extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = createRef();
  }

  render() {
    return (
      <canvas ref={ this.canvasRef } style={{ border: "solid" }} >
        No canvas
      </canvas>
    );
  }

  componentDidMount() { this.draw() }

  componentDidUpdate() { this.draw() }

  draw() {
    const { width, height, blocks } = this.props.maze;

    console.log('blocks', blocks);

    const canvas = this.canvasRef.current;
    const context = canvas.getContext('2d');
    const horizontalMargin = 22;
    canvas.width = window.innerWidth - horizontalMargin;
    const verticalMargin = 52;
    canvas.height = window.innerHeight - verticalMargin;
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Fit block array to canvas
    const blockSize = Math.min(canvas.width / width, canvas.height / height);
    console.log('size', blockSize);

    context.beginPath();
    const xStart = 0, yStart = 0;
    context.moveTo(xStart, yStart);
    context.strokeStyle = `rgb(100, 200, 20)`;
    const size = 100;
    const xEnd = width * size, yEnd = height * size;
    context.lineTo(xEnd, yEnd);
    context.stroke();
  }
}
