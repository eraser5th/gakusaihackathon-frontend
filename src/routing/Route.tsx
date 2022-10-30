import {
  createHashHistory,
  ReactLocation,
  Route,
  Router,
} from "@tanstack/react-location";
import { useEffect } from "react";
import { useLogin } from "../hooks/useLogin";
import { GradePage } from "../pages/GradePage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { SchedulePage } from "../pages/SchedulePage";
import { Routes } from "./routes";

const history = createHashHistory();
const location = new ReactLocation({ history });

export const AppRouter: React.FC = () => {
  const { logout } = useLogin();
  useEffect(() => {
    return () => logout();
  }, [logout]);
  const routes: Route[] = [
    {
      path: Routes.Home,
      element: <HomePage />,
    },
    {
      path: Routes.Schedule,
      element: <SchedulePage />,
    },
    {
      path: Routes.Grade,
      element: <GradePage />,
    },
    {
      path: Routes.Login,
      element: <LoginPage />,
    },
  ];

  return <Router location={location} routes={routes} />;
};
