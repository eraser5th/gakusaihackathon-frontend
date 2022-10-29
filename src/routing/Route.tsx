import {
  createHashHistory,
  ReactLocation,
  Router,
} from "@tanstack/react-location";
import { routes } from "./routes";

const history = createHashHistory();
const location = new ReactLocation({ history });

export const Route: React.FC = () => {
  return <Router location={location} routes={routes} />;
};
