import React, { useRef } from "react";
import { useState, useEffect } from "react";


const App = () => {
  const [carrinho, setCarrinho] = useState(0);
  const [notificacao, setNotificacao] = useState(null);
  const timeout = useRef();

  function handleClick(){
    setCarrinho(carrinho + 1);
    setNotificacao('Adicionado ao carrinho');

    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  }
  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar ao Carrinho {carrinho}</button>
    </div>
  );
};
export default App;