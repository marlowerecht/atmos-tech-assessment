import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';
import { PatternFormat } from 'react-number-format';
import { FieldDefaultProps, FieldProps } from '../../types'
import { number } from 'yup'

function PercentageField({ name, initialValue, onChange }: FieldProps) {
  const [value, setValue] = useState(initialValue)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange(e)
  }
  
  return (
    <PatternFormat
    
      type="text"
      name={name}
      className="block w-full rounded-lg border-2 border-gray-300 py-2 px-3 focus:outline-none"
      value={value}
    format={"### %"}
      onChange={handleChange}
    
    />
  )
}

PercentageField.defaultProps = FieldDefaultProps

export default PercentageField