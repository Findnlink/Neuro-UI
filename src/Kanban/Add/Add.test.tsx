import React from 'react'
import { render } from '@testing-library/react'
import { shallow } from 'enzyme'
import Add from './Add'
import { AddProps } from './Add.types'

describe('Add Component', () => {
  const onClickSpy = jest.fn()
  const renderComponent = ({ text, onClick }: Partial<AddProps>) =>
    render(<Add onClick={() => {}} text="Add new" />)

  it('should render "Add new" text correctly', () => {
    const text = 'Add new'
    const { getByTestId } = renderComponent({ text })
    const add = getByTestId('add')
    expect(add).toHaveTextContent(text)
  })

  it('should handle onClick event correctly', () => {
    const add = shallow(<Add onClick={onClickSpy} text="Add new" />)
    add.find('span').at(0).simulate('click')
    expect(onClickSpy.mock.calls.length).toEqual(1)
  })
})
