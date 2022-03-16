import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";

import UserProvider from "./components/context";


ReactDOM.render(
  <UserProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </UserProvider>,

  document.getElementById("root")
);
