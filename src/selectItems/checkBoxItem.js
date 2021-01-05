import "./checkBoxItem.scss";
import { default as SelectItems } from "../selectItems/SelectItems";
export class CheckBoxItem extends SelectItems {
  constructor(props) {
    super(props, "", "");
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
      <label className={this.classNames()}>
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
