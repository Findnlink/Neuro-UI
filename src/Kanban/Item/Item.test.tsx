import React from 'react'
import { render } from '@testing-library/react'

import Item from './Item'
import ItemProps from './Item.types'

describe('Item Component', () => {
  //@ts-ignore
  const renderComponent = () => render(<Item text={'foo'} />)

  it('', () => {})
})
