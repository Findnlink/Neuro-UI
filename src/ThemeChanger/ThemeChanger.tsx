import React, { useEffect } from 'react'
import { ThemeChangerProps } from './ThemeChanger.types'
//@ts-ignore
import scss from './ThemeChanger.module.scss'
import { _getClassNames } from '../../util/getClassNames'
import { Button, Icon } from '../'
import { useStore } from '../store'
import { setup } from 'goober'
import { mkdirSync } from 'fs'

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

  useEffect(() => {
    changeTheme(theme)
  }, [])

  const changeTheme = (theme: string) => {
    setCssVar(theme)
    localStorage.setItem('theme', theme)
    setTheme(theme)
  }

  const setCssVar = (theme: string) => {
    let root = document.documentElement

    removeTheme(root.style)

    switch (theme) {
      case 'neuro dark':
        root.style.setProperty('--button-background', 'black')
        root.style.setProperty('--button-color', 'white')
        root.style.setProperty('--button-background--primary', 'blue')
        break
      case 'neuro light':
        root.style.setProperty('--button-background', 'white')
        root.style.setProperty('--button-color', 'black')
        root.style.setProperty('--button-background--primary', 'blue')
        break

      default:
        break
    }
  }

  const removeTheme = (style: any) => {
    //TODO: remove all properties
    style.removeProperty('--button-background')
    style.removeProperty('--button-color-background')
  }

  return (
    <div
      data-testid={'ThemeChanger'}
      className={getClassNames()}
      //data-theme={}
    >
      {/* {theme === 'dark' ? <Icon icon={'moon'} /> : <Icon icon={'sun'} />} */}
      <Button
        onClick={() => {
          changeTheme('neuro dark')
        }}
      >
        Neuro Dark
      </Button>
      <Button
        onClick={() => {
          changeTheme('neuro light')
        }}
      >
        Neuro Light
      </Button>
    </div>
  )
}
