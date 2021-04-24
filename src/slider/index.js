import "./slider.scss";
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { SeaUIColor, SeaUISize } from "../_util/SeaUIBase";
import { useClassNames } from "../_util/hooks/useClassNames";
function Slider(props) {
  let railInfo = null;
  const rail = useRef(null);
  const [rightHandlePosition, setRightHandlePosition] = useState(
    [1 - props.defaultValue / props.max] * 100 + "%"
  );
  const wrapperClasses = useClassNames();

  const onMouseDown = (event) => {
    if (!props.disable) {
      railInfo = rail.current.getBoundingClientRect();
      setRightHandlePosition(getPosition(event));
      wrapperClasses.change(
        "seaui-slider-wrapper",
        props.color,
        "seaui-slider-changing",
        { "seaui-disable": props.disable }
      );
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }
  };
  const onMouseUp = (event) => {
    if (!props.disable) {
      wrapperClasses.change("seaui-slider-wrapper", props.color);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }
  };

  const onMouseMove = (event) => {
    setRightHandlePosition(getPosition(event));
  };

  const getPosition = (event) => {
    let val = ((event.pageX - railInfo.left) / railInfo.width) * props.max;
    let steps = ((val - props.min) / props.step).toFixed(0);
    val = parseInt(steps) * props.step + props.min;
    let position = parseFloat((1 - val / props.max).toFixed(2));
    position = position > 1 ? 1 : position;
    position = position < 0 ? 0 : position;
    position = (position * 100).toFixed(2);
    return position + "%";
  };

  useEffect(() => {
    wrapperClasses.change("seaui-slider-wrapper", props.color, {
      "seaui-disable": props.disable,
    });
  }, [props.color, props.disable]);

  return (
    <div className={wrapperClasses.classes}>
      <div ref={rail} className="seaui-slider-rail"></div>
      <div
        className="seaui-slider-track"
        style={{
          right: rightHandlePosition,
        }}
      ></div>
      <div
        className="seaui-slider-handle"
        style={{ right: rightHandlePosition }}
      ></div>
      <div className="seaui-slider-event-mask" onMouseDown={onMouseDown}></div>
    </div>
  );
}

Slider.propTypes = {
  defaultValue: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.string,
  disable: PropTypes.bool,
  onChange: PropTypes.func,
  step: PropTypes.number,
};
Slider.defaultProps = {
  defaultValue: 48,
  max: 100,
  min: 0,
  color: SeaUIColor.red,
  size: SeaUISize.Small,
  disable: true,
  onChange: null,
  step: 1,
};
export { Slider };
