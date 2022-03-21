import React from "react";
import { render } from "@testing-library/react";

import { componentWrapper } from "./componentWrapper";
import { componentWrapperProps } from "./componentWrapper.types";

describe("ComponentProps Component", () => {
  const renderComponent = () => render(<componentWrapper foo={"foo"} />);

  it("", () => {});
});
