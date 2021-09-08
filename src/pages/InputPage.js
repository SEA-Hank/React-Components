import { SeaUIColor, SeaUISize, Input, Button, Select } from "../_util";
function InputPage() {
  return (
    <div className="cb-wrapper">
      <div style={{ padding: "5px" }}>
        <Input />
      </div>
      <div style={{ padding: "5px" }}>
        <Input addonBefore="CITY" />
      </div>
      <div style={{ padding: "5px" }}>
        <Input addonAfter={<Button text="Search" />} />
      </div>
      <div style={{ padding: "5px" }}>
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
        <Input.Number numberFormat="###-####-####" />
      </div>
      <div style={{ padding: "5px" }}>
        <Input.Curreny />
      </div>
      <div style={{ padding: "5px" }}>
        <Input.Password />
      </div>
    </div>
  );
}
export { InputPage };
