import "./App.css";
import {
  Button,
  SeaUIColor,
  Radio,
  RadioItemType,
  CheckBox,
  Select,
  Input,
} from "./_util";
function App() {
  let testdata = [
    { text: "北京", value: "01", selected: true },
    { text: "广州", value: "02", selected: false },
    { text: "上海", value: "03" },
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

  var handleClick = function (e) {
    console.log(this);
    console.log("i am at the parent class");
  };
  let after = <Select data={testdata3} color={SeaUIColor.red}></Select>;
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
        />
        <Button
          text="查 询"
          color={SeaUIColor.blue}
          type={Button.BtnType.iconBtn}
          onclick={handleClick}
          icon="fa-star"
          key="0"
        />
      </div>
      <div style={{ marginTop: "50px" }}>
        <Radio
          data={testdata}
          color={SeaUIColor.grey}
          itemType={RadioItemType.rectangle}
          key="1"
        ></Radio>
      </div>
      <div style={{ marginTop: "50px" }}>
        <Radio
          key="2"
          data={testdata}
          // color={SeaUIColor.red}
          itemType={RadioItemType.circleDot}
        ></Radio>
      </div>
      <div style={{ marginTop: "50px" }}>
        <CheckBox key="3" data={testdata2} color={SeaUIColor.orange}></CheckBox>
      </div>
      <div style={{ marginTop: "50px" }}>
        <Select data={testdata3} color={SeaUIColor.red}></Select>
      </div>
      <div style={{ marginTop: "50px" }}>
        <Input
          data={testdata3}
          addonBefore="http://"
          color={SeaUIColor.red}
          addonAfter={after}
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
    </div>
  );
}

export default App;
