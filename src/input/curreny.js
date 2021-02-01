import { Input } from "./input";
import { SeaUIType } from "../_util/types";
import PropTypes from "prop-types";
export class Curreny extends Input {
  constructor(props) {
    super(props, SeaUIType.CURRENY);
  }

  currenyFormat = function (number) {
    let symbol = this.props.symbol;
    let decimal = this.props.decimal;
    let thousand = this.props.thousand;
    let precision = this.props.precision;
    let value = "";

    let index = number.length - 1;
    for (index; index >= 0; index--) {
      if (number.length - index - 1 === precision) {
        value = decimal + value;
      } else if (!((number.length - index - 1 - precision) % 3) && value) {
        value = thousand + value;
      }
      value = number[index] + value;
    }
    if (value.length <= precision) {
      while (value.length < precision) {
        value = "0" + value;
      }
      value = "0." + value;
    }
    value = symbol + " " + value;
    return value;
  };

  onChange = (e) => {
    let number = e.target.value.replace(/[^\d]/g, "").replace(/^0+/, "");
    this.setState({ value: this.currenyFormat(number) });
  };
}

Curreny.propTypes = {
  ...Input.propTypes,
  symbol: PropTypes.string,
  decimal: PropTypes.string,
  thousand: PropTypes.string,
  precision: PropTypes.number,
};

Curreny.defaultProps = {
  ...Input.defaultProps,
  symbol: "$",
  decimal: ".",
  thousand: ",",
  precision: 2,
};
