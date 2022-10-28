import { SVGColor } from ".";
import { ReactComponent as Black } from "./GraphBlack.svg";
import { ReactComponent as Gray } from "./GraphGray.svg";
import { ReactComponent as White } from "./GraphWhite.svg";

export const Graph: React.FC<{
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