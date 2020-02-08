import React from 'react';
import { TextArea } from '@Components/common/inputs/text-area/style'

const InputTextArea = ({ rows=4, cols=50, onChange }) => {
  const textChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <TextArea rows={rows} cols={cols} onChange={e => textChange(e)} />
  );
}

export default InputTextArea;
