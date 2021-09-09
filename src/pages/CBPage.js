import { SeaUIColor, CheckBox } from "../_util";
function CBPage() {
  let style = {
    padding: "20px 5px",
    "font-family": "system-ui",
    "font-style": "italic",
  };
  return (
    <div className="cb-wrapper">
      <div style={{ padding: "5px" }}>
        <p style={style}>1. default checkbox</p>
        <CheckBox defaultValue={["2"]}>
          <CheckBox.Option text="Seattle" value="1"></CheckBox.Option>
          <CheckBox.Option text="Renton" value="2"></CheckBox.Option>
          <CheckBox.Option text="Bellevue" value="3"></CheckBox.Option>
        </CheckBox>
      </div>
      <div style={{ padding: "5px" }}>
        <p style={style}>2. default checkbox in others color</p>
        <CheckBox defaultValue={["1"]} color={SeaUIColor.red}>
          <CheckBox.Option text="Seattle" value="1"></CheckBox.Option>
          <CheckBox.Option text="Renton" value="2"></CheckBox.Option>
          <CheckBox.Option text="Bellevue" value="3"></CheckBox.Option>
        </CheckBox>
      </div>
      <div style={{ padding: "5px" }}>
        <p style={style}>3. some of options are disabled</p>
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
        <p style={style}>4. the checkbox is disabled</p>
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
