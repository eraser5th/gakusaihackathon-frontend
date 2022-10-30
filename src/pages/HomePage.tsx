import { MoonLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import { fetchHomePage } from "../api";
import { Header } from "../components/Header";
import { Navigator } from "../components/Navigator";
import { Page } from "../components/Page";
import { Logo } from "../icons";
import { Card } from "../components/Card";
import { User } from "../icons/User";

export const HomePage: React.FC = () => {
  const { data, isSuccess } = useQuery(["homePage"], fetchHomePage);

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
      title="お知らせ"
      loading={!isSuccess}
      pendingElement={<MoonLoader color="#008484" />}
      sideContent={
        <div className="flex gap-3 flex-col w-80">
          <Card>
            <h1 className="text-[#008484] font-bold">新着情報</h1>
            <div className="h-2" />
            {data?.newInfo}
          </Card>
          <Card>
            <h1 className="text-[#008484] font-bold">My スケジュール</h1>
            <div className="h-2" />
            {data?.todaySchedule && data.todaySchedule.length !== 0 ? (
              data.todaySchedule.map((schedule) => (
                <p>
                  {schedule.time}限目 {schedule.subjectName}
                </p>
              ))
            ) : (
              <p>今日の予定はありません</p>
            )}
          </Card>
        </div>
      }
    >
      <p className="mb-3">
        問題が生じた場合は、E-mail: campus-help@u-aizu.ac.jp
        にお問い合わせください。
      </p>
      <p>
        業務的な内容についての相談は、学生課(E-mail: sad-aas@u-aizu.ac.jp 外線:
        0242-37-2600)にお問い合わせください。 対応は平日8:30-17:00となります。
      </p>
    </Page>
  );
};
