import React from 'react'
import { CheckboxProps } from './Checkbox.types'
//@ts-ignore
import scss from './Checkbox.module.scss'
import { _getClassNames } from '../../util/getClassNames'

export const Checkbox = ({ children, error, scale, weight, ...props }: CheckboxProps) => {
  const getClassNames = () => {
    let className = _getClassNames({ parent: scss.checkbox, scss, ...props })

    return className.join(' ')
  }

  return (
    <span className={getClassNames()}>
      <input id="checkbox" type="checkbox" {...props} data-testid={'Checkbox'}></input>
      <label htmlFor="checkbox">{children}</label>
    </span>
  )
}
