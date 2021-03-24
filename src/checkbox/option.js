import "./option.scss";
import { SeaUIType } from "../_util/types";
import { SeaUIBase } from "../_util/SeaUIBase";
import { CheckBoxContext } from "./context";
import PropTypes from "prop-types";
export class Option extends SeaUIBase {
  static contextType = CheckBoxContext;
  constructor(props) {
    super(props, SeaUIType.CHECKBOXITEM);
    this.state = { value: props.value };
    this.effect = false;
    this.unSelectedEffect = false;
  }

  classNames() {
    let { value, color, effect, size, disable } = this.context;
    let isSelected = value.includes(this.state.value);
    return this.getClassNames(
      "seaui-checkBox-option",
      [size],
      {
        "seaui-checkBox-selected": isSelected || this.effect,
        [color]: isSelected || this.effect,
        "seaui-checkbox-selected-effect": isSelected && effect && this.effect,
        "seaui-checkbox-unselected-effect":
          this.unSelectedEffect && this.effect,
        "seaui-disable": disable || this.props.disable,
      },
      this.props.customClass
    );
  }

  onClick = () => {
    let { onchange, value, disable } = this.context;
    if (disable || this.props.disable) {
      return;
    }
    this.effect = true;
    this.unSelectedEffect = value.includes(this.state.value);
    onchange(this.state.value, this.unSelectedEffect);
  };

  render() {
    return (
      <label className={this.classNames()} onClick={this.onClick}>
        <span className="seaui-checkbox-box"></span>
        <span className="seaui-checkbox-text">{this.props.text}</span>
      </label>
    );
  }
}

Option.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string,
  customClass: PropTypes.string,
  disable: PropTypes.bool,
};

Option.defaultProps = {
  value: "",
  customClass: "",
  disable: false,
};
