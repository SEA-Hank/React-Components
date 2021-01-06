import React from "react";
import "./css-reset.css";

export class SeaUIBase extends React.Component {
  #value;
  constructor(props, uitype, value) {
    super(props);
    this.uitype = uitype;
    this.uiID = new Date().getTime();
    this.#value = value || null;
  }

  getValue() {
    return this.#value;
  }
  setValue(value) {
    this.#value = value;
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
