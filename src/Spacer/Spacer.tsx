import React from 'react'
import { SpacerProps } from './Spacer.types'
//@ts-ignore
import scss from './Spacer.module.scss'

export const Spacer = ({}: SpacerProps) => {
  return <div data-testid={'Spacer'} className={scss.spacer}></div>
}
