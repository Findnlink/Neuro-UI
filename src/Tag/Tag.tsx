import React from 'react'
import { TagProps } from './Tag.types'
//@ts-ignore
import scss from './Tag.module.scss'
import { _getClassNames } from '../../util/getClassNames'

export const Tag = ({ children, ...props }: TagProps) => {
  const getClassNames = () => {
    let className = _getClassNames({ parent: scss.tag, scss, ...props })

    return className.join(' ')
  }

  return (
    <div data-testid={'Tag'} className={getClassNames()}>
      {children}
    </div>
  )
}
