import React, { useState } from "react";
import { SeaUIColor, SeaUISize } from "../_util/SeaUIBase";
import { Option } from "./option";
import { RateContext } from "./context";
import PropTypes from "prop-types";
import "./rate.scss";
function Rate(props) {
  const [rateValue, setRateValue] = useState(props.defaultValue);

  const [temporary, SetTemporary] = useState(props.defaultValue);

  const options = [];
  for (let index = 1; index <= props.quantity; index++) {
    options.push(<Option index={index}></Option>);
  }

  const onChange = (ishover, value) => {
    SetTemporary(value);
    if (!ishover) {
      setRateValue(value);
    }
  };

  const onMouseLeave = () => {
    SetTemporary(rateValue);
  };

  return (
    <RateContext.Provider value={{ tempValue: temporary, onChange: onChange }}>
      <div className="seaui-rate-wrapper" onMouseLeave={onMouseLeave}>
        <ul>{options}</ul>
      </div>
    </RateContext.Provider>
  );
}
Rate.propTypes = {
  defaultValue: PropTypes.number,
  quantity: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.string,
  disable: PropTypes.bool,
  onChange: PropTypes.func,
};
Rate.defaultProps = {
  defaultValue: 3.5,
  quantity: 5,
  color: SeaUIColor.red,
  size: SeaUISize.Small,
  disable: false,
  onChange: null,
};
export { Rate };
