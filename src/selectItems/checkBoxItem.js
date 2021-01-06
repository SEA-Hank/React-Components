import "./checkBoxItem.scss";
import { SeaUIType } from "../_util/types";
import { default as SelectItems } from "../selectItems/SelectItems";
export class CheckBoxItem extends SelectItems {
  constructor(props) {
    super(props, SeaUIType.CHECKBOXITEM, props.value);
  }

  classNames() {
    return this.getClassNames(
      "seauiCheckBoxItem",
      {
        seauiCheckBoxSelected: this.props.selected,
        [this.props.color]: this.props.selected,
      },
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
        <span></span> {this.props.text}
      </label>
    );
  }
}

CheckBoxItem.propTypes = {
  ...SelectItems.propTypes,
};

CheckBoxItem.defaultProps = {
  ...SelectItems.defaultProps,
};
