import React from "react";
import { GridProps } from "./Grid.types";
//@ts-ignore
import scss from "./Grid.module.scss";
import { _getClassNames } from '../../util/getClassNames'

export const Grid = ({ ...props }: GridProps) => {

  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.grid,
      scss,
      ...props
    })

    return className.join(' ')
  }

  return (
    <div data-testid={'Grid'} className={getClassNames()}>
      Grid
    </div>
  )
}
