module.exports = (componentName) => ({
  content: `@use '../../util/util.scss';
  
  .${componentName[0].toLowerCase() + componentName.slice(1)} {
  background-color: var(--primary);
}
`,
  extension: `.module.scss`
})
