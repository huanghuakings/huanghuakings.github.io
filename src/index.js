import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ShowPage } from "./containers";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/home" component={() => <ShowPage />}></Route>
      <ShowPage />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
