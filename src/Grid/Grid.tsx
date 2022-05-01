import React from 'react'
import { GridProps } from './Grid.types'
//@ts-ignore
import scss from './Grid.module.scss'
import { _getClassNames } from '../../util/getClassNames'

export const Grid = ({ children, layout, center, ...props }: GridProps) => {
  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.grid,
      scss,
      ...props
    })

    if (center) className.push(scss.center)

    return className.join(' ')
  }

  return (
    <div {...props} data-testid={'Grid'} className={getClassNames()} data-layout={layout}>
      {children}
    </div>
  )
}
