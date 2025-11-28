import React from "react";
import useFetchState from "../hooks/useFetch";
import { getDate } from "../utils/UtilsDate";
import type IDataContext from "../Interfaces/IdataContext";
import type { IVenda } from "../Interfaces/IVenda";

const DataContext = React.createContext<IDataContext | null>(null);

export const useDataContext = () => {
  const context = React.useContext(DataContext);
  if (!context) throw new Error("Bota no provider");
  return context;
};

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [inicio, setInicio] = React.useState(getDate());
  const [final, setFinal] = React.useState(getDate(30));

  const { data, error, loading } = useFetchState<IVenda[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
  );

  return (
    <DataContext.Provider
      value={{ data, loading, error, inicio, setInicio, final, setFinal }}
    >
      {children}
    </DataContext.Provider>
  );
};
