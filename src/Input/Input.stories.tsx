import React, { useState } from 'react'
import { Input } from './Input'
import { Meta, Story } from '@storybook/react'
import { InputProps } from './Input.types'
import { Icon } from '../Icon/Icon'

const meta: Meta = {
  title: 'Input',
  component: Input,
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export default meta

const Template: Story<InputProps> = (args) => {
  const [data, setData] = useState('')
  function handleChange(event: any) {
    const { value } = event.target
    setData(() => value)
  }
  return <Input {...args} value={data} onChange={handleChange} placeholder="Default" />
}

Template.parameters = {
  jest: ['Button.test.tsx'],
}

export const Default = Template.bind({})

export const Error = () => {
  const [data, setData] = useState('')
  function handleChange(event) {
    const { value } = event.target
    setData(() => value)
  }
  return (
    <Input
      value={data}
      error
      errorMessage={'Something went wrong :('}
      scale="s"
      type={'password'}
      placeholder="Password"
    />
  )
}

export const S = () => {
  const [data, setData] = useState('')
  function handleChange(event) {
    const { value } = event.target
    setData(() => value)
  }
  return <Input value={data} scale="s" type={'password'} placeholder="Password" />
}

export const M = () => {
  const [data, setData] = useState('')
  function handleChange(event) {
    const { value } = event.target
    setData(() => value)
  }
  return <Input value={data} scale="m" type={'password'} placeholder="Password" />
}

export const L = () => {
  const [data, setData] = useState('')
  function handleChange(event) {
    const { value } = event.target
    setData(() => value)
  }
  return <Input value={data} weight="bold" scale="l" type={'password'} placeholder="Password" />
}

export const Password = () => {
  const [data, setData] = useState('')
  function handleChange(event) {
    const { value } = event.target
    setData(() => value)
  }
  return <Input value={data} scale="xl" type={'password'} placeholder="Password" />
}

export const Limit = () => {
  const [data, setData] = useState('')
  function handleChange(event) {
    const { value } = event.target
    setData(() => value)
  }
  return <Input placeholder="Limit" limit value={data} onChange={handleChange} maxLength={10} />
}

export const WithIcon = () => {
  const [data, setData] = useState('')
  function handleChange(event) {
    const { value } = event.target
    setData(() => value)
  }
  return <Input value={data} icon={<Icon icon="cross" />} scale="m" placeholder="Password" />
}
