import { SeaUIBase } from "../base/SeaUIBase";
import PropTypes from "prop-types";
import { SeaUIType, SeaUIColor } from "../base/types";
import { CheckBoxItem } from "../selectItems/checkBoxItem";
export class CheckBox extends SeaUIBase {
  constructor(props) {
    super(props, SeaUIType.CHECKBOX, props.value);
    this.state = {
      data: this.props.data,
    };
  }

  callback = (itemState) => {
    this.state.data.map((item) => {
      if (item.value === itemState.value) {
        item.selected = itemState.selected;
      }
      return item;
    });
    this.setState({ data: this.state.data });
  };

  getItems() {
    let items = [];
    let values = [];
    this.state.data.map((item, index) => {
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
