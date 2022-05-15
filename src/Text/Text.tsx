import React from 'react'
import { TextProps } from './Text.types'
//@ts-ignore
import scss from './Text.module.scss'
import { _getClassNames } from '../../util/getClassNames'

export const Text = ({ children, href, align, ...props }: TextProps) => {
  const getClassNames = () => {
    let _className = _getClassNames({
      parent: scss.text,
      scss,
      ...props
    })

    if (align) _className.push(scss['align' + align])

    return _className.join(' ')
  }

  return href ? (
    <a {...props} href={href} target="_blank" data-testid={'Text'} className={getClassNames()}>
      {children}
    </a>
  ) : (
    <div {...props} data-testid={'Text'} className={getClassNames()}>
      {children}
    </div>
  )
}
