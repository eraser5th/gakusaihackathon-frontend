import { SVGColor } from ".";
import { ReactComponent as Black } from "./NoteBlack.svg";
import { ReactComponent as Gray } from "./NoteGray.svg";
import { ReactComponent as White } from "./NoteWhite.svg";

export const Note: React.FC<{
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