import { SeaUIColor, SeaUISize, Switch } from "../_util";
function SwitchPage() {
  let style = {
    padding: "20px 5px",
    "font-family": "system-ui",
    "font-style": "italic",
  };
  return (
    <div>
      <div style={{ padding: "5px" }}>
        <p style={style}>1. default Switch</p>
        <Switch />
      </div>
      <div style={{ padding: "5px" }}>
        <p style={style}>
          2. Switch with others checked text and unchecked text
        </p>
        <Switch checkedText="1" unCheckText="0" defaultChecked={false} />
      </div>
      <div style={{ padding: "5px" }}>
        <p style={style}>3. differece size of Switch</p>
        <Switch
          size={SeaUISize.Medium}
          color={SeaUIColor.blue}
          defaultChecked={true}
        />
      </div>
      <div style={{ padding: "5px" }}>
        <p style={style}>4. Switch is disabled </p>
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
