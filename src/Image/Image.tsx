import React from 'react'
import { ImageProps } from './Image.types'
//@ts-ignore
import scss from './Image.module.scss'
import { _getClassNames } from '../../util/getClassNames'

export const Image = ({ src, width, height, ...props }: ImageProps) => {
  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.image,
      scss,
      ...props
    })

    return className.join(' ')
  }

  return <img loading="lazy" src={src} data-testid={'Image'} className={getClassNames()} />
}
