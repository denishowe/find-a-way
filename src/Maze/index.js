import React from "react";

export default class Maze extends React.Component {
	constructor(props) {
		super(props)
		this.canvasRef = React.createRef()
	}

	render() { return <canvas ref={ this.canvasRef }>No canvas</canvas> }

	componentDidMount() {
		const canvas = this.canvasRef.current
		const c = canvas.getContext('2d')
		c.beginPath()
		c.moveTo(100, 100)
		c.strokeStyle = "rgb(100, 200, 255)"
		c.lineTo(300, 200)
		c.stroke()
	}
}
