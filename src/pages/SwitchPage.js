import {
  SeaUIColor,
  SeaUISize,
  //Radio,
  //CheckBox,
  //Select,
  // Input,
  Switch,
  // Rate,
  // Slider,
  // Tooltip,
} from "../_util";
function SwitchPage() {
  return (
    <div className="cb-wrapper">
      <div style={{ padding: "5px" }}>
        <Switch />
      </div>
      <div style={{ padding: "5px" }}>
        <Switch checkedText="1" unCheckText="0" defaultChecked={false} />
      </div>
      <div style={{ padding: "5px" }}>
        <Switch
          size={SeaUISize.Medium}
          color={SeaUIColor.blue}
          defaultChecked={true}
        />
      </div>
      <div style={{ padding: "5px" }}>
        <Switch
          size={SeaUISize.Medium}
          color={SeaUIColor.blue}
          defaultChecked={true}
          disable={true}
        />
      </div>
    </div>
  );
}
export { SwitchPage };
