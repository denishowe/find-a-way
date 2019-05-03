import { func, string } from 'prop-types';
import React, { Component } from 'react';
import { ucFirst } from '../../../utils';

// An input with a type and a label

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { setter } = this.props;
    setter(name, value);

    return true;
  }

  render() {
    const { id, type, value } = this.props;

    const labelText = ucFirst(id);
    const labelStyle = type === 'number' && { margin: '20px' };

    return (
      <label htmlFor={id} style={labelStyle}>
        { labelText }
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={this.handleChange}
          style={{ marginLeft: '10px' }}
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: string, setter: func, type: string, value: string,
};
