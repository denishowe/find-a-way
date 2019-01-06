import React from "react";
import styled from "styled-components";
import { ucFirst } from "../../Utils";

// An input with a type and a label

const StyledInput = styled.input`
    margin-left: 10px
`;

const StyledLabel = styled.label`
    ${({ isNumber }) => isNumber && `margin: 20px`}
`;

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
            <StyledLabel isNumber={ type === "number" }>
                { ucFirst(id) }
                <StyledInput type={ type } id={ id } name={ id } value={ value }
                    onChange={this.handleChange} />
            </StyledLabel>
        );
    }
}

export default Input;
