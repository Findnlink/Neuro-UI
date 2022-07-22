import React from 'react'
import { ThemeChangerProps } from './ThemeChanger.types'
//@ts-ignore
import scss from './ThemeChanger.module.scss'
import { _getClassNames } from '../../util/getClassNames'
import { Button, Icon } from '../'
import { useStore } from '../store'
import { setup } from 'goober'

setup(React.createElement)

export const ThemeChanger = ({ ...props }: ThemeChangerProps) => {
  const [theme, setTheme] = useStore((s) => [s.theme, s.setTheme])

  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.themeChanger,
      scss,
      ...props
    })

    return className.join(' ')
  }

  const changeTheme = (theme: string) => {
    addCssVar(theme === 'dark')
    localStorage.setItem('theme', theme)
    setTheme(theme)
  }

  const addCssVar = (add: boolean) => {
    let root = document.documentElement

    if (add) {
      root.style.setProperty('--button-background', 'red')
      root.style.setProperty('--button-color', 'blue')
    } else {
      root.style.removeProperty('--button-background')
    }

    //ButtonStyled = styled('button')(generateCSS())

    //setThemeToggle((prev) => !prev)
  }

  return (
    <div
      data-testid={'ThemeChanger'}
      onClick={() => {
        theme === 'dark' ? changeTheme('light') : changeTheme('dark')
      }}
      className={getClassNames()}
      //data-theme={}
    >
      {/* {theme === 'dark' ? <Icon icon={'moon'} /> : <Icon icon={'sun'} />} */}
      <Button>Button {theme}</Button>
    </div>
  )
}
