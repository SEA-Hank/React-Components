import "./radio.scss";
import PropTypes from "prop-types";
import { SeaUIBase } from "../base/SeaUIBase";
import { SeaUIType, SeaUIColor, RadioItemType, RadioItem } from "./radioTypes";
export class Radio extends SeaUIBase {
  constructor(props) {
    super(props, SeaUIType.RADIO);
    this.state = {
      data: this.props.data,
    };
  }

  callback = (itemState) => {
    let newData = this.state.data.map((item, index) => {
      item.selected = item.value === itemState.value && itemState.selected;
      return item;
    });
    this.setState({ data: newData });
  };

  getItems() {
    let items = [];
    this.state.data.forEach((item, index) => {
      if (item.selected) {
        this.setValue(item.value);
      }
      switch (this.props.itemType) {
        case RadioItemType.circleDot:
          items.push(
            <RadioItem.CircleDot
              color={this.props.color}
              text={item.text}
              value={item.value}
              selected={item.selected || false}
              callback={this.callback}
              key={index}
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
              key={index}
            />
          );
          break;
      }
    });
    return items;
  }

  classNames() {
    return this.getClassNames("seauiRadioWrapper", this.props.customClass);
  }

  render() {
    return <span className={this.classNames()}>{this.getItems()}</span>;
  }
}
/**
 * data:{ text:<string>,value:<string>, selected:<bool>  }
 * color : one of SeaUIColor
 * itemType : one of RadioItemType
 * customClass : <string>
 */
Radio.propTypes = {
  data: PropTypes.array,
  color: PropTypes.oneOf(SeaUIBase.objctToArray(SeaUIColor)),
  itemType: PropTypes.oneOf(SeaUIBase.objctToArray(RadioItemType)),
  customClass: PropTypes.string,
};

Radio.defaultProps = {
  data: [],
  color: SeaUIColor.bule,
  itemType: RadioItemType.circleDot,
  customClass: "",
};
