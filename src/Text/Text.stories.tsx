import React from 'react'
import { Text } from './Text'

export default {
  title: 'Text',
}

export const _Text = () => <Text>This is a text</Text>
export const Bold = () => (
  <Text weight="bold" style={{ color: 'blue' }}>
    This is a bold blue text
  </Text>
)
export const Large = () => <Text scale="xl">This is a large text</Text>
