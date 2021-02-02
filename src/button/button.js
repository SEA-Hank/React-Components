import "./button.scss";
import "../fontawesome/css/all.min.css";
import PropTypes from "prop-types";
import {
  SeaUIType,
  SeaUIColor,
  SeaUISize,
  SeaUIBase,
} from "../_util/SeaUIBase";
import {
  BtnType,
  BtnTypeStyle,
  BtnIconPosition,
  BtnIconPositionSylte,
} from "./buttonTypes";

export class Button extends SeaUIBase {
  constructor(props) {
    super(props, SeaUIType.BUTTON);
  }

  classNames() {
    return this.getClassNames(
      ["seauiBtn", this.props.color],
      {
        [BtnTypeStyle.seauiIconBtn]: this.props.type === BtnType.iconBtn,
        [BtnTypeStyle.seauiTextBtn]: this.props.type !== BtnType.iconBtn,

        [BtnIconPositionSylte.iconOnLeft]:
          this.props.type === BtnType.leftIconBtn,
        [BtnIconPositionSylte.iconOnRight]:
          this.props.type === BtnType.rightIconBtn,
      },
      this.props.size,
      { "seaui-disable": this.props.disable },
      this.props.customClass
    );
  }

  showIcon(iconPosition) {
    if (
      (iconPosition === BtnIconPosition.left &&
        this.props.type === BtnType.iconBtn) ||
      (iconPosition === BtnIconPosition.left &&
        this.props.type === BtnType.leftIconBtn) ||
      (iconPosition === BtnIconPosition.right &&
        this.props.type === BtnType.rightIconBtn)
    ) {
      let classNmae = "fas " + this.props.icon;
      return <i className={classNmae}></i>;
    }
    return null;
  }

  onClick = () => {
    if (this.props.onclick && !this.props.disable) {
      this.props.onclick();
    }
  };

  render() {
    return (
      <button className={this.classNames()} onClick={this.onClick}>
        {this.showIcon(BtnIconPosition.left)}
        {this.props.type !== BtnType.iconBtn ? this.props.text : null}
        {this.showIcon(BtnIconPosition.right)}
      </button>
    );
  }
}

/**
 *props:
 *type : one of SeaUIBtnType
 *text : button text
 *color : one of SeaUIBtnColor
 *onclick : button onclick event callback
 *customClass : custom class
 *icon : icon from fontawesome
 *disable: true or false
 */

Button.propTypes = {
  type: PropTypes.oneOf(SeaUIBase.objctToArray(BtnType)),
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(SeaUIBase.objctToArray(SeaUIColor)),
  onclick: PropTypes.func,
  customClass: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.oneOf(SeaUIBase.objctToArray(SeaUISize)),
  disable: PropTypes.bool,
};

Button.defaultProps = {
  type: BtnType.textBtn,
  text: "",
  color: SeaUIColor.blue,
  onclick: null,
  customClass: "",
  icon: "",
  size: SeaUISize.Small,
  disable: false,
};
