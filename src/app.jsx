import Controls from "./Controls";
import Maze from "./Maze";
import React from "react";
import ReactDOM from "react-dom";

/*
 * Generate maze with N random blocks and random start and end points
 * Draw paths tried until find path through all empty cells
 */

class App extends React.Component
{
	constructor()
	{
		super();
		this.state = { width: 6, height: 6, blocks: 6 };
	}

	setter(name, value)
	{
		const update = {};
		update[name] = value;
		this.setState(update);
	}

	render()
	{
		const { width, height, blocks } = this.state;
		const setter = this.setter.bind(this);

		return (
			<div>
				<Controls width = { width } height = { height }
					blocks = { blocks } setter = { setter } />
				<Maze width={ width } height={ height } blocks={ blocks } />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
