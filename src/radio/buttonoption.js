import { RadioContext } from "./context";
import PropTypes from "prop-types";
import { SeaUIBase, SeaUIType } from "../_util/SeaUIBase";
import "./buttonoption.scss";
export class ButtonOption extends SeaUIBase {
  static contextType = RadioContext;

  constructor(props) {
    super(props, SeaUIType.RADIO_BUTTONOPTION);
    this.state = { value: props.value };
  }
  classNames() {
    let { color, size, value, disable } = this.context;
    return this.getClassNames(
      ["seaui-radio-buttonoption", color, size],
      {
        "seaui-disable": disable || this.props.disable,
        "seaui-radio-buttonoption-selected": value == this.state.value,
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
        {this.props.text}
      </label>
    );
  }
}
ButtonOption.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string,
  customClass: PropTypes.string,
  disable: PropTypes.bool,
};

ButtonOption.defaultProps = {
  value: "",
  customClass: "",
  disable: false,
};
