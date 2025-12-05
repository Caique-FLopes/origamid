import React, { type PropsWithChildren } from "react";
import { useNavigate, type NavigateFunction } from "react-router-dom";

type StateLogin = {
  username: string;
  password: string;
};
export interface ILoginContext {
  stateLogin: StateLogin;
  dispatchLogin: React.ActionDispatch<[action: { key: string; value: string }]>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  handleLogin: (event: React.FormEvent<Element>) => Promise<void>;
  navigate: NavigateFunction;
}

const LoginContext = React.createContext<ILoginContext | null>(null);

export const useLoginContext = () => {
  const context = React.useContext(LoginContext);
  if (!context) throw new Error("Bota no provider");
  return context;
};

export const LoginProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();

  function formReducer(
    stateLogin: StateLogin,
    action: { key: string; value: string }
  ) {
    return {
      ...stateLogin,
      [action.key]: action.value,
    };
  }

  const [stateLogin, dispatchLogin] = React.useReducer(formReducer, {
    username: "",
    password: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [token, setToken] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function getToken() {
      try {
        if (!token) {
          setLoading(true);
          return navigate("/");
        }
      } finally {
        setLoading(false);
      }
    }
    getToken();
  }, [token]);

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    try {
      setLoading(true);

      if (stateLogin.username === "" && stateLogin.password === "")
        throw new Error("Usuario ou senha não podem ser vazios");

      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(stateLogin),
      });

      if (!res.ok) throw new Error("Usuario ou senha incorreto.");
      const { token }: { token: string } = await res.json();
      if (token) {
        setToken(token);
        navigate("/perfil");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <LoginContext.Provider
      value={{
        stateLogin,
        dispatchLogin,
        token,
        setToken,
        loading,
        setLoading,
        handleLogin,
        navigate,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
