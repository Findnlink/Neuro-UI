import React, { useState } from 'react'
import { DropDown } from './DropDown'

export default {
  title: 'DropDown',
}

export const WithBar = () => {
  const [selected, setSelected] = useState(null)
  return (
    <DropDown
      selected={selected}
      setSelected={setSelected}
      items={[{ children: 'Item1' }, { children: 'Item2' }, { children: 'Item3' }]}
      placeholder="select"
    />
  )
}
