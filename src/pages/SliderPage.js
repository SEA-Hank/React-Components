import { SeaUIColor, SeaUISize, Slider } from "../_util";
function SliderPage() {
  return (
    <div className="cb-wrapper">
      <div style={{ padding: "5px" }}>
        <Slider />
      </div>
      <div style={{ padding: "5px" }}>
        <Slider color={SeaUIColor.blue} />
      </div>
      <div style={{ padding: "5px" }}>
        <Slider color={SeaUIColor.blue} defaultValue={20} />
      </div>
      <div style={{ padding: "5px" }}>
        <Slider color={SeaUIColor.blue} step={5} defaultValue={20} />
      </div>
    </div>
  );
}
export { SliderPage };
