import "./App.css";
import { SeaButton, SeaUIBtnType } from "./button/button";
import { SeaUIColor } from "./base/SeaUIBase";
import { SeaRadio } from "./radio/radio";
function App() {
  var handleClick = function (e) {
    console.log(this);
    console.log("i am at the parent class");
  };

  return (
    <div className="App">
      <SeaButton
        text="查 询"
        color={SeaUIColor.bule}
        type={SeaUIBtnType.textBtn}
        onclick={handleClick}
        customClass="sdfdsfdsf"
        icon="fa-star"
      />
      <div style={{ marginTop: "50px" }}>
        <SeaRadio></SeaRadio>
      </div>
    </div>
  );
}

export default App;
