module.exports = (componentName) => ({
  content: `import React from "react";
import { render } from "@testing-library/react";

import { ${componentName} } from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";

describe("${componentName} Component", () => {
  const renderComponent = () => render(<${componentName} foo={"foo"} />);

  it("", () => {
    
  });
});
`,
  extension: `.test.tsx`
})
