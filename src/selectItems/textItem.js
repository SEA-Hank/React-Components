import "./textItem.scss";
import { default as SelectItems } from "./SelectItems";
import { SeaUIType } from "../_util/types";
export class TextItem extends SelectItems {
  constructor(props) {
    super(props, SeaUIType.SELECTITEM_TEXTITEM, props.value);
  }

  className() {
    console.log(this.props.color);
    return this.getClassNames(
      "seaTextItem",
      this.props.selected ? "seaTextItemSelected" : "",
      this.props.color
    );
  }

  render() {
    return (
      <label
        className={this.className()}
        onClick={(e) => {
          e.stopPropagation();
          this.itemClick();
        }}
      >
        <span>{this.props.text}</span>
      </label>
    );
  }
}

TextItem.propTypes = {
  ...SelectItems.propTypes,
};

TextItem.defaultProps = {
  ...SelectItems.defaultProps,
};
