import { Input } from "./input";
import { SeaUIType } from "../_util/types";
import PropTypes from "prop-types";
export class Number extends Input {
  constructor(props) {
    super(props, SeaUIType.NUMBER);
    this.executeOnChange = true;
  }

  numberFormat = function (number, format) {
    const reg = RegExp("#+", "g");
    let arr;
    let numIndex = 0;
    let formatLastIndex = 0;
    while ((arr = reg.exec(format)) !== null) {
      let matchingStr = arr[0];
      let matchingIndex = arr["index"];
      let num = number.substr(numIndex, matchingStr.length);

      format = format.replace(matchingStr, num);
      if (num.length < matchingStr.length) {
        let length = matchingIndex + num.length;
        if (num.length === 0) {
          length = formatLastIndex;
        }
        format = format.substr(0, length);
        break;
      }
      numIndex += matchingStr.length;
      formatLastIndex = matchingIndex + matchingStr.length;
    }
    return format;
  };

  onChange = (e) => {
    let value = e.target.value;
    if (this.executeOnChange) {
      let number = e.target.value.replace(/[^\d]/g, "");
      value = this.numberFormat(number, this.props.numberFormat);
    } else {
      this.executeOnChange = true;
    }
    this.setState({ value: value });
  };

  onKeyDown = (event) => {
    this.executeOnChange = !(
      event.code === "Backspace" || event.code === "Insert"
    );
  };
}

Number.propTypes = {
  ...Input.propTypes,
  numberFormat: PropTypes.string.isRequired,
};

Number.defaultProps = {
  ...Input.defaultProps,
};
