import { SVGColor } from ".";
import { ReactComponent as White } from "./CalendarWhite.svg"
import { ReactComponent as Gray } from "./CalendarGray.svg"
import { ReactComponent as Black } from "./CalendarBlack.svg"

export const Calendar: React.FC<{
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