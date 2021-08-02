import "./slider.scss";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { SeaUIColor, SeaUISize } from "../_util/SeaUIBase";
import { useClassNames } from "../_util/hooks/useClassNames";
import { Handle } from "./handle";
function Slider(props) {
  let initHdInfo = (value) => {
    let offset =
      value == props.min ? "0%" : ((value / props.max) * 100).toFixed(2) + "%";
    return props.horizontal
      ? { left: offset, activated: false, value }
      : { top: offset, activated: false, value };
  };

  let calcTrackWidth = (leftOne, leftTwo) => {
    return Math.abs(parseFloat(leftOne) - parseFloat(leftTwo)) + "%";
  };

  const calcActionInfo = (event) => {
    let mousePst =
      ((event.pageX - railRectInfo.left) / railRectInfo.width) * 100;
    let isHdTwoActivated =
      Math.abs(parseFloat(hdOneInfo.left) - mousePst) >
      Math.abs(parseFloat(hdTwoInfo.left) - mousePst);
    if (isSingleHandle || isHdTwoActivated) {
      fixHdObject = hdOneOj;
      activatedHdObject = hdTwoOj;
      return;
    }
    fixHdObject = hdTwoOj;
    activatedHdObject = hdOneOj;
  };

  const calcTkStartPst = (pstOne, pstTwo) => {
    return parseFloat(pstOne) < parseFloat(pstTwo) ? pstOne : pstTwo;
  };

  const calcPstVal = (event) => {
    let val =
      ((event.pageX - railRectInfo.left) / railRectInfo.width) * props.max;
    let steps = ((val - props.min) / props.step).toFixed(0);
    val = parseInt(steps) * props.step + props.min;
    val = val > props.max ? props.max : val;
    val = val < props.min ? props.min : val;

    let position = val == props.min ? 0 : val / props.max;
    position = (position * 100).toFixed(2);
    position += "%";
    return { position, val };
  };

  const calcValues = (val1, val2) => {
    return val1 < val2 ? [val1, val2] : [val2, val1];
  };

  let fixHdObject = null;

  let activatedHdObject = null;

  const isSingleHandle = !Array.isArray(props.defaultValue);

  let railRectInfo = null;

  const rail = useRef(null);

  const [values, setValues] = useState(
    !isSingleHandle ? props.defaultValue : [props.min, props.defaultValue]
  );

  let hdOneOj = null;
  let hdTwoOj = null;

  let [hdOneInfo, setHdOneInfo] = (hdOneOj = useState(initHdInfo(values[0])));

  let [hdTwoInfo, setHdTwoInfo] = (hdTwoOj = useState(initHdInfo(values[1])));

  const [trackWidth, setTrailWidth] = useState(
    calcTrackWidth(hdOneInfo.left, hdTwoInfo.left)
  );
  const [trackStartPosition, setTrackStartPosition] = useState(hdOneInfo.left);

  const wrapperClasses = useClassNames();

  const onMouseDown = (event) => {
    if (!props.disable) {
      railRectInfo = rail.current.getBoundingClientRect();
      calcActionInfo(event);
      action(event, true);
      wrapperClasses.change(
        "seaui-slider-wrapper",
        props.color,
        "seaui-slider-activated",
        { "seaui-disable": props.disable }
      );
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }
  };

  const onMouseUp = (event) => {
    if (!props.disable) {
      wrapperClasses.change("seaui-slider-wrapper", props.color);
      action(event, false);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }
  };

  const onMouseMove = (event) => {
    action(event, true);
  };

  const action = (event, activated) => {
    let { position, val } = calcPstVal(event);
    setValues(calcValues(val, fixHdObject[0].value));
    setTrailWidth(calcTrackWidth(fixHdObject[0].left, position));
    setTrackStartPosition(calcTkStartPst(fixHdObject[0].left, position));
    activatedHdObject[1]({
      value: val,
      left: position,
      top: position,
      activated,
    });
  };

  useEffect(() => {
    wrapperClasses.change("seaui-slider-wrapper", props.color, {
      "seaui-disable": props.disable,
    });
  }, [props.color, props.disable]);

  return (
    <div className={wrapperClasses.classes} onMouseDown={onMouseDown}>
      <div ref={rail} className="seaui-slider-rail"></div>
      <div
        className="seaui-slider-track"
        style={{
          left: trackStartPosition,
          width: trackWidth,
        }}
      ></div>
      {!isSingleHandle && (
        <Handle
          left={hdOneInfo.left}
          top={hdOneInfo.top}
          horizontal={props.horizontal}
          activated={hdOneInfo.activated}
          value={hdOneInfo.value}
        ></Handle>
      )}
      <Handle
        left={hdTwoInfo.left}
        top={hdTwoInfo.top}
        activated={hdTwoInfo.activated}
        horizontal={props.horizontal}
        value={hdTwoInfo.value}
      ></Handle>
    </div>
  );
}

Slider.propTypes = {
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  max: PropTypes.number,
  min: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.string,
  disable: PropTypes.bool,
  onChange: PropTypes.func,
  step: PropTypes.number,
  horizontal: PropTypes.bool,
};
Slider.defaultProps = {
  defaultValue: [20, 80],
  max: 100,
  min: 0,
  color: SeaUIColor.red,
  size: SeaUISize.Small,
  disable: true,
  onChange: null,
  step: 1,
  horizontal: true,
};
export { Slider };
