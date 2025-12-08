import React from "react";
import { type IUser } from "../Cummon/Types/IUser";
import { type LoginDto } from "../Cummon/Types/LoginDto";

export interface ILoginContext {
  stateLogin: LoginDto;
  dispatchLogin: React.ActionDispatch<[action: { key: string; value: string }]>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  login: (data: LoginDto) => Promise<string>;
  logout: () => void;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  validateToken: () => string | null;
}

export const AuthContext = React.createContext<ILoginContext | null>(null);

function formReducer(
  stateLogin: LoginDto,
  action: { key: string; value: string }
) {
  return {
    ...stateLogin,
    [action.key]: action.value,
  };
}

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [token, setToken] = React.useState<string | null>(null);
  const [user, setUser] = React.useState<IUser | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [stateLogin, dispatchLogin] = React.useReducer(formReducer, {
    username: "",
    password: "",
  });

  React.useEffect(() => {
    async function getToken() {
      try {
        if (!token) {
          setLoading(true);
        }
      } finally {
        setLoading(false);
      }
    }
    getToken();
  }, [token]);

  async function login(data: LoginDto) {
    try {
      setLoading(true);

      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Usuario ou senha incorreto.");

      const { token }: { token: string } = await res.json();
      setToken(token);
      window.localStorage.setItem("authToken", token);
      return token;
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    setToken(null);
    window.localStorage.removeItem("authToken");
  }

  function validateToken() {
    return window.localStorage.getItem("authToken");
  }
  return (
    <AuthContext.Provider
      value={{
        stateLogin,
        dispatchLogin,
        token,
        setToken,
        loading,
        setLoading,
        login,
        logout,
        user,
        setUser,
        validateToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
