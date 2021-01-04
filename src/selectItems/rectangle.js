import { default as SelectItems } from "./SelectItems";
import { SeaUIType } from "../base/types";
import "./rectangle.scss";
export default class Rectangle extends SelectItems {
  constructor(props) {
    super(props, SeaUIType.SELECTITEM_RECTANGLE, props.value);
  }
  classNames() {
    return this.getClassNames(
      ["seauiRectangleSelectItem", this.props.color],
      { rectangleSelectItemSelected: this.props.selected },
      this.props.customClass
    );
  }
  render() {
    return (
      <label
        className={this.classNames()}
        onClick={(e) => {
          this.itemClick();
        }}
      >
        {this.props.text}
      </label>
    );
  }
}
Rectangle.propTypes = {
  ...SelectItems.propTypes,
};
Rectangle.defaultProps = {
  ...SelectItems.defaultProps,
};
