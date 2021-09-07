import {
  SeaUIColor,
  SeaUISize,
  //Radio,
  //CheckBox,
  Select,
  // Input,
  // Switch,
  // Rate,
  // Slider,
  // Tooltip,
} from "../_util";
function SelectPage() {
  return (
    <div className="cb-wrapper">
      <div style={{ padding: "5px" }}>
        <Select width="250px">
          <Select.Option value="" text="select one" />
          <Select.Option value="1" text="Seatle" />
          <Select.Option value="2" text="Renton" />
          <Select.Option value="3" text="Bellevue" />
        </Select>
      </div>
      <div style={{ padding: "5px" }}>
        <Select defaultValue="2" width="250px" color={SeaUIColor.orange}>
          <Select.Option value="" text="select one" />
          <Select.Option value="1" text="Seatle" />
          <Select.Option value="2" text="Renton" />
          <Select.Option value="3" text="Bellevue" />
        </Select>
      </div>
      <div style={{ padding: "5px" }}>
        <Select
          defaultValue="3"
          width="250px"
          disable={true}
          color={SeaUIColor.orange}
        >
          <Select.Option value="" text="select one" />
          <Select.Option value="1" text="Seatle" />
          <Select.Option value="2" text="Renton" />
          <Select.Option value="3" text="Bellevue" />
        </Select>
      </div>
      <div style={{ padding: "5px" }}>
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
