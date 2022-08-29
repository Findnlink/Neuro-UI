import React from 'react'
import { ScrollableProps } from './Scrollable.types'
//@ts-ignore
import scss from './Scrollable.module.scss'
import { _getClassNames } from '../../util/getClassNames'

export const Scrollable = ({ ...props }: ScrollableProps) => {
  // const getClassNames = () => {
  //   let className = _getClassNames({
  //     parent: scss.scrollable,
  //     scss,
  //     ...props
  //   })

  //   return className.join(' ')
  // }

  return (
    <div className={scss.scrollable}>
      {/* {children} */}
      <div className={scss.children}>
        <span>Item1Item1Item1Item1</span>
        <span>Item1Item1Item1Item1</span>
        <span>IteItem1Item1Item1Item1m1</span>
        <span>IteItem1Item1Item1Item1m1</span>
        <span>IteItem1Item1Item1Item1m1</span>
        <span>IteItem1Item1Item1Item1m1</span>
        <span>ItItem1Item1Item1Item1em1</span>
        <span>ItItem1Item1Item1Item1em1</span>
        <span>ItItem1Item1Item1Item1em1</span>
        <span>IteItem1Item1Item1Item1m1</span>
        <span>ItItem1Item1Item1Item1em1</span>
      </div>
    </div>
  )
}
