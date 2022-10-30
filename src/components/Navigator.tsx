import { Link, useLocation } from "@tanstack/react-location";
import { useEffect, useState } from "react";
import { Calendar, Graph, Home, SVGColor } from "../icons";
import { Routes } from "../routing/routes";

export type Page =
  | {
      name: string;
      Icon: React.FC<{
        color?: SVGColor;
      }>;
      path: Routes | string;
      disabled?: false;
    }
  | {
      name: string;
      Icon: React.FC<{
        color?: SVGColor;
      }>;
      disabled: true;
    };

const pages: Page[] = [
  { name: "ホーム", Icon: Home, path: "/" },
  { name: "スケジュール", Icon: Calendar, path: "/schedule" },
  { name: "成績", Icon: Graph, path: "/grade" },
];

const NavigatorItem: React.FC<{
  page: Page;
}> = ({ page }) => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState<Routes | string>("");
  useEffect(() => {
    setCurrentPage(location.current.pathname);
  }, [location]);

  const [hover, setHover] = useState(false);

  if (page.disabled) {
    return (
      <div className="flex flex-col w-24 h-24 items-center justify-center gap-2 bg-aizuLightGreen text-[#A4A4A4] text-sm">
        <page.Icon color={SVGColor.gray} />
        <h1>{page.name}</h1>
      </div>
    );
  }

  return (
    <Link
      to={page.path}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {currentPage === page.path ? (
        <div className="flex flex-col w-24 h-24 items-center justify-center gap-2 bg-aizuDark text-white text-sm">
          <page.Icon color={SVGColor.white} />
          <h1>{page.name}</h1>
        </div>
      ) : (
        <div className="flex flex-col w-24 h-24 bg-inherit items-center justify-center gap-2 hover:bg-aizuDark text-black hover:text-white text-sm">
          <page.Icon color={hover ? SVGColor.white : SVGColor.black} />
          <h1>{page.name}</h1>
        </div>
      )}
    </Link>
  );
};

export const Navigator: React.FC = () => {
  return (
    <nav className="flex w-full h-24 bg-aizuLightGreen">
      {pages.map((page) => (
        <NavigatorItem key={page.name} page={page} />
      ))}
    </nav>
  );
};
