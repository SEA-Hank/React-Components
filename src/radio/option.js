import "./option.scss";
import { default as SelectItems } from "../selectItems/SelectItems";
import { SeaUIType } from "../_util/types";
import { RadioContext } from "./context";
export class Option extends SelectItems {
  static contextType = RadioContext;

  constructor(props) {
    super(props, SeaUIType.RADIO_OPTION, props.value);
  }

  classNames(color, size, value) {
    return this.getClassNames(
      "seaui-radio-option",
      size,
      color,
      {
        "seaui-radio-option-selected": value == this.state.value,
      },
      this.props.customClass
    );
  }

  render() {
    let { color, onchange, value, size } = this.context;
    return (
      <label
        className={this.classNames(color, size, value)}
        onClick={() => {
          onchange(this.state.value);
        }}
      >
        <span className="seaui-radio-option-icon"></span>
        <span>{this.props.text}</span>
      </label>
    );
  }
}

Option.propTypes = {
  ...SelectItems.propTypes,
};

Option.defaultProps = {
  ...SelectItems.defaultProps,
};
