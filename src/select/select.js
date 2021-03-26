import "./select.scss";
import { SelectContext } from "./context";
import PropTypes from "prop-types";
import {
  SeaUIBase,
  SeaUIType,
  SeaUIColor,
  SeaUISize,
} from "../_util/SeaUIBase";
import { Option } from "./option";
import React from "react";
export class Select extends SeaUIBase {
  constructor(props) {
    super(props, SeaUIType.SELECT);
    this.state = {
      selecting: undefined,
      text: this.getTextByValue(this.props.defaultValue),
      value: this.props.defaultValue,
    };
    this.wrapper = React.createRef();
  }

  getTextByValue = (val) => {
    let resource = this.props.children || this.props.options;
    let text = "";
    resource.forEach((item) => {
      var obj = item.props || item;
      if (obj.value == val) {
        text = obj.text;
        return;
      }
    });
    return text;
  };

  onchange = (val) => {
    this.setState({
      selecting: false,
      value: val,
      text: this.getTextByValue(val),
    });
  };

  onClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (!this.props.disable) {
      this.setState({ selecting: true });
    }
  };

  classNames = () => {
    return this.getClassNames("seaui-select-wrapper", this.props.size, {
      [this.props.color]: this.state.selecting,
      "seaui-select-selecting":
        this.state.selecting == null ? false : this.state.selecting,
      "seaui-select-after-selecting":
        this.state.selecting == null ? false : !this.state.selecting,
      "seaui-disable": this.props.disable,
    });
  };

  onBlur = () => {
    this.setState({ selecting: false });
  };

  onAnimationEnd = () => {
    this.wrapper.current.focus();
  };

  getOptions = () => {
    if (this.props.children != null) {
      return this.props.children;
    }
    let options = [];
    this.props.options.forEach((element, index) => {
      options.push(
        <Option
          text={element.text}
          value={element.value}
          key={index}
          disable={element.disable || this.props.disable}
        />
      );
    });
    return options;
  };

  render() {
    return (
      <SelectContext.Provider
        value={{
          onchange: this.onchange,
          color: this.props.color,
          value: this.state.value,
          disable: this.props.disable,
        }}
      >
        <div
          style={{ width: this.props.width }}
          className={this.classNames()}
          onClick={this.onClick}
        >
          <span>{this.state.text}</span>
          <div
            ref={this.wrapper}
            tabIndex="-1"
            onAnimationEnd={this.onAnimationEnd}
            onBlur={this.onBlur}
            className="seaui-select-select-options-wrapper"
          >
            {this.getOptions()}
          </div>
        </div>
      </SelectContext.Provider>
    );
  }
}

Select.propTypes = {
  color: PropTypes.oneOf(SeaUIBase.objctToArray(SeaUIColor)),
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.string,
  onchange: PropTypes.func,
  size: PropTypes.oneOf(SeaUIBase.objctToArray(SeaUISize)),
  disable: PropTypes.bool,
  width: PropTypes.string,
};

Select.defaultProps = {
  color: SeaUIColor.blue,
  options: [],
  defaultValue: "",
  onchange: null,
  size: SeaUISize.Small,
  disable: false,
  width: "100px",
};
