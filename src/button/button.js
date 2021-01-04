import "./button.scss";
import "../fontawesome/css/all.min.css";
import PropTypes from "prop-types";
import { SeaUIBase } from "../base/SeaUIBase";
import {
  BtnType,
  BtnTypeStyle,
  BtnIconPosition,
  BtnIconPositionSylte,
  SeaUIColor,
  SeaUIType,
} from "./buttonTypes";

export class SeaButton extends SeaUIBase {
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

  render() {
    return (
      <button
        className={this.classNames()}
        onClick={(e) => {
          if (this.props.onclick) {
            this.props.onclick();
          }
        }}
      >
        {this.showIcon(BtnIconPosition.left)}
        {this.props.type !== BtnType.iconBtn ? this.props.text : null}
        {this.showIcon(BtnIconPosition.right)}
      </button>
    );
  }
}

/**
 *props:
 *type : values in the SeaUIBtnType
 *text : button text
 *color : values in the SeaUIBtnColor
 *onclick : button onclick event callback
 *customClass : custom class
 *icon : icon from fontawesome
 */

SeaButton.propTypes = {
  type: PropTypes.oneOf(SeaUIBase.objctToArray(BtnType)),
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(SeaUIBase.objctToArray(SeaUIColor)),
  onclick: PropTypes.func,
  customClass: PropTypes.string,
  icon: PropTypes.string,
};

SeaButton.defaultProps = {
  type: BtnType.textBtn,
  text: "",
  color: SeaUIColor.bule,
  onclick: null,
  customClass: "",
  icon: "",
};
