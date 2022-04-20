module.exports = (componentName) => ({
  content: `import React from "react";
import { ${componentName}Props } from "./${componentName}.types";
//@ts-ignore
import scss from "./${componentName}.module.scss";
import { _getClassNames } from '../../util/getClassNames'

export const ${componentName} = ({ ...props }: ${componentName}Props) => {

  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.${componentName[0].toLowerCase() + componentName.slice(1)},
      scss,
      ...props
    })

    return className.join(' ')
  }

  return (
    <div data-testid={'${componentName}'} className={getClassNames()}>
      ${componentName}
    </div>
  )
}
`,
  extension: `.tsx`
})
