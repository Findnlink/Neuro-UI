module.exports = (componentName) => ({
  content: `import React from "react";
import { ${componentName}Props } from "./${componentName}.types";
import scss from "./${componentName}.module.scss";

export const ${componentName} = ({ foo }: ${componentName}Props) => {
  return (
    <div data-testid={'${componentName}'} className={scss.${componentName}}>
      {foo}
    </div>
  )
}
`,
  extension: `.tsx`,
});
