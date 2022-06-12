import React from 'react'
//@ts-ignore
import scss from './Button.module.scss'
import { ButtonProps } from './Button.types'
import { _getClassNames } from '../../util/getClassNames'

/** This is a special button */
export const Button = ({
  children,
  href,
  onClick,
  disabled,
  loading,
  htmlProps,
  style,
  variables,
  ...props
}: ButtonProps) => {
  //const defaultProps = { children: 'Button', size: 'XL', ...props } as ButtonProps

  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.button,
      scss,
      disabled,
      loading,
      ...props
    })

    return className.join(' ')
  }

  return (
    <button
      data-testid={'button'}
      onClick={(e: any) => {
        if (disabled || loading) return
        if (onClick) onClick(e)
        if (href) window.open(href, '_blank')
      }}
      className={getClassNames()}
      // Warning: Received `true` for a non-boolean attribute `primary` with {...props}
      style={style}
      {...htmlProps}
    >
      {children}
    </button>
  )
}
