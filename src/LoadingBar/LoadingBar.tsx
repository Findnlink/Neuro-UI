import React from "react";
import { LoadingBarProps } from "./LoadingBar.types";
//@ts-ignore
import scss from "./LoadingBar.module.scss";
import { _getClassNames } from '../../util/getClassNames'

export const LoadingBar = ({ ...props }: LoadingBarProps) => {

  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.loadingBar,
      scss,
      ...props
    })

    return className.join(' ')
  }

  return (
    <div data-testid={'LoadingBar'} className={getClassNames()}>
      LoadingBar
    </div>
  )
}
