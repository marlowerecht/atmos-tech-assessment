import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';

import { FieldDefaultProps, FieldProps } from '../../types'
import { number } from 'yup'

function PercentageField({ name, initialValue, onChange }: FieldProps) {
  const [value, setValue] = useState(initialValue)

  function validatePercent(percentage: number) {
    let error;
    if (percentage > 100 || percentage < 0) {
      error = 'Percentages must be between 0% and 100%';
    }
    return error;
  }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const currentValue = e.target.value
//     const arr = (currentValue).split('')
//     const filteredarr = arr.filter(num => num !== '%')
//     const tostringagain = filteredarr.toString()
//     setValue(currentValue)
//     setTimeout(() => {
//         setValue(`${tostringagain}%`)
//     }, 1000)
//     onChange(e)
//   }

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    setValue(`${e.target.value}%`)
    onChange(e)
  }

//   type SomeFunction = () => void;
  type Timer = ReturnType<typeof setTimeout>;
  const [ timer, setTimer ] = useState<Timer>();

  // debounce function
    // fn will only run if the delay time is reached
  const debounce = (fn: any, delay: number) => {
    return () => {
      clearTimeout(timer);
      setTimer(setTimeout(() => fn(), delay));
    }
  };

  // debouncing save function so it only runs after one second without timer being reset
  const debounceHandleChange = debounce(handleChange, 500)

  return (
    <Formik 
    initialValues={{
        value: ''
      }}
      onSubmit={values => {
        console.log(values);
      }}>
        <Form>
            <Field
                type="number"
                name={name}
                className="block w-full rounded-lg border-2 border-gray-300 py-2 px-3 focus:outline-none"
                value={value}
                onChange={debounceHandleChange}
                validate={validatePercent}
            />
        </Form>
    </Formik>
  )
}

PercentageField.defaultProps = FieldDefaultProps

export default PercentageField