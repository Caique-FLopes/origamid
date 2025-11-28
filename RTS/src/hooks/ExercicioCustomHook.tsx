import React from "react";
import useFetchState from "./useExercicioCustomHook";

type Produto = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  internacional: boolean;
};

const ExercicioCustomHook = () => {
  const { data, loading, error } = useFetchState<Produto[]>(
    "https://data.origamid.dev/produtos"
  );

  return (
    <div>
      <ul>
        {loading && <p>Buscando Produtos...</p>}
        {data?.map(
          ({ id, nome, preco, quantidade, descricao, internacional }) => (
            <li key={id}>
              <h2>{nome}</h2>
              <span>{preco}</span>
              <p>{descricao}</p>
              <span>{quantidade}</span>
              {internacional && <p>Produto Internacional</p>}
            </li>
          )
        )}
      </ul>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ExercicioCustomHook;
