import { Navigate } from "@tanstack/react-location";
import { useState } from "react";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Page } from "../components/Page";
import { useLogin } from "../hooks/useLogin";
import { Logo } from "../icons";

export const LoginPage: React.FC = () => {
  const { loggedIn, login } = useLogin();
  const [id, setId] = useState("");
  const [pw, setPW] = useState("");

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
      onlyLoggedOut
    >
      <div className="m-auto w-[512px]">
        <div className="h-24" />
        <h1 className="text-[#555555] text-3xl font-bold">ログイン</h1>
        <div className="h-12" />
        <form className="flex flex-col w-full gap-6">
          <Input
            label="学籍番号"
            type="text"
            required
            placeholder="学籍番号を入力してください"
            id="id"
            onChange={(i) => setId(i)}
            value={id}
          />
          <Input
            label="パスワード"
            placeholder="パスワードを入力してください"
            type="password"
            required
            id="pw"
            onChange={(i) => setPW(i)}
            value={pw}
          />
          <div className="h-4" />
          <Button onClick={() => login(id, pw)} label="ログイン" />
        </form>
      </div>
    </Page>
  );
};
