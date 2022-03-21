import React from 'react'
import { TagProps } from './Tag.types'
//@ts-ignore
import scss from './Tag.module.scss'
import { _getClassNames } from '../../util/getClassNames'

export const Tag = ({ children, scale, weight }: TagProps) => {
  const getClassNames = () => {
    let className = _getClassNames(scss.tag, scss, scale, weight, undefined)

    return className.join(' ')
  }

  return (
    <div data-testid={'Tag'} className={getClassNames()}>
      {children}
    </div>
  )
}
