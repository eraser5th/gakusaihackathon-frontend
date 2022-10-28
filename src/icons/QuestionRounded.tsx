import { SVGColor } from ".";
import { ReactComponent as White } from "./QuestionRoundedWhite.svg";
import { ReactComponent as Gray } from "./QuestionRoundedGray.svg";
import { ReactComponent as Black } from "./QuestionRoundedBlack.svg";

export const QuestionRounded: React.FC<{
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
