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
  }

  classNames() {
    console.log(this.context);
    let { value, color } = this.context;
    let isSelected = value.includes(this.state.value);
    return this.getClassNames(
      "seaui-checkBox-option",
      {
        "seaui-checkBox-selected": isSelected,
        [color]: isSelected,
      },
      this.props.customClass
    );
  }

  onClick = () => {
    let { onchange, value } = this.context;
    onchange(this.state.value, value.includes(this.state.value));
  };

  render() {
    return (
      <label className={this.classNames()} onClick={this.onClick}>
        <span></span> {this.props.text}
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
