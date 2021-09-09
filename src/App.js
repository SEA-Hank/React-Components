import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BtnPage } from "./pages/BtnPage";
import { CBPage } from "./pages/CBPage";
import { RadioPage } from "./pages/RadioPage";
import { SelectPage } from "./pages/SelectPage";
import { SwitchPage } from "./pages/SwitchPage";
import { RatePage } from "./pages/RatePage";
import { SliderPage } from "./pages/SliderPage";
import { InputPage } from "./pages/InputPage";
import "./App.scss";

function App() {
  let components = [
    {
      path: "/",
      name: "BUTTON",
      page: BtnPage,
    },
    {
      path: "/cbpage",
      name: "CHECKBOX",
      page: CBPage,
    },
    {
      path: "/radiopage",
      name: "RADIO",
      page: RadioPage,
    },
    {
      path: "/selectpage",
      name: "SELECT",
      page: SelectPage,
    },
    {
      path: "/inputpage",
      name: "INPUT",
      page: InputPage,
    },
    {
      path: "/switchpage",
      name: "SWITCH",
      page: SwitchPage,
    },
    {
      path: "/ratepage",
      name: "RATE",
      page: RatePage,
    },
    {
      path: "/sliderpage",
      name: "SLIDER",
      page: SliderPage,
    },
  ];
  return (
    <Router>
      <div className="header">
        <p>React Components</p>
        <p>check the code in github</p>
      </div>
      <div className="App">
        <div className="menu">
          <ul>
            {components.map((info) => (
              <li key={info.name}>
                <Link to={info.path}>{info.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="ui-component">
          <Switch>
            {components.map((info) => (
              <Route key={info.name} exact path={info.path}>
                <info.page />
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
