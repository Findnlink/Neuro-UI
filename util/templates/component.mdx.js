module.exports = (componentName) => ({
  content: `import { ${componentName}, ComponentProps } from "../";
  
# ${componentName}

<${componentName} />`,
  extension: `.mdx`,
});
