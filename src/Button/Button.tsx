import React from "react";
//@ts-ignore
import scss from "./Button.module.scss";
import { ButtonProps } from "./Button.types";
import { _getClassNames } from "../../util/getClassNames";

/** This is a special button */
export const Button = ({
  children,
  primary,
  href,
  onClick,
  disabled,
  ...props
}: ButtonProps) => {
  //const defaultProps = { children: 'Button', size: 'XL', ...props } as ButtonProps

  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.button,
      scss,
      disabled,
      ...props,
    });
    if (primary) {
      className.push(scss.primary);
    }

    return className.join(" ");
  };

  return (
    <button
      data-testid={"button"}
      onClick={(e: any) => {
        if (disabled) return;
        if (onClick) onClick(e);
        if (href) window.open(href, "_blank");
      }}
      className={getClassNames()}
      {...props}
    >
      {children}
    </button>
  );
};
