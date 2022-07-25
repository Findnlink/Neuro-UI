import React, { useCallback, useEffect, useState } from 'react'
//@ts-ignore
import scss from './Button.module.scss'
import { ButtonProps } from './Button.types'
import { _getClassNames } from '../../util/getClassNames'
import { styled } from 'goober'
import { useStore } from '../store'
import { generateCSS } from '../../util/generateCSS'

export const Button = ({
  children,
  href,
  onClick,
  disabled,
  loading,
  htmlProps,
  style,
  variables,
  primary,
  ...props
}: ButtonProps) => {
  // const getClassNames = () => {
  //   let className = _getClassNames({
  //     parent: scss.button,
  //     scss,
  //     disabled,
  //     loading,
  //     ...props
  //   })

  //   return className.join(' ')
  // }

  const [theme] = useStore((s) => [s.theme, s.setTheme])

  const ButtonStyled = styled('button')(
    generateCSS('button', ['background', 'color', 'font-weight'], ['primary'], ['hover', 'focus'])
  )

  return (
    <ButtonStyled
      data-testid={'button'}
      onClick={(e: any) => {
        if (disabled || loading) return
        if (onClick) onClick(e)
        if (href) window.open(href, '_blank')
      }}
      //onClick={() => addCssVar()}
      className={primary ? 'primary' : ''}
      style={style}
      data-theme={theme}
      // {...htmlProps}
    >
      {children}
    </ButtonStyled>
  )
}
