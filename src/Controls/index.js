import Input from "./Input";
import React from "react";

// Display controls for grid size and number of blocks

class Controls extends React.Component
{
	render()
	{
		const { width, height, blocks, setter } = this.props;

		return (
			<div>
				<Input type="number" id="width"  value={ width  } setter={ setter } />
				<Input type="number" id="height" value={ height } setter={ setter } />
				<Input type="number" id="blocks" value={ blocks } setter={ setter } />
			</div>
		);
	}
}

export default Controls;
