import React from "react";
import type { ILoginContext } from "../../contexts/AuthProvider";
import InputForm from "../molecules/InputForm";
import { useNavigate } from "react-router-dom";
import Button from "../atomns/Button";

type IFormLogin = Omit<ILoginContext, "loading">;

const FormLogin: React.FC<IFormLogin> = ({
  login,
  stateLogin,
  dispatchLogin,
}) => {
  const navigate = useNavigate();
  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const token = await login(stateLogin);
    if (token) navigate("/perfil");
  }

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
      <Button>Entrar</Button>
    </form>
  );
};

export default FormLogin;
