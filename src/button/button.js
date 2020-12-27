import "./button.css";
import "../fontawesome/css/all.min.css";
import { SeaUIBase, SeaUIType } from "../SeaUIBase";

export const SeaUIBtnColor = {
  bule: "seaui-btnColor-bule",
  green: "seaui-btnColor-green",
  grey: "seaui-btnColor-grey",
  red: "seaui-btnColor-red",
  orange: "seaui-btnColor-orange",
};

export const SeaUIBtnStyle = {
  iconBtn: "iconBtn",
  textBtn: "textBtn",
  leftIconBtn: "leftIconBtn",
  rightIconBtn: "leftIconBtn",
};

export class SeaButton extends SeaUIBase {
  constructor(props) {
    super(props, SeaUIType.BUTTON);
  }

  getClassName() {
    let classes = "";
    let btnType = this.props.SeaUIBtnStyle || SeaUIBtnStyle.textBtn;
    if (btnType == SeaUIBtnStyle.iconBtn) {
      classes = "seauiIconBtn";
    } else {
      classes = `seauiBtn ${this.props.color || "seaui-btnColor-bule"}`;
    }
    if (this.props.customClass) {
      classes += " " + customClass;
    }
    return classes;
  }

  render() {
    return (
      <button className={getClassName()} onClick={this.props.onclick}>
        {this.props.text}
      </button>
    );
  }
}
