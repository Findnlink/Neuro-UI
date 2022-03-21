module.exports = (componentName) => ({
  content: `export { ${componentName} } from './${componentName}'`,
  extension: `.ts`,
});
