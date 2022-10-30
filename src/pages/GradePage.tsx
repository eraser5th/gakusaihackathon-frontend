import { Header } from "../components/Header";
import { Navigator } from "../components/Navigator";
import { Page } from "../components/Page";
import { Logo } from "../icons";

export const GradePage: React.FC = () => {
  return (
    <Page
      onlyLoggedIn
      header={
        <Header>
          <div className="flex h-full items-center px-8">
            <Logo />
          </div>
        </Header>
      }
      navigator={<Navigator />}
    >
      this is grade page
    </Page>
  );
};
