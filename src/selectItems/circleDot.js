import "./circleDot.scss";
import { default as SelectItems } from "../selectItems/SelectItems";
import { SeaUIType } from "../base/types";

export default class CircleDot extends SelectItems {
  constructor(props) {
    super(props, SeaUIType.SELECTITEM_CIRCLEDOT, props.value);
  }

  // static getDerivedStateFromProps(props, state) {
  //   return { selected: props.selected || false };
  // }

  classNames() {
    return this.getClassNames(
      ["seauiSelectItem", "seauiCircleDot"],
      {
        seauiCircleDotSelected: this.props.selected,
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
        <span className="seauiCircleDotIcon"></span>
        {this.props.text}
      </label>
    );
  }
}

CircleDot.propTypes = {
  ...SelectItems.propTypes,
};

CircleDot.defaultProps = {
  ...SelectItems.defaultProps,
};
