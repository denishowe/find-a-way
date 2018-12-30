import React from "react";

/* A maze consist of a grid of points, some of which contain blocks. */

export default class Maze extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
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
        const { width, height, blocks } = this.props;

        const canvas = this.canvasRef.current;
        const context = canvas.getContext('2d');
        console.log('h', window.innerHeight);
        canvas.width = window.innerWidth - 22;
        canvas.height = window.innerHeight - 52;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        const xStart = 0, yStart = 0;
        context.moveTo(xStart, yStart);
        const blue = 20, size = 100;
        context.strokeStyle = `rgb(100, 200, ${blue * blocks})`;
        const xEnd = width * size, yEnd = height * size;
        context.lineTo(xEnd, yEnd);
        context.stroke();
    }
}
