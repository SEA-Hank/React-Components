import "./select.scss";
import PropTypes from "prop-types";
import { SeaUIBase } from "../_util/SeaUIBase";
import { SeaUIType, SeaUIColor } from "./selectTypes";
import { TextItem } from "../selectItems/textItem";
export class Select extends SeaUIBase {
  constructor(props) {
    super(props, SeaUIType.SELECT, props.value);
    let { data, text, value } = this.init();
    this.setValue(value);
    this.state = { selected: false, data: data, text: text };
  }
  init(selectedItem) {
    let data = this.state ? this.state.data : this.props.data;

    let text = this.props.text;
    let value = "";
    data.map((ele) => {
      if (selectedItem) {
        ele.selected = ele.value === selectedItem.value;
      }
      if (ele.selected) {
        text = ele.text;
        value = ele.value;
      }
      return ele;
    });
    return { data, text, value };
  }

  callback = (selectedItem) => {
    let { data, text, value } = this.init(selectedItem);
    this.setValue(value);
    this.setState({ selected: false, data: data, text: text });
  };

  uiClick = function () {
    console.log("uiClick");
    this.setState({ selected: true });
  };

  classNames() {
    let names = this.getClassNames(
      "seaSelectWrapper",
      this.state.selected ? "seaSelectSelected" : "",
      this.props.color
    );
    return names;
  }

  onBlur() {
    this.setState({ selected: false });
  }

  getOptions() {
    let options = [];
    this.state.data.forEach((element) => {
      options.push(
        <TextItem
          text={element.text}
          value={element.value}
          selected={element.selected || false}
          callback={this.callback}
          color={this.props.color}
        />
      );
    });
    return options;
  }

  render() {
    return (
      <div
        tabIndex="-1"
        onBlur={() => {
          this.onBlur();
        }}
        className={this.classNames()}
        onClick={(e) => {
          this.uiClick();
        }}
      >
        {this.state.text}
        <div className="seaSelect-selectItemsWrapper">{this.getOptions()}</div>
      </div>
    );
  }
}

Select.propTypes = {
  color: PropTypes.oneOf(SeaUIBase.objctToArray(SeaUIColor)),
  data: PropTypes.array.isRequired,
  defaultText: PropTypes.string.isRequired,
};

Select.defaultProps = {
  color: SeaUIColor.blue,
  data: [],
  defaultText: "chose an option",
};
