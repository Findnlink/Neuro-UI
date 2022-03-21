import React from "react";
import { Spacer } from "./Spacer";

export default {
    title: "Spacer"
};

export const WithBar = () => <Spacer foo="bar" />;

export const WithBaz = () => <Spacer foo="baz" />;
