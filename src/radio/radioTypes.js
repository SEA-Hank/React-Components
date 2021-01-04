import { default as cd } from "../selectItems/circleDot";
import { default as rct } from "../selectItems/rectangle";

export const RadioItemType = {
  rectangle: "rectangle",
  circleDot: "circleDot",
};

export { SeaUIType, SeaUIColor } from "../base/types";

export class RadioItem {
  static CircleDot = cd;
  static Rectangle = rct;
}
