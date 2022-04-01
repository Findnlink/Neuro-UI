import React from 'react'
// import { render, screen } from '@testing-library/react'
// import { shallow } from 'enzyme'
// import { ButtonProps } from './Button.types'
// import { Button } from './Button'

// describe('Button Component', () => {
//   const onClickSpy = jest.fn()
//   const renderComponent = ({ children, primary, disabled }: Partial<ButtonProps>) =>
//     render(
//       <Button primary={primary} disabled={disabled} onClick={onClickSpy}>
//         {children}
//       </Button>,
//     )
//   it('should render Default text correctly', () => {
//     const children = 'Default'
//     const { getByTestId } = renderComponent({ children })
//     const button = getByTestId('button')
//     expect(button.innerHTML).toEqual(children)
//   })
//   it('should handle onClick event correctly', () => {
//     const button = shallow(<Button onClick={onClickSpy}>Default</Button>)
//     button.find('button').at(0).simulate('click')
//     expect(onClickSpy.mock.calls.length).toEqual(1)
//   })
// })
