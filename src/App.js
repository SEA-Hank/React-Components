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
      <div style={{ marginTop: "50px" }}>
        <Button
          text="查 询"
          color={SeaUIColor.blue}
          type={Button.BtnType.leftIconBtn}
          onclick={handleClick}
          icon="fa-star"
          key="0"
          disable={true}
          size={SeaUISize.Small}
        />
        <Button
          text="查 询"
          color={SeaUIColor.blue}
          type={Button.BtnType.iconBtn}
          onclick={handleClick}
          icon="fa-star"
          key="0"
          disable={true}
          size={SeaUISize.Medium}
        />
      </div>
      <div style={{ marginTop: "50px" }}>
        <Radio data={testdata} color={SeaUIColor.grey} key="1">
          <Radio.ButtonOption
            text="佛山"
            value="佛山"
            key="1"
          ></Radio.ButtonOption>
          <Radio.ButtonOption
            text="广州"
            value="广州"
            key="2"
          ></Radio.ButtonOption>
        </Radio>
      </div>
      <div style={{ marginTop: "50px" }}>
        <Radio
          key="2"
          options={testdata}
          color={SeaUIColor.red}
          optionType={Radio.OptionType.defalut}
          size={SeaUISize.Small}
          defaultValue="03"
          disable={true}
        ></Radio>
      </div>
      <div id="dfdfdfdf" style={{ marginTop: "50px" }}>
        <CheckBox
          key="3"
          options={testdata2}
          color={SeaUIColor.blue}
          defaultValue={["001"]}
          size={SeaUISize.Small}
          disable={true}
        ></CheckBox>
      </div>
      <div id="dfdfdfdf" style={{ marginTop: "50px" }}>
        <CheckBox
          key="99"
          color={SeaUIColor.blue}
          defaultValue={["001"]}
          size={SeaUISize.Small}
        >
          <CheckBox.Option text="测试" value="001" disable={true} />
          <CheckBox.Option text="测试2" value="002" />
          <CheckBox.Option text="测试3" value="003" />
        </CheckBox>
      </div>
      <div style={{ marginTop: "50px" }}>
        <Select
          options={testdata4}
          defaultValue={"001"}
          color={SeaUIColor.red}
        ></Select>
      </div>
      <div style={{ marginTop: "50px" }}>
        <Input
          data={testdata3}
          addonBefore="http://"
          color={SeaUIColor.red}
          addonAfter={after}
          disable={false}
          defaultValue={"test"}
        ></Input>
      </div>
      <div style={{ marginTop: "50px" }}>
        <Input
          data={testdata3}
          addonBefore={after}
          color={SeaUIColor.green}
          addonAfter=".com"
          maxLength="5"
          showDelBtn={false}
        ></Input>
      </div>
      <div style={{ marginTop: "50px" }}>
        <Input.Number
          addonBefore="Number :"
          numberFormat="(###)###-####"
        ></Input.Number>
      </div>
      <div style={{ marginTop: "50px" }}>
        <Input.Curreny addonBefore="Curreny :"></Input.Curreny>
      </div>
      <div style={{ marginTop: "50px" }}>
        <Input.Password
          addonAfter={
            <Button
              text="查 询"
              color={SeaUIColor.blue}
              type={Button.BtnType.leftIconBtn}
              onclick={handleClick}
              customClass="sdfdsfdsf"
              icon="fa-star"
              key="0"
            />
          }
        ></Input.Password>
      </div>
      <div style={{ marginTop: "50px" }}>
        <Switch kk="111"></Switch>
      </div>
    </div>
  );
}

export default App;
