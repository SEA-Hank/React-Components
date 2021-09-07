import {
  SeaUIColor,
  SeaUISize,
  Radio,
  //CheckBox,
  // Select,
  // Input,
  // Switch,
  // Rate,
  // Slider,
  // Tooltip,
} from "../_util";
function RadioPage() {
  return (
    <div className="cb-wrapper">
      <div style={{ padding: "5px" }}>
        <Radio defaultValue="1">
          <Radio.Option value="1" text="Seattle" />
          <Radio.Option value="2" text="Bellevue" />
          <Radio.Option value="3" text="Renton" />
        </Radio>
      </div>
      <div style={{ padding: "5px" }}>
        <Radio defaultValue="1" size={SeaUISize.Medium} color={SeaUIColor.red}>
          <Radio.Option value="1" text="Seattle" />
          <Radio.Option value="2" text="Bellevue" />
          <Radio.Option value="3" text="Renton" disable={true} />
        </Radio>
      </div>
      <div style={{ padding: "5px" }}>
        <Radio
          defaultValue="1"
          size={SeaUISize.Small}
          disable={true}
          color={SeaUIColor.red}
        >
          <Radio.Option value="1" text="Seattle" />
          <Radio.Option value="2" text="Bellevue" />
          <Radio.Option value="3" text="Renton" disable={true} />
        </Radio>
      </div>
      <div style={{ padding: "5px" }}>
        <Radio defaultValue="1">
          <Radio.ButtonOption value="1" text="Seattle" />
          <Radio.ButtonOption value="2" text="Bellevue" />
          <Radio.ButtonOption value="3" text="Renton" />
        </Radio>
      </div>
      <div style={{ padding: "5px" }}>
        <Radio defaultValue="1" size={SeaUISize.Medium}>
          <Radio.ButtonOption value="1" text="Seattle" />
          <Radio.ButtonOption value="2" text="Bellevue" />
          <Radio.ButtonOption value="3" text="Renton" />
        </Radio>
      </div>
    </div>
  );
}
export { RadioPage };
