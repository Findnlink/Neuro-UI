import React from 'react'
import { AddProps } from './Add.types'
//@ts-ignore
import styles from './Add.module.scss'
import { Icon } from '../../Icon/Icon'

const Add = ({ text, onClick, isColumn }: AddProps) => {
  return (
    <span
      data-testid={'add'}
      className={isColumn ? styles.add + ' ' + styles.column : styles.add}
      onClick={onClick}
    >
      <Icon icon="add" color="var(--text200)" /> {text}
    </span>
  )
}

export default Add
