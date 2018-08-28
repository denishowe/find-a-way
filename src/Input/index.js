import React from "react";

import { ucFirst } from "../Utils";

// An input with a type and a label

class Input extends React.Component
{
	constructor(props)
	{
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event)
	{
		const { name, value } = event.target;
		this.props.setter(name, value);

		return true;
	}

	render()
	{
		const { id, type, value } = this.props;

		return (
			<label className={ `${type}-input` }>
				{ ucFirst(id) }
				<input type={ type } id={ id } name={ id } value={ value }
					onChange={this.handleChange} />
			</label>
		);
	}
}

export default Input;
