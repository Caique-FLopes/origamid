import React from 'react';
import { GlobalContext } from './GlobalContex';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  console.log(global);
  return (
    <div>
      <h1>Produtos:</h1>
      {global.produtos &&
        global.produtos.map((produto, key) => (
          <div id="" key={key}>
            <h3>{produto.nome}</h3>
          </div>
        ))}
    </div>
  );
};

export default Produto;
