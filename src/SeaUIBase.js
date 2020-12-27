import React from "react";
import "./css-reset.css";
export const SeaUIType = {
  BUTTON: "BUTTON",
};

export class SeaUIBase extends React.Component {
  constructor(props, uitype, value) {
    super(props);
    this.uitype = uitype;
    this.uiID = new Date().getTime();
    this.value = value || "";
  }
}
