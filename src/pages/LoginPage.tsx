import { Navigate } from "@tanstack/react-location";
import { Header } from "../components/Header";
import { Navigator } from "../components/Navigator";
import { Page } from "../components/Page";
import { useLogin } from "../hooks/useLogin";
import { Logo } from "../icons";

export const LoginPage: React.FC = () => {
  const { loggedIn, login } = useLogin();
  console.log(loggedIn);

  if (loggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Page
      header={
        <Header>
          <div className="flex h-full items-center px-8">
            <Logo />
          </div>
        </Header>
      }
      navigator={<Navigator />}
      title="ログインページ"
      onlyLoggedOut
    >
      <button
        className="p-4 border-2"
        type="button"
        onClick={() => login("", "")}
      >
        login1 login
      </button>
    </Page>
  );
};
