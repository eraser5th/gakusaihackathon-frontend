import { SVGColor } from ".";
import { ReactComponent as Black } from "./SoundBlack.svg";
import { ReactComponent as Gray } from "./SoundGray.svg";
import { ReactComponent as White } from "./SoundWhite.svg";

export const Sound: React.FC<{
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
