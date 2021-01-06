import { SeaUIBase } from "../_util/SeaUIBase";
import PropTypes from "prop-types";
import { SeaUIType, SeaUIColor } from "../_util/types";
import { CheckBoxItem } from "../selectItems/checkBoxItem";
export class CheckBox extends SeaUIBase {
  constructor(props) {
    super(props, SeaUIType.CHECKBOX, props.value);
    this.state = {
      data: this.props.data,
    };
  }

  callback = (itemState) => {
    let newData = this.state.data.map(function (item) {
      if (item.value === itemState.value) {
        item.selected = itemState.selected;
      }
      return item;
    });
    this.setState({ data: newData });
  };

  getItems() {
    let items = [];
    let values = [];
    this.state.data.forEach((item, index) => {
      if (item.selected) {
        values.push(item.value);
      }
      items.push(
        <CheckBoxItem
          color={this.props.color}
          text={item.text}
          value={item.value}
          selected={item.selected || false}
          callback={this.callback}
          key={index}
        />
      );
    });
    this.setValue(values);
    return items;
  }

  render() {
    return <span>{this.getItems()}</span>;
  }
}

/**
 * data:{ text:<string>,value:<string>, selected:<bool>  }
 * color : one of SeaUIColor
 * customClass : <string>
 */
CheckBox.propTypes = {
  data: PropTypes.array,
  color: PropTypes.oneOf(SeaUIBase.objctToArray(SeaUIColor)),
  customClass: PropTypes.string,
};

CheckBox.defaultProps = {
  data: [],
  color: SeaUIColor.bule,
  customClass: "",
};
