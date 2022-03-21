import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Docs from "./Docs/Docs";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Docs />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("react-root")
);
