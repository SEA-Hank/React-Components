import "./checkbox.scss";
import {
  SeaUIBase,
  SeaUIType,
  SeaUIColor,
  SeaUISize,
} from "../_util/SeaUIBase";
import PropTypes from "prop-types";
import { Option } from "./option";
import { CheckBoxContext } from "./context";
export class CheckBox extends SeaUIBase {
  constructor(props) {
    super(props, SeaUIType.CHECKBOX);
    this.state = {
      options: this.props.options,
      value: this.props.defaultValue,
      effect: false,
    };
  }

  onchange = (itemValue, isSelected) => {
    if (isSelected) {
      this.state.value = this.state.value.filter((item) => item != itemValue);
    } else {
      this.state.value.push(itemValue);
    }
    if (this.props.onchange != null) {
      this.props.onchange(this.state.value);
    }
    this.setState({ value: this.state.value, effect: true });
  };

  getOptions() {
    if (this.props.children != null) {
      return this.props.children;
    }
    let items = [];
    this.state.options.forEach((item, index) => {
      items.push(
        <Option
          text={item.text}
          value={item.value}
          key={index}
          disable={item.disable || false}
        />
      );
    });
    return items;
  }

  render() {
    return (
      <CheckBoxContext.Provider
        value={{
          color: this.props.color,
          onchange: this.onchange,
          value: this.state.value,
          size: this.props.size,
          effect: this.state.effect,
          disable: this.props.disable,
        }}
      >
        <span className={this.getClassNames("seaui-checkbox", this.props.size)}>
          {this.getOptions()}
        </span>
      </CheckBoxContext.Provider>
    );
  }
}

/**
 * options:{ text:<string>,value:<string>, selected:<bool>  }
 * color : one of SeaUIColor
 * customClass : <string>
 * defaultValue:[ value,value ]
 */
CheckBox.propTypes = {
  options: PropTypes.array,
  defaultValue: PropTypes.array,
  color: PropTypes.oneOf(SeaUIBase.objctToArray(SeaUIColor)),
  customClass: PropTypes.string,
  onchange: PropTypes.func,
  size: PropTypes.oneOf(SeaUIBase.objctToArray(SeaUISize)),
  disable: PropTypes.bool,
};

CheckBox.defaultProps = {
  options: [],
  defaultValue: [],
  color: SeaUIColor.bule,
  customClass: "",
  onchange: null,
  size: SeaUISize.Small,
  disable: false,
};
