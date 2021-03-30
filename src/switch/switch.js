import React, { useState, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import "./switch.scss";
function Switch(props, ref) {
  const [checked, setChecked] = useState(props.defaultChecked);
  const [text, setText] = useState(
    props.defaultChecked ? props.checkedText : props.unCheckText
  );

  useImperativeHandle(ref, () => ({
    focus: () => {
      console.logf("showName");
    },
  }));

  const onclick = () => {
    setText(checked ? props.unCheckText : props.checkedText);
    setChecked((checked) => !checked);
  };

  const getClassNames = () => {
    console.log(checked);
    return "seaui-switch" + (checked ? " seaui-switch-checked" : "");
  };

  return (
    <button className={getClassNames()} onClick={onclick}>
      <div></div>
      <span>{text}</span>
    </button>
  );
}

Switch = React.forwardRef(Switch);
Switch.propTypes = {
  defaultChecked: PropTypes.bool,
  checkedText: PropTypes.string,
  unCheckText: PropTypes.string,
};
Switch.defaultProps = {
  defaultChecked: true,
  checkedText: "开启",
  unCheckText: "关闭",
};
export { Switch };
