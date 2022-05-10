import React from 'react'
import { LayoutProps } from './Layout.types'
//@ts-ignore
import scss from './Layout.module.scss'
import { _getClassNames } from '../../util/getClassNames'

export const Layout = ({ children, type, ...props }: LayoutProps) => {
  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.layout,
      scss,
      ...props
    })

    return className.join(' ')
  }

  return (
    <div data-testid={'Layout'} className={getClassNames()} data-type={type}>
      {children}
    </div>
  )
}
