import React from 'react'

import { FieldDefaultProps, FieldProps } from '../../types'
import ChoiceField from './ChoiceField'

function BooleanField({ name, initialValue, onChange }: FieldProps) {
  const convertStringToBoolean = (value: string) => value === 'Yes'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const modifiedEvent = {
      target: { name: e.target.name, value: convertStringToBoolean(e.target.value) },
    }

    return onChange(modifiedEvent as unknown as React.ChangeEvent<HTMLInputElement>)
  }

  return (
    <ChoiceField name={name} initialValue={initialValue} onChange={handleChange} choices={['Yes', 'No']} />
  )
}

BooleanField.defaultProps = FieldDefaultProps

export default BooleanField
