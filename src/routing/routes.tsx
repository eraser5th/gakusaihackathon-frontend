import { Route } from "@tanstack/react-location";
import { GradePage } from "../pages/GradePage";
import { HomePage } from "../pages/HomePage";
import { SchedulePage } from "../pages/SchedulePage";

export enum Routes {
  Home = "/",
  Grade = "/grade",
  Schedule = "/schedule",
}

export const routes: Route[] = [
  { path: Routes.Home, element: <HomePage /> },
  { path: Routes.Schedule, element: <SchedulePage /> },
  { path: Routes.Grade, element: <GradePage /> },
];
