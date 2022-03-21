import React from "react";
import { CardProps } from "./Card.types";
import scss from "./Card.module.scss";

export const Card = ({ children, ...props }: CardProps) => {
  return (
    <div data-testid={"Card"} className={scss.card} {...props}>
      {children}
    </div>
  );
};
