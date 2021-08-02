import React, { useRef, useState } from "react";
import "./App.scss";
import {
  Button,
  SeaUIColor,
  SeaUISize,
  Radio,
  CheckBox,
  Select,
  Input,
  Switch,
  Rate,
  Slider,
  Tooltip,
} from "./_util";

function App() {
  return (
    <div className="App">
      <div className="menu">
        <ul>
          <li>
            <a href="">BUTTON</a>
          </li>
          <li>
            <a href="">CHECKBOX</a>
          </li>
          <li>
            <a href="">INPUT</a>
          </li>
          <li>
            <a href="">RADIO</a>
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
        <ul>
          <li>
            <div className="component-wrapper">
              <div className="default-btn-wrapper">
                <Button text="Button"></Button>
                <Button text="Button" color={SeaUIColor.red}></Button>
                <Button text="Button" color={SeaUIColor.yellow}></Button>
                <Button text="Button" color={SeaUIColor.green}></Button>
                <Button text="Button" color={SeaUIColor.orange}></Button>
                <Button text="Button" color={SeaUIColor.grey}></Button>
              </div>
              <div className="btn-size-wrapper">
                <Button text="Small" size={SeaUISize.Small}></Button>
                <Button
                  text="Medium"
                  size={SeaUISize.Medium}
                  color={SeaUIColor.red}
                ></Button>
                <Button
                  text="Large"
                  size={SeaUISize.Large}
                  color={SeaUIColor.yellow}
                ></Button>
              </div>
              <div className="icon-btn-wrapper">
                <Button type={Button.BtnType.iconBtn} icon="fa-bell"></Button>
                <Button
                  type={Button.BtnType.iconBtn}
                  size={SeaUISize.Medium}
                  color={SeaUIColor.red}
                  icon="fa-bold"
                ></Button>
                <Button
                  type={Button.BtnType.iconBtn}
                  color={SeaUIColor.green}
                  size={SeaUISize.Large}
                  icon="fa-bug"
                ></Button>
              </div>
              <div className="icon-text-btn-wrapper">
                <Button
                  type={Button.BtnType.leftIconBtn}
                  icon="fa-search"
                  text="Button"
                ></Button>
                <Button
                  type={Button.BtnType.rightIconBtn}
                  icon="fa-search"
                  text="Button"
                ></Button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
