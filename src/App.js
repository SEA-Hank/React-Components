import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BtnPage } from "./pages/BtnPage";
import { CBPage } from "./pages/CBPage";
import { RadioPage } from "./pages/RadioPage";
import { SelectPage } from "./pages/SelectPage";
import { SwitchPage } from "./pages/SwitchPage";
import { RatePage } from "./pages/RatePage";
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
              <Link to="/radiopage">RADIO</Link>
            </li>
            <li>
              <Link to="/selectpage">SELECT</Link>
            </li>
            <li>
              <a href="">INPUT</a>
            </li>
            <li>
              <Link to="/switchpage">SWITCH</Link>
            </li>
            <li>
              <Link to="/ratepage">RATE</Link>
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
            <Route exact path="/selectpage">
              <SelectPage />
            </Route>
            <Route exact path="/switchpage">
              <SwitchPage />
            </Route>
            <Route exact path="/ratepage">
              <RatePage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
