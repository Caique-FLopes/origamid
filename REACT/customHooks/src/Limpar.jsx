import React from 'react';
import { GlobalContext } from './GlobalContex';

const Limpar = () => {
  const { zerarProdutos } = React.useContext(GlobalContext);
  return <button onClick={() => zerarProdutos()}>Adicionar</button>;
};

export default Limpar;
