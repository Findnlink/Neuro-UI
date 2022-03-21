import React from "react";
import { ButtonGroupProps } from "./ButtonGroup.types";
//@ts-ignore
import scss from "./ButtonGroup.module.scss";
import { Button } from "../Button/Button";

export const ButtonGroup = ({
  value,
  setValue,
  buttons,
  scale,
}: ButtonGroupProps) => {
  return (
    <div className={scss.buttonGroup}>
      {buttons.map((button, index) => (
        <Button
          key={index}
          scale={scale}
          onClick={() => setValue(button)}
          primary={value === button}
        >
          {button}
        </Button>
      ))}
    </div>
  );
};
