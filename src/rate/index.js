import React, { useState } from "react";
import { SeaUIColor, SeaUISize } from "../_util/SeaUIBase";
import { Option } from "./option";
import { RateContext } from "./context";
import PropTypes from "prop-types";
import { useClassNames } from "../_util/hooks/useClassNames";
import "./rate.scss";
function Rate(props) {
  const [rateValue, setRateValue] = useState(props.defaultValue);

  const [temporary, SetTemporary] = useState(props.defaultValue);

  const classnames = useClassNames(
    "seaui-rate-wrapper",
    props.size,
    props.color,
    { "seaui-disabled": props.disabled }
  );

  const options = [];
  for (let index = 1; index <= props.quantity; index++) {
    options.push(<Option key={index} index={index}></Option>);
  }

  const onChange = (ishover, value) => {
    if (!props.disabled) {
      SetTemporary(value);
      if (!ishover) {
        setRateValue(value);
        if (props.onChange) {
          props.onChange(value);
        }
      }
    }
  };

  const onMouseLeave = () => {
    SetTemporary(rateValue);
  };

  return (
    <RateContext.Provider value={{ tempValue: temporary, onChange: onChange }}>
      <div className={classnames.classes} onMouseLeave={onMouseLeave}>
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
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
Rate.defaultProps = {
  defaultValue: 3.5,
  quantity: 5,
  color: SeaUIColor.red,
  size: SeaUISize.Small,
  disabled: false,
  onChange: null,
};
export { Rate };
