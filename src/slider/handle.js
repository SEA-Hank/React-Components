import { useState, useRef, useEffect } from "react";
import { useClassNames } from "../_util/hooks/useClassNames";
import { Tooltip } from "../tooltip";
function Handle(props) {
  const horizontalHdTop = "50%";
  const verticalHdLeft = "50%";

  const handleClasses = useClassNames();
  const tooltipTarget = useRef();
  const [hover, setHover] = useState(false);
  useEffect(() => {
    handleClasses.change({
      "seaui-slider-handle": true,
      "seaui-slider-handle-activated": props.activated || hover,
    });
  }, [props.activated, props.left, props.top, hover]);

  let mouseEvent = (event) => {
    setHover(event.type === "mouseenter");
  };

  return (
    <div
      ref={tooltipTarget}
      className={handleClasses.classes}
      onMouseEnter={mouseEvent}
      onMouseLeave={mouseEvent}
      style={{
        left: props.horizontal ? props.left : verticalHdLeft,
        top: props.horizontal ? horizontalHdTop : props.top,
      }}
    >
      <Tooltip
        text={props.value}
        target={tooltipTarget}
        visible={props.activated || hover}
      ></Tooltip>
    </div>
  );
}

export { Handle };
