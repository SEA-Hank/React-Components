import "./App.css";
import { SeaButton, BtnType, SeaUIColor } from "./button";
import { SeaRadio, RadioItemType } from "./radio/";
function App() {
  let testdata = [
    { text: "北京", value: "01", selected: true },
    { text: "广州", value: "02", selected: false },
    { text: "上海", value: "03" },
  ];

  var handleClick = function (e) {
    console.log(this);
    console.log("i am at the parent class");
  };

  return (
    <div className="App">
      <SeaButton
        text="查 询"
        color={SeaUIColor.bule}
        type={BtnType.leftIconBtn}
        onclick={handleClick}
        customClass="sdfdsfdsf"
        icon="fa-star"
      />
      <div style={{ marginTop: "50px" }}>
        <SeaRadio
          data={testdata}
          color={SeaUIColor.red}
          itemType={RadioItemType.rectangle}
        ></SeaRadio>
      </div>
      <div style={{ marginTop: "50px" }}>
        <SeaRadio
          data={testdata}
          color={SeaUIColor.red}
          itemType={RadioItemType.circleDot}
        ></SeaRadio>
      </div>
    </div>
  );
}

export default App;
