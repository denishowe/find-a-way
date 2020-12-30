import { func, number } from 'prop-types';
import React from 'react';
import Input from './Input';

// Display controls for grid size and number of blocks

const Controls = ({
  width, height, blocks, setter,
}) => (
  <div style={{ height: '30px' }}>
    <Input type="number" id="width" value={width} setter={setter} />
    <Input type="number" id="height" value={height} setter={setter} />
    <Input type="number" id="blocks" value={blocks} setter={setter} />
  </div>
);

Controls.propTypes = {
  blocks: number.isRequired,
  height: number.isRequired,
  setter: func.isRequired,
  width: number.isRequired,
};

export default Controls;
