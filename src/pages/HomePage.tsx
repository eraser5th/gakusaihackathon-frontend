import { Header } from "../components/Header";
import { Navigator } from "../components/Navigator";
import { Page } from "../components/Page";
import { Logo } from "../icons";

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
      <p className="mb-2">
        問題が生じた場合は、E-mail: campus-help@u-aizu.ac.jp
        にお問い合わせください。
      </p>
      <p>
        業務的な内容についての相談は、学生課(E-mail: sad-aas@u-aizu.ac.jp　外線:
        0242-37-2600)にお問い合わせください。 対応は平日8:30-17:00となります。
      </p>
    </Page>
  );
};
