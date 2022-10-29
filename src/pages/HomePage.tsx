import { Suspense } from "react";
import { MoonLoader } from "react-spinners";
import { Header } from "../components/Header";
import { Navigator } from "../components/Navigator";
import { Page } from "../components/Page";
import { Logo } from "../icons";
import { wrappedResult, wrapPromise } from "../lib";

const fetchContents = (): wrappedResult<string[]> => {
  const promise = new Promise<string[]>((res) => {
    setTimeout(() => {
      res([
        "Reactの復習",
        "業務的な内容についての相談は、学生課(E-mail: sad-aas@u-aizu.ac.jp 外線: 0242-37-2600)にお問い合わせください。 対応は平日8:30-17:00となります。",
      ]);
    }, 1000);
  });

  return wrapPromise(promise);
};

const contentsResult = fetchContents();

export const HomePageMain: React.FC = () => {
  const contents = contentsResult.read();

  return <p className="mb-2">{contents}</p>;
};

export const HomePage: React.FC = () => {
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
      title="お知らせ"
    >
      <Suspense fallback={<MoonLoader color="#008484" />}>
        <HomePageMain />
      </Suspense>
    </Page>
  );
};
