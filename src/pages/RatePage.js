import { SeaUIColor, Rate, SeaUISize } from "../_util";
function RatePage() {
  let style = {
    padding: "20px 5px",
    "font-family": "system-ui",
    "font-style": "italic",
  };
  return (
    <div>
      <div style={{ padding: "5px" }}>
        <p style={style}>1. default rate</p>
        <Rate />
      </div>
      <div style={{ padding: "5px" }}>
        <p style={style}>
          2. default rate with default value 4 and yellow color
        </p>
        <Rate color={SeaUIColor.yellow} defaultValue={4} />
      </div>
    </div>
  );
}
export { RatePage };
