import React, { type PropsWithChildren } from "react";
import { useNavigate, type NavigateFunction } from "react-router-dom";
interface ILoginContext {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
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
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [token, setToken] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function getToken() {
      try {
        setLoading(true);
        if (!window.localStorage.getItem("token")) return navigate("/");
        if (window.localStorage.getItem("token")) return navigate("/perfil");
      } finally {
        setLoading(false);
      }
    }
    getToken();

    return () => {};
  });

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    try {
      setLoading(true);

      if (username === "" && password === "")
        throw new Error("Usuario ou senha não podem ser vazios");

      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) throw new Error("Usuario ou senha incorreto.");
      const { token }: { token: string } = await res.json();
      if (token) {
        setToken(token);
        window.localStorage.setItem("token", token);
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
        username,
        setUsername,
        password,
        setPassword,
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
