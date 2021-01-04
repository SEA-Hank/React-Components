import "./radio.scss";
import PropTypes from "prop-types";
import { SeaUIBase } from "../base/SeaUIBase";
import { SeaUIType, SeaUIColor, RadioItemType, RadioItem } from "./radioTypes";
export class SeaRadio extends SeaUIBase {
  constructor(props) {
    super(props, SeaUIType.RADIO, props.value);
    this.state = {
      data: this.props.data,
    };
  }

  callback = (selectedValue) => {
    this.setValue(selectedValue);
    this.state.data.map((item, index) => {
      if (item.value === selectedValue) {
        item.selected = true;
      } else {
        item.selected = false;
      }
      return item;
    });
    this.setState({ data: this.state.data });
  };

  getItems() {
    let items = [];
    this.state.data.map((item, index) => {
      switch (this.props.itemType) {
        case RadioItemType.circleDot:
          items.push(
            <RadioItem.CircleDot
              color={this.props.color}
              text={item.text}
              value={item.value}
              selected={item.selected || false}
              callback={this.callback}
            />
          );
          break;
        case RadioItemType.rectangle:
          items.push(
            <RadioItem.Rectangle
              color={this.props.color}
              text={item.text}
              value={item.value}
              selected={item.selected || false}
              callback={this.callback}
            />
          );
          break;
      }
    });
    return items;
  }

  render() {
    return <div className="seauiRadioWrapper">{this.getItems()}</div>;
  }
}

SeaRadio.propTypes = {
  value: PropTypes.string,
  data: PropTypes.array,
  color: PropTypes.oneOf(SeaUIBase.objctToArray(SeaUIColor)),
  itemType: PropTypes.oneOf(SeaUIBase.objctToArray(RadioItemType)),
};

SeaRadio.defaultProps = {
  value: "",
  data: [],
  color: SeaUIColor.bule,
  itemType: RadioItemType.circleDot,
};
