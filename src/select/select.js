import "./select.scss";
import PropTypes from "prop-types";
import { SeaUIBase } from "../_util/SeaUIBase";
import { SeaUIType, SeaUIColor } from "./selectTypes";
import { TextItem } from "../selectItems/textItem";
import React from "react";
export class Select extends SeaUIBase {
  constructor(props) {
    super(props, SeaUIType.SELECT);
    let { data, text, value } = this.init();
    this.state = { selected: false, data: data, text: text };
    this.wrapper = React.createRef();
  }
  init = (selectedItem) => {
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
  };

  callback = (selectedItem) => {
    let { data, text, value } = this.init(selectedItem);
    this.setState({ selected: false, data: data, text: text });
  };

  uiClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    this.setState({ selected: true });
  };

  classNames = () => {
    let names = this.getClassNames(
      "seaSelectWrapper",
      this.state.selected ? "seaSelectSelected" : "",
      this.props.color
    );
    return names;
  };

  onBlur = () => {
    this.setState({ selected: false });
  };

  onAnimationEnd = () => {
    this.wrapper.current.focus();
  };

  getOptions = () => {
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
  };

  render() {
    return (
      <div className={this.classNames()} onClick={this.uiClick}>
        {this.state.text}
        <div
          ref={this.wrapper}
          tabIndex="-1"
          onAnimationEnd={this.onAnimationEnd}
          onBlur={this.onBlur}
          className="seaSelect-selectItemsWrapper"
        >
          {this.getOptions()}
        </div>
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
