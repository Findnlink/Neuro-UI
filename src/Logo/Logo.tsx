import React from "react";
import { LogoProps } from "./Logo.types";
//@ts-ignore
import scss from "./Logo.module.scss";
import { _getClassNames } from '../../util/getClassNames'

export const Logo = ({ ...props }: LogoProps) => {

  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.logo,
      scss,
      ...props
    })

    return className.join(' ')
  }

  return (
    <div data-testid={'Logo'} className={getClassNames()}>
      Logo
    </div>
  )
}
