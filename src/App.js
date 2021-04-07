import React, { useRef } from "react";
import "./App.css";
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
} from "./_util";
function App() {
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

  const refContainer = React.createRef();

  let after = (
    <Select
      options={testdata4}
      defaultValue={"001"}
      color={SeaUIColor.red}
      size={SeaUISize.Small}
    ></Select>
  );
  return (
    <div className="App">
      <Radio
        key="2"
        options={testdata}
        color={SeaUIColor.red}
        optionType={Radio.OptionType.defalut}
        size={SeaUISize.Small}
        defaultValue="03"
        disable={false}
      ></Radio>
      <Rate></Rate>
    </div>
  );
}

export default App;
