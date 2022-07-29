import React from 'react'
import TextField from '@mui/material/TextField';

const InputTextArea = ({ label, rows, required=true, defaultValue }) => {
  return (
    <TextField
      required={required}
      id="outlined-multiline-static"
      label={label}
      multiline
      fullWidth
      rows={rows}
      defaultValue={defaultValue}
    />
  )
}

export default InputTextArea