module.exports = (componentName) => ({
  content: `.${componentName} {
  background-color: var(--primary);
}
`,
  extension: `.module.scss`,
});
