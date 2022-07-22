import React, { useCallback, useEffect, useState } from 'react'
//@ts-ignore
import scss from './Button.module.scss'
import { ButtonProps } from './Button.types'
import { _getClassNames } from '../../util/getClassNames'
import { styled, setup } from 'goober'
import { useStore } from '../store'

//import { styled } from '@stitches/react'

//const ButtonStyled = styled('button', generateCSS())

//const ButtonStyled = styled('button', generateCSS())

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
  primary,
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

  const [theme, setTheme] = useStore((s) => [s.theme, s.setTheme])

  //const [themeToggle, setThemeToggle] = useState(true)

  const generateCSS = () => {
    const map = new Map()

    if (window.getComputedStyle(document.documentElement).getPropertyValue('--button-background')) {
      map.set('background', 'var(--button-background)')
    }

    if (window.getComputedStyle(document.documentElement).getPropertyValue('--button-color')) {
      map.set('color', 'var(--button-color)')
    }

    console.log(Object.fromEntries(map))

    return Object.fromEntries(map)
  }

  const ButtonStyled = styled('button')(generateCSS())

  return (
    <ButtonStyled
      data-testid={'button'}
      onClick={(e: any) => {
        if (disabled || loading) return
        if (onClick) onClick(e)
        if (href) window.open(href, '_blank')

        //addCssVar(themeToggle)
      }}
      //themeToggle={themeToggle}
      //onClick={() => addCssVar()}
      className={scss.button}
      // Warning: Received `true` for a non-boolean attribute `primary` with {...props}
      style={style}
      data-theme={theme}
      // {...htmlProps}
    >
      {children}
    </ButtonStyled>
  )
}
