import React, { useEffect, useState } from 'react';

import useLocalStorage from '../../customHooks/src/useLocalStorage';
import useFetch from './useFetch';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', []);
  const { request, data, loading, error } = useFetch();

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/'
      );
    }
    fetchData();
  }, [request]);

  return (
    <div>
      Produto preferido: {produto}
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>smartphone</button>
      {data &&
        data.map((produto) => (
          <div key={produto.id}>
            <h2>{produto.nome}</h2>
          </div>
        ))}
      {loading && <p>Carregando...</p>}
      {error && <p>Erro</p>}
    </div>
  );
};

export default App;
