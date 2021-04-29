import "./slider.scss";
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { SeaUIColor, SeaUISize } from "../_util/SeaUIBase";
import { useClassNames } from "../_util/hooks/useClassNames";
function Slider(props) {
  let calculateHandlePosiiton = (isfirsthandle, value) => {
    if (isfirsthandle && value == props.min) {
      return "0%";
    }
    return ((value / props.max) * 100).toFixed(2) + "%";
  };

  let calculateTrackWidth = (first_handle_position, second_handle_position) => {
    return (
      Math.abs(
        parseFloat(second_handle_position) - parseFloat(first_handle_position)
      ) + "%"
    );
  };

  let first_handle_element = null;
  const isSingleHandle = !Array.isArray(props.defaultValue);

  const [values, setValues] = useState(
    !isSingleHandle ? props.defaultValue : [props.min, props.defaultValue]
  );

  const [first_handle_position, set_first_handle_position] = useState(
    calculateHandlePosiiton(true, values[0])
  );
  const [second_handle_position, set_second_handle_position] = useState(
    calculateHandlePosiiton(false, values[1])
  );
  const [track_width, set_trail_width] = useState(
    calculateTrackWidth(first_handle_position, second_handle_position)
  );
  const [track_left_position, set_track_left_position] = useState(
    first_handle_position
  );

  let railRectInfo = null;
  const rail = useRef(null);

  const wrapperClasses = useClassNames();

  if (!isSingleHandle) {
    first_handle_element = (
      <div
        className="seaui-slider-handle"
        style={{ left: first_handle_position }}
      ></div>
    );
  }

  let is_second_handle_action = null;
  const detect_action_handle = (event) => {
    if (isSingleHandle) {
      is_second_handle_action = true;
      return;
    }
    let position =
      ((event.pageX - railRectInfo.left) / railRectInfo.width) * 100;
    is_second_handle_action =
      Math.abs(parseFloat(first_handle_position) - position) >
      Math.abs(parseFloat(second_handle_position) - position);
  };

  const calculateTrackLeftPosition = (firstPosition, secondPosition) => {
    return parseFloat(firstPosition) < parseFloat(secondPosition)
      ? firstPosition
      : secondPosition;
  };

  const onMouseDown = (event) => {
    if (!props.disable) {
      railRectInfo = rail.current.getBoundingClientRect();
      detect_action_handle(event);
      onMouseMove(event);
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
    let { position, val } = getPosition(event);
    if (is_second_handle_action) {
      set_second_handle_position(position);
      set_trail_width(calculateTrackWidth(first_handle_position, position));
      setValues(
        [values[0], val].sort((a, b) => {
          return a - b;
        })
      );
      set_track_left_position(
        calculateTrackLeftPosition(first_handle_position, position)
      );
      return;
    }
    set_first_handle_position(position);
    set_trail_width(calculateTrackWidth(position, second_handle_position));
    setValues(
      [val, values[1]].sort((a, b) => {
        return a - b;
      })
    );
    set_track_left_position(
      calculateTrackLeftPosition(position, second_handle_position)
    );
  };

  const getPosition = (event) => {
    let val =
      ((event.pageX - railRectInfo.left) / railRectInfo.width) * props.max;
    let steps = ((val - props.min) / props.step).toFixed(0);
    val = parseInt(steps) * props.step + props.min;
    val = val > props.max ? props.max : val;
    val = val < props.min ? props.min : val;

    let position =
      val == props.min ? 0 : val == props.max ? 1 : val / props.max;
    // let position = (event.pageX - railRectInfo.left) / railRectInfo.width;
    position = position > 1 ? 1 : position;
    position = position < 0 ? 0 : position;
    position = (position * 100).toFixed(2);
    position += "%";
    return { position, val };
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
          left: track_left_position,
          width: track_width,
        }}
      ></div>
      {first_handle_element}
      <div
        className="seaui-slider-handle"
        style={{ left: second_handle_position }}
      ></div>
      <div className="seaui-slider-event-mask" onMouseDown={onMouseDown}></div>
      <div>
        {values[0]} -- {values[1]}
      </div>
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
};
export { Slider };
