import { Header } from "../components/Header";
import { Navigator } from "../components/Navigator";
import { Page } from "../components/Page";
import { Logo } from "../icons";
import { User } from "../icons/User";

export const SchedulePage: React.FC = () => {
  return (
    <Page
      onlyLoggedIn
      header={
        <Header>
          <div className="flex h-full items-center px-8 justify-between">
            <Logo />
            <div className="flex gap-4 items-center text-white w-40">
              <User />
              ゲスト
            </div>
          </div>
        </Header>
      }
      navigator={<Navigator />}
      title="スケジュール"
    >
      this is Schedule page
    </Page>
  );
};
