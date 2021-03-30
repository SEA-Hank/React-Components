import "./option.scss";
import { RadioContext } from "./context";
import PropTypes from "prop-types";
import { SeaUIBase, SeaUIType } from "../_util/SeaUIBase";
export class Option extends SeaUIBase {
  static contextType = RadioContext;

  constructor(props) {
    super(props, SeaUIType.RADIO_OPTION);
    this.state = { value: props.value };
  }

  classNames() {
    let { color, size, value, disable, effect } = this.context;
    return this.getClassNames(
      "seaui-radio-option",
      size,
      color,
      {
        "seaui-disable": disable || this.props.disable,
        "seaui-radio-option-selected": value === this.state.value,
        "seaui-radio-option-selected-effect":
          value === this.state.value && effect,
      },
      this.props.customClass
    );
  }
  onClick = () => {
    let { onchange, disable } = this.context;
    if (!(disable || this.props.disable)) {
      onchange(this.state.value);
    }
  };
  render() {
    return (
      <label className={this.classNames()} onClick={this.onClick}>
        <span className="seaui-radio-option-icon"></span>
        <span>{this.props.text}</span>
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
