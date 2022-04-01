import React from 'react'
import { CardProps } from './Card.types'
//@ts-ignore
import scss from './Card.module.scss'
import { _getClassNames } from '../../util/getClassNames'

export const Card = ({ children, loading, ...props }: CardProps) => {
  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.card,
      scss,
      loading,
      ...props
    })

    return className.join(' ')
  }

  return (
    <div data-testid={'Card'} className={getClassNames()} {...props}>
      {!loading && children}
    </div>
  )
}
