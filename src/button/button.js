import "./button.scss";
import "../fontawesome/css/all.min.css";
import { SeaUIBase, SeaUIType, SeaUIColor } from "../base/SeaUIBase";

/**
 * button types
 */
export const SeaUIBtnType = {
  iconBtn: "iconBtn",
  textBtn: "textBtn",
  leftIconBtn: "leftIconBtn",
  rightIconBtn: "rightIconBtn",
};
/**
 *props:
 *type : values in the SeaUIBtnType
 *text : button text
 *color : values in the SeaUIBtnColor
 *onclick : button onclick event callback
 *customClass : custom class
 *icon : icon from fontawesome
 */
export class SeaButton extends SeaUIBase {
  constructor(props) {
    super(props, SeaUIType.BUTTON);
    this.state = {
      type: this.props.type || SeaUIBtnType.textBtn,
      text: this.props.text || "",
      color: this.props.color || SeaUIColor.bule,
      onclick: this.props.onclick || null,
      customClass: this.props.customClass || "",
      icon: this.props.icon || "",
    };
    /**
     * icon Position onLeft or onRight
     */
    this.iconPosition = {
      left: "left",
      right: "right",
    };
    /**
     * Style depend on icon position
     */
    this.iconPositionSylte = {
      iconOnLeft: "seauiBtnIconOnLeft",
      iconOnRight: "seauiBtnIconOnRight",
    };
    /**
     * Text Button or Icon only button
     */
    this.btnTypeStyle = {
      seauiIconBtn: "seauiIconBtn",
      seauiTextBtn: "seauiTextBtn",
    };
  }

  getClassName() {
    let classes = ["seauiBtn", this.state.color];
    if (this.state.type === SeaUIBtnType.iconBtn) {
      classes.push(this.btnTypeStyle.seauiIconBtn);
    } else {
      classes.push(this.btnTypeStyle.seauiTextBtn);
    }
    if (this.state.type === SeaUIBtnType.leftIconBtn) {
      classes.push(this.iconPositionSylte.iconOnLeft);
    }
    if (this.state.type === SeaUIBtnType.rightIconBtn) {
      classes.push(this.iconPositionSylte.iconOnRight);
    }
    classes.push(this.state.customClass);
    return classes.join(" ");
  }

  showIcon(iconPosition) {
    if (
      (iconPosition === this.iconPosition.left &&
        this.state.type === SeaUIBtnType.iconBtn) ||
      (iconPosition === this.iconPosition.left &&
        this.state.type === SeaUIBtnType.leftIconBtn) ||
      (iconPosition === this.iconPosition.right &&
        this.state.type === SeaUIBtnType.rightIconBtn)
    ) {
      let classNmae = "fas " + this.state.icon;
      return <i className={classNmae}></i>;
    }
    return null;
  }

  render() {
    return (
      <button
        className={this.getClassName()}
        onClick={(e) => {
          if (this.state.onclick) {
            this.state.onclick();
          }
        }}
      >
        {this.showIcon(this.iconPosition.left)}
        {this.state.type !== SeaUIBtnType.iconBtn ? this.state.text : null}
        {this.showIcon(this.iconPosition.right)}
      </button>
    );
  }
}
