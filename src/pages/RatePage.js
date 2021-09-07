import {
  SeaUIColor,
  SeaUISize,
  //Radio,
  //CheckBox,
  //Select,
  // Input,
  //Switch,
  Rate,
  // Slider,
  // Tooltip,
} from "../_util";
function RatePage() {
  return (
    <div className="cb-wrapper">
      <div style={{ padding: "5px" }}>
        <Rate />
      </div>
      <div style={{ padding: "5px" }}>
        <Rate color={SeaUIColor.yellow} defaultValue="4" />
      </div>
      <div style={{ padding: "5px" }}></div>
      <div style={{ padding: "5px" }}></div>
    </div>
  );
}
export { RatePage };
