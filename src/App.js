import "./App.css";
import { Button, BtnType, SeaUIColor } from "./button";
import { Radio, RadioItemType } from "./radio/";
import { CheckBox } from "./checkbox";
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

  var handleClick = function (e) {
    console.log(this);
    console.log("i am at the parent class");
  };

  return (
    <div className="App">
      <Button
        text="查 询"
        color={SeaUIColor.bule}
        type={BtnType.leftIconBtn}
        onclick={handleClick}
        customClass="sdfdsfdsf"
        icon="fa-star"
        key="0"
      />
      <div style={{ marginTop: "50px" }}>
        <Radio
          data={testdata}
          // color={SeaUIColor.red}
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
        <CheckBox key="3" data={testdata2} color={SeaUIColor.red}></CheckBox>
      </div>
    </div>
  );
}

export default App;
