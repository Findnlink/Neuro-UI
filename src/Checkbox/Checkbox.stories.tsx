import React, { useState } from 'react'
import { Checkbox } from './Checkbox'

export default {
  title: 'Checkbox',
}

export const CheckBox = () => {
  const [check, setCheck] = useState(false)

  return (
    <Checkbox
      checked={check}
      onChange={() => {
        setCheck((prev) => !prev)
      }}
    >
      Checkbox
    </Checkbox>
  )
}
export const Disabled = () => (
  <Checkbox disabled checked={false}>
    Checkbox
  </Checkbox>
)
