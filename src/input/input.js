import "./input.scss";
import PropTypes from "prop-types";
import { SeaUIBase } from "../_util/SeaUIBase";
import { SeaUIType, SeaUIColor } from "../_util/types";
import React from "react";
export class Input extends SeaUIBase {
  constructor(props, uiType) {
    super(props, uiType || SeaUIType.INPUT);
    this.wrapper = React.createRef();
    this.state = {
      isFocus: false,
      value: this.props.defaultText,
    };
  }

  onChange = (e) => {
    let value = e.target.value;
    if (this.props.onChange) {
      value = this.props.onChange(value);
    }
    this.setState({ value: value });
  };

  onFocus = (e) => {
    this.setState({ isFocus: true });
  };

  onBlur = (e) => {
    if (!this.wrapper.current.contains(e.relatedTarget)) {
      this.setState({ isFocus: false });
    }
  };

  getLableEle = (position) => {
    let ele =
      position == "forward" ? this.props.addonBefore : this.props.addonAfter;
    if (ele) {
      let eleType = typeof ele;
      return (
        <span
          className={this.getClassNames("labelWrapper", {
            labelObject: !(eleType === "string"),
            labelText: eleType === "string",
            forward: position === "forward",
            behind: !(position === "forward"),
          })}
        >
          {ele}
        </span>
      );
    }
    return null;
  };

  btnOnClick = (event) => {
    this.setState({ value: "" });
  };

  getButton = () => {
    let button = null;
    if (this.props.isShowBtn) {
      let btnAttrs = {
        class: this.getClassNames("far", this.props.btnLogo, {
          showDelBtn: this.state.value.length != 0,
        }),
        onClick: this.props.btnOnClick || this.btnOnClick,
      };
      button = <i {...btnAttrs}></i>;
    }
    return button;
  };

  render() {
    let button = this.getButton();
    let addonBefore = this.getLableEle("forward");
    let addonAfter = this.getLableEle("behind");

    let spanWrapperAttrs = {
      ref: this.wrapper,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      tabIndex: "-1",
      className: this.getClassNames(
        "inputWrapper",
        this.state.isFocus ? "focus" : "",
        {
          leftBorder: addonBefore == null,
          rightBorder: addonAfter == null,
        },
        this.props.color
      ),
    };

    let inputAttrs = {
      maxLength: this.props.maxLength == 0 ? null : this.props.maxLength,
      onKeyDown: this.props.onKeyDown,
      onChange: this.onChange,
      type: this.props.inputHtmlType,
      value: this.state.value,
    };

    let classNames = this.getClassNames("seauiInput", {
      [this.props.customClassNames]: Boolean(this.props.customClassNames),
    });
    return (
      <div className={classNames}>
        {addonBefore}
        <span {...spanWrapperAttrs}>
          <input {...inputAttrs} />
          {button}
        </span>
        {addonAfter}
      </div>
    );
  }
}

Input.propTypes = {
  color: PropTypes.oneOf(SeaUIBase.objctToArray(SeaUIColor)),
  defaultText: PropTypes.string,
  numberFormat: PropTypes.string,
  maxLength: PropTypes.number,
  isShowBtn: PropTypes.bool,
  btnLogo: PropTypes.string,
  btnOnClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  onChange: PropTypes.func,
  inputHtmlType: PropTypes.string,
  customClassNames: PropTypes.string,
  addonAfter: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  addonBefore: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Input.defaultProps = {
  color: SeaUIColor.blue,
  defaultText: "",
  numberFormat: "",
  maxLength: 0,
  isShowBtn: true,
  btnLogo: "fa-times-circle",
  btnOnClick: null,
  onKeyDown: null,
  onChange: null,
  inputHtmlType: "text",
  customClassNames: "",
  addonBefore: null,
  addonAfter: null,
};
