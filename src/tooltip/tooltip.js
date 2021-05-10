import "./tooltip.scss";
import { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { useClassNames } from "../_util/hooks/useClassNames";
import PropTypes from "prop-types";
let Tooltip = (props) => {
  const { classes, change } = useClassNames();
  const [left, setLeft] = useState();
  const [top, setTop] = useState();

  useEffect(() => {
    change("seaui-tooltip", { "seaui-tooltip-visible": props.visible });
    if (props.visible) {
      calcposition();
    }
  }, [props.visible, props.text]);

  let calcposition = () => {
    let rect = props.target.current.getBoundingClientRect();
    setTop(rect.top + "px");
    setLeft(rect.left + rect.width / 2 + "px");
  };

  return ReactDOM.createPortal(
    <div className={classes} style={{ left: left, top: top }}>
      <div className="seaui-tooltip-content">
        {props.text}
        <span className="seaui-tooltip-triangle"></span>
      </div>
    </div>,
    document.getElementsByTagName("body")[0]
  );
};

export { Tooltip };
