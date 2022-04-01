module.exports = (componentName) => ({
  content: `@use '../../util/util.scss';
  
  .${componentName} {
  background-color: var(--primary);
}
`,
  extension: `.module.scss`
})
