import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BtnPage } from "./pages/BtnPage";
import { CBPage } from "./pages/CBPage";
import { RadioPage } from "./pages/RadioPage";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="menu">
          <ul>
            <li>
              <Link to="/">BUTTON</Link>
            </li>
            <li>
              <Link to="/cbpage">CHECKBOX</Link>
            </li>
            <li>
              <a href="/radiopage">RADIO</a>
            </li>
            <li>
              <a href="">INPUT</a>
            </li>
            <li>
              <a href="">SELECT</a>
            </li>
            <li>
              <a href="">SWITCH</a>
            </li>
            <li>
              <a href="">TOOLTIP</a>
            </li>
          </ul>
        </div>
        <div className="ui-component">
          <Switch>
            <Route exact path="/">
              <BtnPage />
            </Route>
            <Route exact path="/cbpage">
              <CBPage />
            </Route>
            <Route exact path="/radiopage">
              <RadioPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
