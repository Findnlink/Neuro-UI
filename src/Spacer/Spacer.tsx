import React from 'react'
import { SpacerProps } from './Spacer.types'
//@ts-ignore
import scss from './Spacer.module.scss'
import { _getClassNames } from '../../util/getClassNames'

export const Spacer = ({ ...props }: SpacerProps) => {
  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.spacer,
      scss,
      ...props
    })

    return className.join(' ')
  }

  return <div data-testid={'Spacer'} className={getClassNames()}></div>
}
