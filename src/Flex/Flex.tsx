import React from 'react'
import { FlexProps } from './Flex.types'
//@ts-ignore
import scss from './Flex.module.scss'
import { _getClassNames } from '../../util/getClassNames'

export const Flex = ({ children, ...props }: FlexProps) => {
  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.flex,
      scss,
      ...props
    })

    return className.join(' ')
  }

  return (
    <div
      data-testid={'Flex'}
      className={getClassNames()}
      style={{
        display: props.container ? 'block' : 'flex',
        justifyContent: props.justifyContent || 'flex-start',
        flexDirection: props.flexDirection || 'column',
        flexGrow: props.flexGrow || 0,
        flexBasis: props.flexBasis || 'auto',
        flexShrink: props.flexShrink || 1,
        flexWrap: props.flexWrap || 'nowrap',
        flex: props.flex || '0 1 auto',
        alignItems: props.alignItems || 'stretch'
      }}
      {...props}
    >
      {children}
    </div>
  )
}
