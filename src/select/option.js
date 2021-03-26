import "./option.scss";
import {
  SeaUIType,
  SeaUIColor,
  SeaUISize,
  SeaUIBase,
} from "../_util/SeaUIBase";
import { SelectContext } from "./context";
import PropTypes from "prop-types";
export class Option extends SeaUIBase {
  static contextType = SelectContext;
  constructor(props) {
    super(props, SeaUIType.SELECTITEM_TEXTITEM);
    this.state = { value: this.props.value };
  }

  className() {
    let { color, value, disable } = this.context;
    console.log("test");
    return this.getClassNames(
      "seaui-select-option",
      { "seaui-select-option-selected": value === this.state.value },
      color,
      { "seaui-disable": this.props.disable }
    );
  }

  onClick = (e) => {
    e.stopPropagation();
    let { onchange } = this.context;
    if (!this.props.disable) {
      onchange(this.state.value);
    }
  };

  render() {
    return (
      <label className={this.className()} onClick={this.onClick}>
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
