const component = require("./component");
const componentTypes = require("./component.types");
const componentMdx = require("./component.mdx");
const componentTests = require("./component.test");
const componentStyles = require("./component.scss");
const componentIndex = require("./index.ts");

module.exports = [
  component,
  componentTypes,
  componentMdx,
  componentTests,
  componentStyles,
  componentIndex,
];
