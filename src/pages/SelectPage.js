import { SeaUIColor, SeaUISize, Select } from "../_util";
function SelectPage() {
  let style = {
    padding: "20px 5px",
    "font-family": "system-ui",
    "font-style": "italic",
  };
  return (
    <div className="cb-wrapper">
      <div style={{ padding: "5px" }}>
        <p style={style}>1. default select</p>
        <Select width="250px">
          <Select.Option value="" text="select one" />
          <Select.Option value="1" text="Seatle" />
          <Select.Option value="2" text="Renton" />
          <Select.Option value="3" text="Bellevue" />
        </Select>
      </div>
      <div style={{ padding: "5px" }}>
        <p style={style}>2. default select with default value</p>
        <Select defaultValue="2" width="250px" color={SeaUIColor.orange}>
          <Select.Option value="" text="select one" />
          <Select.Option value="1" text="Seatle" />
          <Select.Option value="2" text="Renton" />
          <Select.Option value="3" text="Bellevue" />
        </Select>
      </div>
      <div style={{ padding: "5px" }}>
        <p style={style}>
          3. default select with default value in other color, and one of option
          is disabled
        </p>
        <Select defaultValue="2" width="250px" color={SeaUIColor.orange}>
          <Select.Option value="" text="select one" />
          <Select.Option value="1" text="Seatle" />
          <Select.Option value="2" text="Renton" />
          <Select.Option value="3" text="Bellevue" disable={true} />
        </Select>
      </div>
      <div style={{ padding: "5px" }}>
        <p style={style}>4. mediun size select</p>
        <Select
          defaultValue="3"
          width="250px"
          color={SeaUIColor.green}
          size={SeaUISize.Medium}
        >
          <Select.Option value="" text="select one" />
          <Select.Option value="1" text="Seatle" />
          <Select.Option value="2" text="Renton" />
          <Select.Option value="3" text="Bellevue" />
        </Select>
      </div>
      <div style={{ padding: "5px" }}>
        <p style={style}>5. large size select</p>
        <Select
          defaultValue="3"
          width="250px"
          color={SeaUIColor.red}
          size={SeaUISize.Large}
        >
          <Select.Option value="" text="select one" />
          <Select.Option value="1" text="Seatle" />
          <Select.Option value="2" text="Renton" />
          <Select.Option value="3" text="Bellevue" />
        </Select>
      </div>
    </div>
  );
}
export { SelectPage };
