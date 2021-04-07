import "./radio.scss";
import PropTypes from "prop-types";
import {
  SeaUIBase,
  SeaUIType,
  SeaUIColor,
  SeaUISize,
} from "../_util/SeaUIBase";
import { RadioOptionType } from "./radioTypes";
import { Option } from "./option";
import { ButtonOption } from "./buttonoption";
import { RadioContext } from "./context";

export class Radio extends SeaUIBase {
  constructor(props) {
    super(props, SeaUIType.RADIO);
    this.state = {
      value: this.props.defaultValue,
      effect: false,
      options: this.getOptions(),
    };
  }

  onchange = (newValue) => {
    if (this.props.onchange != null) {
      this.props.onchange(newValue);
    }
    this.setState({ value: newValue, effect: true });
  };

  getOptions() {
    if (this.props.children != null) {
      return this.props.children;
    }
    let items = [];
    this.props.options.forEach((item, index) => {
      let arrt = {
        text: item.text,
        value: item.value,
        key: index,
        disable: item.disable || false,
      };
      switch (this.props.optionType) {
        case RadioOptionType.default:
          items.push(<Option {...arrt} />);
          break;
        case RadioOptionType.button:
          items.push(<ButtonOption {...arrt} />);
          break;
      }
    });
    return items;
  }

  classNames() {
    return this.getClassNames(
      "seaui-radio-wrapper",
      this.props.size,
      this.props.customClass
    );
  }

  render() {
    return (
      <RadioContext.Provider
        value={{
          color: this.props.color,
          onchange: this.onchange,
          value: this.state.value,
          size: this.props.size,
          effect: this.state.effect,
          disable: this.props.disable,
        }}
      >
        <div className={this.classNames()}>{this.state.options}</div>
      </RadioContext.Provider>
    );
  }
}
/**
 * options:{ text:<string>,value:<string>, selected:<bool>  }
 * optionType : one of RadioItemType
 * color : one of SeaUIColor
 * customClass : <string>
 * defaultValue:<string>
 * onchange:<function>
 */
Radio.propTypes = {
  options: PropTypes.array,
  optionType: PropTypes.oneOf(SeaUIBase.objctToArray(RadioOptionType)),
  color: PropTypes.oneOf(SeaUIBase.objctToArray(SeaUIColor)),
  customClass: PropTypes.string,
  defaultValue: PropTypes.string,
  onchange: PropTypes.func,
  size: PropTypes.oneOf(SeaUIBase.objctToArray(SeaUISize)),
  disable: PropTypes.bool,
};

Radio.defaultProps = {
  options: [],
  optionType: RadioOptionType.default,
  color: SeaUIColor.bule,
  customClass: "",
  defaultValue: "",
  onchange: null,
  size: SeaUISize.Small,
  disable: false,
};
