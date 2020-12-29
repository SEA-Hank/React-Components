import "./radio.scss";
import { SeaUIBase, SeaUIType } from "../base/SeaUIBase";

export const SeaRadioType = {
  block: "block",
  circleDot: "circleDot",
};

export class SeaRadio extends SeaUIBase {
  constructor(props) {
    super(props, SeaUIType.RADIO, props.value);
    this.state = {
      value: this.props.value || "",
      type: this.props.type || SeaRadioType.circleDot,
    };
  }
  render() {
    return <div className="seauiRadioWrapper"></div>;
  }
}
