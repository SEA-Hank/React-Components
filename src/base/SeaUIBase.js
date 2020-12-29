import React from "react";
import "./css-reset.css";
/**
 * SeaUI Type
 */
export const SeaUIType = {
  BUTTON: "BUTTON",
  RADIO: "RADIO",
  CIRCLEDOT: "CIRCLEDOT",
};
/**
 * SeaUI Color
 */
export const SeaUIColor = {
  bule: "seaui-color-bule",
  green: "seaui-color-green",
  grey: "seaui-color-grey",
  red: "seaui-color-red",
  orange: "seaui-color-orange",
};

export class SeaUIBase extends React.Component {
  constructor(props, uitype, value) {
    super(props);
    this.uitype = uitype;
    this.uiID = new Date().getTime();
    this.value = value || "";
  }

  getValue() {
    return this.value;
  }
}
