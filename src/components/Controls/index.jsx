import React from 'react';
import Input from './Input';

// Display controls for grid size and number of blocks

const Controls = ({ width, height, blocks, setter }) => (
  <div style={{ height: '30px' }}>
     <Input type="number" id="width" value={ width } setter={ setter } />
     <Input type="number" id="height" value={ height } setter={ setter } />
     <Input type="number" id="blocks" value={ blocks } setter={ setter } />
  </div>
);

export default Controls;
