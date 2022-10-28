import { SVGColor } from ".";
import { ReactComponent as Black } from "./HandshakeBlack.svg";
import { ReactComponent as Gray } from "./HandshakeGray.svg";
import { ReactComponent as White } from "./HandshakeWhite.svg";

export const Handshake: React.FC<{
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
