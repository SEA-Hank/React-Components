import "./input.scss";
import PropTypes from "prop-types";
import {
  SeaUIBase,
  SeaUISize,
  SeaUIType,
  SeaUIColor,
} from "../_util/SeaUIBase";
import React from "react";
export class Input extends SeaUIBase {
  constructor(props, uiType) {
    super(props, uiType || SeaUIType.INPUT);
    this.wrapper = React.createRef();
    this.state = {
      isOnFocus: false,
      value: this.props.defaultValue,
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
    if (!this.props.disable) {
      this.setState({ isOnFocus: true });
    }
  };

  onBlur = (e) => {
    if (!this.wrapper.current.contains(e.relatedTarget)) {
      this.setState({ isOnFocus: false });
    }
  };

  getLableEle = (position) => {
    let ele =
      position === "forward" ? this.props.addonBefore : this.props.addonAfter;
    if (ele) {
      let eleType = typeof ele;
      return (
        <span
          className={this.getClassNames("seaui-input-label-wrapper", {
            "seaui-input-object-label": !(eleType === "string"),
            "seaui-input-text-label": eleType === "string",
            "seaui-input-label-position-forward": position === "forward",
            "seaui-input-label-position-behind": !(position === "forward"),
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
          "seaui-input-display-btn": this.state.value.length !== 0,
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
        "seaui-input-wrapper",
        {
          "seaui-input-onfocus": this.state.isOnFocus,
          "seaui-input-left-border": addonBefore === null,
          "seaui-input-right-border": addonAfter === null,
          "seaui-disable": this.props.disable,
        },
        this.props.color
      ),
    };

    let inputAttrs = {
      maxLength: this.props.maxLength === 0 ? null : this.props.maxLength,
      onKeyDown: this.props.onKeyDown,
      onChange: this.onChange,
      type: this.props.inputHtmlType,
      value: this.state.value,
      disabled: this.props.disable ? "disabled" : "",
    };
    let classNames = this.getClassNames(
      "seaui-input",
      this.props.size,
      { "seaui-disable": this.props.disable },
      this.props.customClassNames
    );
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
  defaultValue: PropTypes.string,
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
  size: PropTypes.oneOf(SeaUIBase.objctToArray(SeaUISize)),
  disable: PropTypes.bool,
};

Input.defaultProps = {
  color: SeaUIColor.blue,
  defaultValue: "",
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
  size: SeaUISize.Small,
  disable: false,
};
