import React from 'react'
import { ThemeChangerProps } from './ThemeChanger.types'
//@ts-ignore
import scss from './ThemeChanger.module.scss'
import { _getClassNames } from '../../util/getClassNames'
import { Icon } from '../'
import { useStore } from '../store'

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
    localStorage.setItem('theme', theme)
    setTheme(theme)
  }

  return (
    <div
      data-testid={'ThemeChanger'}
      onClick={() => {
        theme === 'dark' ? changeTheme('light') : changeTheme('dark')
      }}
      className={getClassNames()}
    >
      {theme === 'dark' ? <Icon icon={'moon'} /> : <Icon icon={'sun'} />}
    </div>
  )
}
