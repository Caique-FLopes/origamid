import React, { Children, useEffect } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [produtos, setProdutos] = React.useState(null);

  useEffect(() => {
    async function buscarProdutos() {
      try {
        const fetchProdutos = await fetch(
          'https://ranekapi.origamid.dev/json/api/produto/'
        );
        const jsonProdutos = await fetchProdutos.json();
        setProdutos(jsonProdutos);
      } catch (error) {
        console.error(error);
      }
    }

    buscarProdutos();
  }, []);

  function zerarProdutos() {
    setProdutos(null);
  }

  return (
    <GlobalContext.Provider
      value={{
        produtos,
        zerarProdutos,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
