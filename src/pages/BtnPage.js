import { Button, SeaUIColor, SeaUISize } from "../_util";
import "./BtnPage.scss";
function BtnPage() {
  return (
    <div className="component-wrapper">
      <p>1. default buttons with various color</p>
      <div className="default-btn-wrapper">
        <Button text="Button"></Button>
        <Button text="Button" color={SeaUIColor.red}></Button>
        <Button text="Button" color={SeaUIColor.yellow}></Button>
        <Button text="Button" color={SeaUIColor.green}></Button>
        <Button text="Button" color={SeaUIColor.orange}></Button>
        <Button text="Button" color={SeaUIColor.grey}></Button>
      </div>
      <p>2. different sizes of buttons</p>
      <div className="btn-size-wrapper">
        <Button text="Small" size={SeaUISize.Small}></Button>
        <Button
          text="Medium"
          size={SeaUISize.Medium}
          color={SeaUIColor.red}
        ></Button>
        <Button
          text="Large"
          size={SeaUISize.Large}
          color={SeaUIColor.yellow}
        ></Button>
      </div>
      <p>3. icon buttons</p>
      <div className="icon-btn-wrapper">
        <Button type={Button.BtnType.iconBtn} icon="fa-bell"></Button>
        <Button
          type={Button.BtnType.iconBtn}
          size={SeaUISize.Medium}
          color={SeaUIColor.red}
          icon="fa-bold"
        ></Button>
        <Button
          type={Button.BtnType.iconBtn}
          color={SeaUIColor.green}
          size={SeaUISize.Large}
          icon="fa-bug"
        ></Button>
      </div>
      <p>4. default buttons with icon</p>
      <div className="icon-text-btn-wrapper">
        <Button
          type={Button.BtnType.leftIconBtn}
          icon="fa-search"
          text="Button"
        ></Button>
        <Button
          type={Button.BtnType.rightIconBtn}
          icon="fa-search"
          text="Button"
        ></Button>
      </div>
    </div>
  );
}
export { BtnPage };
