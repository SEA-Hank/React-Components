import { SeaUIBase } from "../_util/SeaUIBase";
import PropTypes from "prop-types";
import { SeaUIColor } from "../_util/types";

export default class SelectItems extends SeaUIBase {
  constructor(props, uitype, value) {
    super(props, uitype, value);
  }
  itemClick() {
    this.props.callback({
      value: this.getValue(),
      selected: !this.props.selected,
    });
  }
}

SelectItems.propTypes = {
  text: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  value: PropTypes.string,
  color: PropTypes.oneOf(SeaUIBase.objctToArray(SeaUIColor)),
  customClass: PropTypes.string,
};

SelectItems.defaultProps = {
  selected: false,
  value: "",
  color: SeaUIColor.blue,
  customClass: "",
};