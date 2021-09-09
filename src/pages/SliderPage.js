import { SeaUIColor, SeaUISize, Slider } from "../_util";
function SliderPage() {
  let style = {
    padding: "20px 5px",
    "font-family": "system-ui",
    "font-style": "italic",
  };
  return (
    <div className="cb-wrapper">
      <div style={{ padding: "5px" }}>
        <p style={style}>1. default Slider</p>
        <Slider />
      </div>
      <div style={{ padding: "5px" }}>
        <p style={style}>2. Blue color Slider</p>
        <Slider color={SeaUIColor.blue} />
      </div>
      <div style={{ padding: "5px" }}>
        <p style={style}>3. Single handle Slider</p>
        <Slider color={SeaUIColor.blue} defaultValue={20} />
      </div>
      <div style={{ padding: "5px" }}>
        <p style={style}>3. Single handle Slider with step is 10</p>
        <Slider color={SeaUIColor.blue} step={10} defaultValue={20} />
      </div>
    </div>
  );
}
export { SliderPage };
