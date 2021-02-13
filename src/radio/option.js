import "./option.scss";
import { default as SelectItems } from "../selectItems/SelectItems";
import { SeaUIType } from "../_util/types";
import { RadioContext } from "./context";
export class Option extends SelectItems {
  static contextType = RadioContext;

  constructor(props) {
    super(props, SeaUIType.RADIO_OPTION, props.value);
  }

  classNames(color, value) {
    return this.getClassNames(
      "seaui-radio-option",
      color,
      {
        "seaui-radio-option-selected": value == this.state.value,
      },
      this.props.customClass
    );
  }

  render() {
    let { color, onchange, value } = this.context;
    return (
      <label
        className={this.classNames(color, value)}
        onClick={() => {
          onchange(this.state.value);
        }}
      >
        <span className="seaui-radio-option-icon"></span>
        {this.props.text}
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
