import { Header } from "../components/Header";
import { Navigator } from "../components/Navigator";
import { Page } from "../components/Page";
import { Logo } from "../icons";
import { User } from "../icons/User";

enum Evaluation {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
}

enum Quarter {
  first = "first",
  second = "second",
  third = "third",
  fourth = "fourth",
  firstHalf = "firstHalf",
  secondHalf = "secondHalf",
}

type Subject = {
  id: number;
  name: string;
  charge: string;
  year: number;
  quarter: Quarter;
};

type Grade = {
  no: number;
  point?: number;
  evaluation?: Evaluation;
  isPassed?: boolean;
  subject: Subject;
};

const grades: Grade[] = [
  {
    no: 1,
    subject: {
      charge: "tk",
      id: 1111111,
      name: "論理回路",
      year: 2022,
      quarter: Quarter.first,
    },
    evaluation: Evaluation.A,
    isPassed: true,
    point: 100,
  },
];

export const GradePage: React.FC = () => {
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
      title="成績"
      navigator={<Navigator />}
    >
      <table className="p-4 border-2 border-aizuDark rounded-lg bg-aizuLightGreen">
        <thead>
          <tr>
            <th>No.</th>
            <th>科目</th>
            <th>教員</th>
            <th>開講年度</th>
            <th>開講区分</th>
            <th>評点</th>
            <th>評価</th>
            <th>合否</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade) => {
            return (
              <tr key={grade.no}>
                <td>{grade.no}</td>
                <td>{grade.subject.name}</td>
                <td>{grade.subject.charge}</td>
                <td>{grade.subject.year}</td>
                <td>{grade.subject.quarter}</td>
                <td>{grade.point}</td>
                <td>{grade.evaluation}</td>
                <td>{grade.isPassed ? "合" : "否"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Page>
  );
};
