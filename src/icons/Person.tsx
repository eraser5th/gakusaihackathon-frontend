import { SVGColor } from ".";
import { ReactComponent as White } from "./PersonWhite.svg";
import { ReactComponent as Gray } from "./PersonGray.svg";
import { ReactComponent as Black } from "./PersonBlack.svg";

export const Person: React.FC<{
  color?: SVGColor;
}> = ({ color = "black" }) => {
  switch (color) {
    case SVGColor.black:
      return <Black />;
    case SVGColor.gray:
      return <Gray />;
    default:
      return <White />;
  }
};
