import { SVGColor } from ".";
import { ReactComponent as HomeWhite } from "./HomeWhite.svg";
import { ReactComponent as HomeGray } from "./HomeGray.svg";
import { ReactComponent as HomeBlack } from "./HomeBlack.svg";

export const Home: React.FC<{
  color?: SVGColor;
}> = ({ color = "black" }) => {
  switch (color) {
    case SVGColor.black:
      return <HomeBlack />;
    case SVGColor.gray:
      return <HomeGray />;
    default:
      return <HomeWhite />;
  }
};
