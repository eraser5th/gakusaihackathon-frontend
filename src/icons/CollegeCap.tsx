import { SVGColor } from ".";
import { ReactComponent as Black } from "./CollegeCapBlack.svg";
import { ReactComponent as Gray } from "./CollegeCapGray.svg";
import { ReactComponent as White } from "./CollegeCapWhite.svg";

export const CollegeCap: React.FC<{
  color?: SVGColor;
}> = ({color = "black"}) => {
  switch (color) {
    case SVGColor.black:
      return <Black />;
    case SVGColor.gray:
      return <Gray />;
    default:
      return <White />;
  }
}