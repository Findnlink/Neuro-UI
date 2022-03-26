module.exports = (componentName) => ({
  content: `import React from "react";
import { ${componentName}Props } from "./${componentName}.types";
import scss from "./${componentName}.module.scss";
import { _getClassNames } from '../../util/getClassNames'

export const ${componentName} = ({ foo }: ${componentName}Props) => {

  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.${componentName},
      scss,
      ...props
    })

    return className.join(' ')
  }

  return (
    <div data-testid={'${componentName}'} className={getClassNames()}>
      {foo}
    </div>
  )
}
`,
  extension: `.tsx`
})
