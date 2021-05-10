import React, { useRef, useState } from "react";
// import "./App.css";
import {
  Button,
  SeaUIColor,
  Radio,
  CheckBox,
  Select,
  Input,
  Switch,
  Rate,
  SeaUISize,
  Slider,
  Tooltip,
} from "./_util";
function App() {
  const [seaui_disable, set_seaui_disable] = useState(false);
  const [seaui_color, set_seaui_color] = useState(SeaUIColor.blue);
  let testdata = [
    { text: "北京", value: "01", disable: false },
    { text: "广州", value: "02", disable: false },
    { text: "上海", value: "03", disable: true },
  ];

  let testdata2 = [
    { text: "北京", value: "001", selected: true },
    { text: "广州", value: "002", selected: false },
    { text: "上海", value: "003" },
  ];

  let testdata3 = [
    { text: "北京", value: "001", selected: true },
    { text: "广州", value: "002", selected: false },
    { text: "上海", value: "003" },
  ];
  let testdata4 = [
    { text: "北京北京北京北京北京", value: "001", selected: true },
    { text: "广州", value: "002", selected: false },
    { text: "上海", value: "003", disable: true },
  ];

  var handleClick = function (e) {
    console.log("i am at the parent class");
    console.log(refContainer);
  };
  let onClick = () => {
    set_seaui_color(seaui_disable ? SeaUIColor.blue : SeaUIColor.red);
    set_seaui_disable(!seaui_disable);
  };

  const refContainer = React.createRef();

  let after = (
    <Select
      options={testdata4}
      defaultValue={"001"}
      color={SeaUIColor.red}
      size={SeaUISize.Small}
    ></Select>
  );
  const inputEl = useRef(null);
  return (
    <div className="App">
      {/* <Rate></Rate> */}
      <div style={{ position: "relative", top: "100px", left: "100px" }}>
        <Slider disable={seaui_disable} color={seaui_color}></Slider>
      </div>
    </div>
  );
}

export default App;
