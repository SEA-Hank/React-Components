import { SeaUIColor, Input, Button, Select } from "../_util";
function InputPage() {
  let style = {
    padding: "20px 5px",
    "font-family": "system-ui",
    "font-style": "italic",
  };
  return (
    <div>
      <div style={{ padding: "5px" }}>
        <p style={style}>1. default input</p>
        <Input />
      </div>
      <div style={{ padding: "5px" }}>
        <p style={style}>2. input with left text</p>
        <Input addonBefore="CITY" />
      </div>
      <div style={{ padding: "5px" }}>
        <p style={style}>2. input with right button</p>
        <Input addonAfter={<Button text="Search" />} />
      </div>
      <div style={{ padding: "5px" }}>
        <p style={style}>3. input with left select and right button</p>
        <Input
          addonBefore={
            <Select defaultValue="3" color={SeaUIColor.blue}>
              <Select.Option value="" text="select one" />
              <Select.Option value="1" text="Seatle" />
              <Select.Option value="2" text="Renton" />
              <Select.Option value="3" text="Bellevue" />
            </Select>
          }
          addonAfter={<Button text="Search" />}
        />
      </div>
      <div style={{ padding: "5px" }}>
        <p style={style}>
          4. input with the number format ###-####-####, the format is editable
        </p>
        <Input.Number numberFormat="###-####-####" />
      </div>
      <div style={{ padding: "5px" }}>
        <p style={style}>5.Curreny input</p>
        <Input.Curreny />
      </div>
      <div style={{ padding: "5px" }}>
        <p style={style}>5.Password input</p>
        <Input.Password />
      </div>
    </div>
  );
}
export { InputPage };
