import { Navigate } from "@tanstack/react-location";
import React from "react";
import { useLogin } from "../hooks/useLogin";

export const Page: React.FC<{
  header: React.ReactNode;
  title?: string;
  navigator?: React.ReactNode;
  children: React.ReactNode;
  loading?: boolean;
  pendingElement?: React.ReactNode;
  sideContent?: React.ReactNode;
  onlyLoggedIn?: boolean;
  onlyLoggedOut?: boolean;
}> = ({
  header,
  navigator,
  children,
  title,
  loading = false,
  pendingElement,
  sideContent,
  onlyLoggedIn = false,
  onlyLoggedOut = false,
}) => {
  const { loggedIn } = useLogin();

  if (loggedIn && onlyLoggedOut) {
    return <Navigate to="/" />;
  }
  if (!loggedIn && onlyLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="w-screen min-h-screen text-aizuDark">
      {header}
      {navigator}
      <main className="p-10">
        <div className="flex gap-8 w-full">
          <div className="grow">
            {loading ? (
              pendingElement
            ) : (
              <>
                {title && <h1 className="font-bold text-2xl">{title}</h1>}
                <div className="h-8" />
                {children}
              </>
            )}
          </div>
          {!loading && sideContent}
        </div>
      </main>
    </div>
  );
};
