import React from "react";
import useFetchState from "./useExercicioCustomHook";

export type User = {
  id: number;
  nome: string;
  idade: number;
  aulas: number;
  cursos: number;
  preferencias: {
    playback: number;
    volume: number;
    qualidade: string;
  };
};

export interface IUserContext {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const UserContext = React.createContext<IUserContext | null>(null);

export const useUserContext = () => {
  const userContext = React.useContext(UserContext);

  if (userContext === null) throw new Error("Use dentro do Provider");

  return userContext;
};

const UserContextProvier = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetchState<User>(
    `https://data.origamid.dev/usuarios/1`
  );

  return (
    <UserContext.Provider value={{ user: data, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvier;
