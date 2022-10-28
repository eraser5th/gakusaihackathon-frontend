import { SVGColor } from ".";
import { ReactComponent as Black } from "./TodoListBlack.svg";
import { ReactComponent as Gray } from "./TodoListGray.svg";
import { ReactComponent as White } from "./TodoListWhite.svg";

export const TodoList: React.FC<{
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