import React, { useState, useImperativeHandle } from "react";
import { SeaUIColor, SeaUISize } from "../_util/SeaUIBase";
import { useClassNames } from "../_util/hooks/useClassNames";
import PropTypes from "prop-types";
import "./switch.scss";
function Switch(props, ref) {
  const [checked, setChecked] = useState(props.defaultChecked);
  const [text, setText] = useState(
    props.defaultChecked ? props.checkedText : props.unCheckText
  );
  const buttonClasses = useClassNames("seaui-switch", props.size, props.color, {
    "seaui-switch-checked": props.defaultChecked,
    "seaui-disable": props.disable,
  });

  useImperativeHandle(ref, () => ({
    focus: () => {
      console.logf("showName");
    },
  }));

  const onclick = () => {
    setText(!checked ? props.checkedText : props.unCheckText);
    buttonClasses.change(
      "seaui-switch",
      props.size,
      {
        "seaui-switch-checked": !checked,
        "seaui-switch-checked-effect": !checked,
        "seaui-switch-uncheck-effect": checked,
      },
      props.color,
      { "seaui-disable": props.disable }
    );
    setChecked((checked) => !checked);
  };

  return (
    <button
      className={buttonClasses.classes}
      onClick={!props.disable ? onclick : null}
    >
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
  color: PropTypes.string,
  size: PropTypes.string,
  disable: PropTypes.bool,
};
Switch.defaultProps = {
  defaultChecked: true,
  checkedText: "开启",
  unCheckText: "关闭",
  color: SeaUIColor.red,
  size: SeaUISize.Small,
  disable: false,
};
export { Switch };
