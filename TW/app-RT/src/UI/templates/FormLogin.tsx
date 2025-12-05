import React from "react";
import type { ILoginContext } from "../../contexts/LoginContext";
import InputForm from "../molecules/InputForm";

type IFormLogin = Omit<ILoginContext, "loading">;

const FormLogin: React.FC<IFormLogin> = ({
  handleLogin,
  stateLogin,
  dispatchLogin,
}) => {
  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col gap-3 p-8 border border-gray-400 w-max h-max mt-2.5 rounded-2xl"
    >
      <InputForm
        htmlFor="username"
        label="Usuário:"
        type="text"
        id="username"
        placeholder="Usuário"
        value={stateLogin.username}
        onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
          dispatchLogin({ key: target.id, value: target.value })
        }
      />
      <InputForm
        htmlFor="password"
        label="Senha:"
        type="password"
        id="password"
        placeholder="Senha"
        value={stateLogin.password}
        onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
          dispatchLogin({ key: target.id, value: target.value })
        }
      />
      <button
        type="submit"
        className="border-2 border-sky-800 bg-sky-400 px-1 py-2 rounded-3xl shadow-inner shadow-sky-200 hover:bg-sky-300 hover:shadow-sky-50 hover:border-sky-400 disabled:bg-sky-300 disabled:cursor-not-allowed"
      >
        Entrar
      </button>
    </form>
  );
};

export default FormLogin;
