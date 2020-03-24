import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Root from "Root";
import App from "Components/App";

const jsx = (
  <Root>
    <BrowserRouter>
      <Route path="/" component={App}/>
    </BrowserRouter>
  </Root>
);

ReactDOM.render(jsx, document.querySelector("#root"));
