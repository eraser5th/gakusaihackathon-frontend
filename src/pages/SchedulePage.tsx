import { Header } from "../components/Header";
import { Navigator } from "../components/Navigator";
import { Page } from "../components/Page";
import { Logo } from "../icons";

export const SchedulePage: React.FC = () => {
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
    >
      this is Schedule page
    </Page>
  );
};
