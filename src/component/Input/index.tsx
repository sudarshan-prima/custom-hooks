import React, { PropsWithChildren } from 'react'

type InputProps = {
    placeholder?: string,
    type?: string,
    name?: string,
    isRequired?: boolean,
    value?: string | number
}

export const Input: React.FC<PropsWithChildren<InputProps>> = ({placeholder, type='text', name, isRequired, value, ...reset}) => {
  return (
    <div>
        <input type={type} placeholder={placeholder} name={name} value={value} required={isRequired}  {...reset} />
    </div>
  )
}
