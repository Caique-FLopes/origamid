import React, { useState, useContext } from 'react';
import { GlobalContext } from './GlobalContex';

const Limpar = () => {
  const { zerarProdutos, buscarProdutos } = useContext(GlobalContext);
  const [isZerado, setIsZerado] = useState(true);

  function handleAction() {
    if (isZerado) {
      zerarProdutos();
    } else {
      buscarProdutos();
    }
    setIsZerado(!isZerado);
  }

  return (
    <button onClick={handleAction}>
      {isZerado ? 'Zerar Produtos' : 'Buscar Produtos'}
    </button>
  );
};

export default Limpar;
