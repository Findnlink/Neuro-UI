import React, { useEffect, useState } from "react";
import { ComponentWrapperProps } from "./ComponentWrapper.types";
import scss from "./ComponentWrapper.module.scss";
import { Button, ButtonGroup, Text, Code, Input } from "..";

// Note: Documentation ComponentWrapper will extend the child component with interactive props and code

export function ComponentWrapper({
  children,
  options,
  ...props
}: ComponentWrapperProps) {
  const [newProps, setNewProps] = useState(props);
  const [codeText, setCodeText] = useState("");
  const [newChildren, setNewChildren] = useState<any>();

  //console.log(newChildren);

  const addPropsToChildren = (children: any, props: any) => {
    const addPropsToChild = (child: any, props: any) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, props);
      } else {
        console.log("Invalid element: ", child);
        return child;
      }
    };
    if (Array.isArray(children)) {
      return children.map((child, ix) =>
        addPropsToChild(child, { key: ix, ...props })
      );
    } else {
      return addPropsToChild(children, props);
    }
  };

  // Add props to newChildren
  useEffect(() => {
    setNewChildren(
      addPropsToChildren(children, {
        ...newProps,
      })
    );
  }, [newProps]);

  // setCodeText with props e.g.: <Button disabled />
  useEffect(() => {
    if (newChildren) {
      let text = "";
      let propText = "";

      const arr = Object.entries(newChildren.props);

      // Map throug all props from child component
      arr.map((value: any, key: number) => {
        if (key > 1) {
          if (value[1] === "" || Boolean(value[1]) === false) return;
          if (value[0] === "children") return;

          if (value[1].toString() === "true") {
            propText += " " + value[0].toString();
          } else {
            propText += " " + value[0].toString() + '={"' + value[1] + '"}';
          }
        }

        return value;
      });

      if (newChildren.props.children) {
        text = `&lt;${newChildren.props.mdxType}${propText}&gt;${newChildren.props.children}&lt;/${newChildren.props.mdxType}&gt;`;
      } else {
        text = `&lt;${newChildren.props.mdxType}${propText}/&gt;`;
      }

      setCodeText(text);
    }
  }, [newChildren]);

  const showProps = () => {
    return options.map((option: any, key: number) => {
      switch (option.type) {
        case "bool":
          return (
            <div className={scss.wrapper}>
              <Text>{option.name}</Text>
              <Button
                key={key}
                onClick={() =>
                  setNewProps((prev: any) => ({
                    ...prev,
                    [option.name]: !prev[option.name],
                  }))
                }
              >
                {option.name}
              </Button>
            </div>
          );

        case "array":
          return (
            <ButtonGroup
              key={key}
              value={newChildren.props[option.name]}
              setValue={(value: any) => {
                setNewProps((prev) => ({
                  ...prev,
                  [option.name]: value,
                }));
              }}
              buttons={option.values}
            />
          );

        case "string":
          console.log(option.default, newChildren.props.children);
          return (
            <Input
              key={key}
              value={newChildren.props[option.name]}
              onChange={(e) =>
                setNewProps((prev) => ({
                  ...prev,
                  [option.name]: e.target.value,
                }))
              }
            />
          );

        default:
          break;
      }
    });
  };

  return newChildren ? (
    <div className={scss.componentWrapper}>
      <div className={scss.component}>{newChildren}</div>
      <div className={scss.props}>{showProps()}</div>
      <div className={scss.code}>
        {codeText && <Code>{codeText.toString()}</Code>}
      </div>
    </div>
  ) : (
    <div></div>
  );
}

//Children: e.g. <Button>Button</Button>
//Type: Boolean, Multi: values = [], Textarea, Input,
//values:
//return e.g. <Button disabled>Button</Button> if disabled is checked
//generate code: easy copy paste
