import { Navigate } from "@tanstack/react-location";
import { useEffect, useState } from "react";

export const useLogin = () => {
  const [loggedIn, setLogin] = useState(
    window.localStorage.getItem("onetime") !== null
  );

  return {
    loggedIn,
    login: (id: string, pw: string) => {
      // const res = await fetch(`login?id=${id}&password=${pw}`);
      // const body: {
      //   token: string;
      // } = await res.json();
      // window.localStorage.setItem("onetime", body.token);
      window.localStorage.setItem("onetime", "hoge");
      setLogin(true);
    },
    logout: () => {
      window.localStorage.removeItem("onetime");
      setLogin(false);
    },
  };
};

export const useLoginRouter = (
  component: React.ReactElement
): React.ReactElement => {
  const { loggedIn } = useLogin();
  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return component;
};
