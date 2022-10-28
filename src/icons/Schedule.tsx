import { SVGColor } from ".";
import { ReactComponent as Black } from "./ScheduleBlack.svg";
import { ReactComponent as Gray } from "./ScheduleGray.svg";
import { ReactComponent as White } from "./ScheduleWhite.svg";

export const Schedule: React.FC<{
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
