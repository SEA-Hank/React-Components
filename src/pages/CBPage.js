import {
  SeaUIColor,
  SeaUISize,
  // Radio,
  CheckBox,
  // Select,
  // Input,
  // Switch,
  // Rate,
  // Slider,
  // Tooltip,
} from "../_util";
function CBPage() {
  return (
    <div className="cb-wrapper">
      <div style={{ padding: "5px" }}>
        <CheckBox defaultValue={["2"]}>
          <CheckBox.Option text="Seattle" value="1"></CheckBox.Option>
          <CheckBox.Option text="Renton" value="2"></CheckBox.Option>
          <CheckBox.Option text="Bellevue" value="3"></CheckBox.Option>
        </CheckBox>
      </div>
      <div style={{ padding: "5px" }}>
        <CheckBox defaultValue={["1"]} color={SeaUIColor.red}>
          <CheckBox.Option text="Seattle" value="1"></CheckBox.Option>
          <CheckBox.Option text="Renton" value="2"></CheckBox.Option>
          <CheckBox.Option text="Bellevue" value="3"></CheckBox.Option>
        </CheckBox>
      </div>
      <div style={{ padding: "5px" }}>
        <CheckBox defaultValue={["2"]} color={SeaUIColor.orange}>
          <CheckBox.Option text="Seattle" value="1"></CheckBox.Option>
          <CheckBox.Option text="Renton" value="2"></CheckBox.Option>
          <CheckBox.Option
            text="Bellevue"
            value="3"
            disable={true}
          ></CheckBox.Option>
        </CheckBox>
      </div>
      <div style={{ padding: "5px" }}>
        <CheckBox defaultValue={["2"]} disable={true} color={SeaUIColor.orange}>
          <CheckBox.Option text="Seattle" value="1"></CheckBox.Option>
          <CheckBox.Option text="Renton" value="2"></CheckBox.Option>
          <CheckBox.Option
            text="Bellevue"
            value="3"
            disable={true}
          ></CheckBox.Option>
        </CheckBox>
      </div>
    </div>
  );
}
export { CBPage };
