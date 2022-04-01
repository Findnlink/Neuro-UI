import React from 'react'
import { LineProps } from './Line.types'
//@ts-ignore
import scss from './Line.module.scss'
import { _getClassNames } from '../../util/getClassNames'

export const Line = ({ ...props }: LineProps) => {
  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.line,
      scss,
      ...props
    })

    return className.join(' ')
  }

  return <hr data-testid={'Line'} className={getClassNames()} />
}
