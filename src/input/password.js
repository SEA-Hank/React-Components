import { Input } from "./input";
import { SeaUIType } from "../_util/types";
import { SeaUIBase } from "../_util/SeaUIBase";
export class Password extends SeaUIBase {
  constructor(props) {
    super(props, SeaUIType.PASSWORD);
    this.openEyes = { btnLogo: "fa-eye-slash", inputHtmlType: "text" };
    this.closeEyes = { btnLogo: "fa-eye", inputHtmlType: "password" };
    this.state = this.openEyes;
  }

  onBtnClick = () => {
    if (this.state.inputHtmlType === "text") {
      this.setState(this.closeEyes);
    } else {
      this.setState(this.openEyes);
    }
  };

  render() {
    let inputAtrrs = {
      btnOnClick: this.onBtnClick,
      btnLogo: this.state.btnLogo,
      inputHtmlType: this.state.inputHtmlType,
    };
    return <Input {...this.props} {...inputAtrrs}></Input>;
  }
}

Password.propTypes = {
  ...Input.propTypes,
};

Password.defaultProps = {
  ...Input.defaultProps,
};
