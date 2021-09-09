import { SeaUIColor, SeaUISize, Radio } from "../_util";
function RadioPage() {
  let style = {
    padding: "20px 5px",
    "font-family": "system-ui",
    "font-style": "italic",
  };
  return (
    <div>
      <div style={{ padding: "5px" }}>
        <p style={style}>1. default radio</p>
        <Radio defaultValue="1">
          <Radio.Option value="1" text="Seattle" />
          <Radio.Option value="2" text="Bellevue" />
          <Radio.Option value="3" text="Renton" />
        </Radio>
      </div>
      <div style={{ padding: "5px" }}>
        <p style={style}>
          2. default radio with other size, color and some of otions are
          disabled
        </p>
        <Radio defaultValue="1" size={SeaUISize.Medium} color={SeaUIColor.red}>
          <Radio.Option value="1" text="Seattle" />
          <Radio.Option value="2" text="Bellevue" />
          <Radio.Option value="3" text="Renton" disable={true} />
        </Radio>
      </div>
      <div style={{ padding: "5px" }}>
        <p style={style}>3. radio is disabled</p>
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
        <p style={style}>4. the second radio option style</p>
        <Radio defaultValue="1">
          <Radio.ButtonOption value="1" text="Seattle" />
          <Radio.ButtonOption value="2" text="Bellevue" />
          <Radio.ButtonOption value="3" text="Renton" />
        </Radio>
      </div>
      <div style={{ padding: "5px" }}>
        <p style={style}>4. the second radio option style in other size</p>
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
