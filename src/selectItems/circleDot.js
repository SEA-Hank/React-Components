import { SeaUIColor, SeaUIBase, SeaUIType } from "../base/SeaUIBase";
export class circleDot extends SeaUIBase {
  constructor(props) {
    super(props, SeaUIType.CIRCLEDOT, props.value);
    this.state = {
      text: this.props.value,
      selected: this.props.state || false,
      value: this.props.value,
      color: this.props.color || SeaUIColor.bule,
    };
  }

  select(key) {
    let isSelected = key === this.value;
    this.setState({
      selected: isSelected,
    });
  }

  render() {
    return (
      <label className="seauiCircleDot seauiCircleDotSelected">
        <span className="seauiCircleDotIcon"></span>
        {this.state.text}
      </label>
    );
  }
}
