import { useLoginContext } from "../../contexts/LoginContext";

const Login = () => {
  const { loading, handleLogin, username, setUsername, password, setPassword } =
    useLoginContext();
  return (
    <div className="h-screen flex justify-center items-center">
      {loading ? (
        <p className="text-sky-50 font-extrabold">Carregando...</p>
      ) : (
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-3 p-8 border border-gray-400 w-max h-max mt-2.5 rounded-2xl"
        >
          <fieldset className="flex flex-col gap-2">
            <label className="text-gray-50 font-semibold" htmlFor="username">
              Usuário:
            </label>
            <input
              type="text"
              id="username"
              className="border border-gray-500 text-gray-200 px-2.5 py-2  rounded-3xl"
              placeholder="Usuário"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label className="text-gray-50 font-semibold" htmlFor="password">
              Senha:
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-500 text-gray-200 px-2.5 py-2  rounded-3xl"
              placeholder="Senha"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </fieldset>
          <button
            type="submit"
            className="border-2 border-sky-800 bg-sky-400 px-1 py-2 rounded-3xl shadow-inner shadow-sky-200 hover:bg-sky-300 hover:shadow-sky-50 hover:border-sky-400 disabled:bg-sky-300 disabled:cursor-not-allowed"
          >
            Entrar
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
