import React from "react";
import "./css-reset.css";

export { SeaUIType, SeaUIColor, SeaUISize } from "./types";
export class SeaUIBase extends React.Component {
  constructor(props, uitype) {
    super(props);
    this.uitype = uitype;
    this.uiID = new Date().getTime();
  }

  getValue() {
    return this.state.value;
  }

  getClassNames = function (...args) {
    let classes = [];
    args.forEach((arg) => {
      if (!arg) return;
      let argType = typeof arg;
      if (argType === "string") {
        classes.push(arg);
      } else if (Array.isArray(arg)) {
        arg.forEach((item) => {
          classes.push(this.getClassNames(item));
        });
      } else if (argType === "object") {
        for (let key in arg) {
          if (arg[key]) {
            classes.push(key);
          }
        }
      }
    });
    return classes.join(" ");
  };

  static objctToArray(obj) {
    let res = [];
    for (let key in obj) {
      res.push(obj[key]);
    }
    return res;
  }
}
