import React from 'react'
import { NavigationProps } from './Navigation.types'
//@ts-ignore
import scss from './Navigation.module.scss'
import { _getClassNames } from '../../util/getClassNames'
import { Text, ThemeChanger, Collapse, Line, Image } from '../'
import { useNavigate, Routes, Route } from 'react-router-dom'

export const Navigation = ({ logo, children, ...props }: NavigationProps) => {
  let navigate = useNavigate()

  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.navigation,
      scss,
      ...props
    })

    return className.join(' ')
  }

  return (
    <nav data-testid={'Navigation'} className={getClassNames()}>
      {/* <div className={scss.logo}>
        
      </div> */}
      <div className={scss.dropdown}>
        <Collapse
          padding="0 xl"
          items={['Introduction', 'Quick start', 'Contribute', 'Documentation']}
        >
          Getting Started
        </Collapse>
        <Line margin="s" />
        <Collapse
          padding="0 xl"
          items={[
            'Button',
            'Button Group',
            'Card',
            'Checkbox',
            'Code',
            'Collapse',
            'Component Wrapper',
            'Context Menu',
            'Error Message',
            'Grid',
            'Dropdown',
            'Icon',
            'Input',
            'Kanban',
            'Line',
            'Modal',
            'Spacer',
            'Tag',
            'Text',
            'Text Area',
            'Theme Changer',
            'Toast',
            'Toggle',
            'Store Provider',
            'Tabs',
            'Layout',
            'Footer',
            'Image Gallery'
          ]}
        >
          Components
        </Collapse>
        <Line margin="s" />
        <Collapse padding="0 xl" onClick={() => navigate('/icons')}>
          Icons
        </Collapse>
        <Line margin="s" />
        <Collapse padding="0 xl" onClick={() => navigate('/demo')}>
          Demo
        </Collapse>
        <Line margin="s" />
        <Collapse padding="0 xl" onClick={() => navigate('/templates')}>
          Templates
        </Collapse>
      </div>
      <div className={scss.footer}>
        <Text scale="s" padding="xl">
          © {new Date().getFullYear()} Findnlink ·{' '}
          <Text href="https://www.twitter.com">jaemil</Text>
        </Text>
      </div>
    </nav>
  )
}
