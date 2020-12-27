import logo from "./logo.svg";
import "./App.css";
import { SeaButton, SeaUIBtnColor, SeaUIBtnStyle } from "./button/button";
function App() {
  var handleClick = function (e) {
    console.log("i am at the parent class");
  };

  return (
    <div className="App">
      <SeaButton
        text="查 询"
        color={SeaUIBtnColor.bule}
        onclick={handleClick}
        type={SeaUIBtnStyle.textBtn}
        customClass=""
      />
    </div>
  );
}

export default App;
