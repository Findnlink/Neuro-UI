import React from 'react'
import { TextAreaProps } from './TextArea.types'
//@ts-ignore
import scss from './TextArea.module.scss'

export const TextArea = ({ value }: TextAreaProps) => {
  return (
    <textarea data-testid={'TextArea'} className={scss.textarea}>
      {value}
    </textarea>
  )
}
