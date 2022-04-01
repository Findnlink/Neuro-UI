module.exports = (componentName) => ({
  content: `import { ${componentName}, ComponentWrapper } from '../'

# ${componentName}

<ComponentWrapper
  options={[
    { type: 'bool', name: 'primary', default: false },
    { type: 'bool', name: 'disabled', default: false },
    { type: 'bool', name: 'loading', default: false },
    {
      type: 'array',
      name: 'scale',
      default: 'm',
      values: ['s', 'm', 'l', 'xl']
    },
    {
      type: 'array',
      name: 'weight',
      default: 'medium',
      values: ['light', 'medium', 'bold']
    },
    {
      type: 'array',
      name: 'padding',
      default: 'm',
      values: ['0', 's', 'm', 'l', 'xl']
    },
    {
      type: 'array',
      name: 'margin',
      default: 'm',
      values: ['0', 's', 'm', 'l', 'xl']
    }
  ]}
>
  <${componentName} />
</ComponentWrapper>`,
  extension: `.mdx`
})
