// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo


import React from "react";
import { useState, useEffect } from "react";
import Produto from "./Produto";

const App = () => {
  const [dadosProduto, setDadosProduto] = useState(null)

  useEffect(()=> {
    const produtoLocal = localStorage.getItem('produto')
    if(produtoLocal !==  null) setDadosProduto(produtoLocal)
  }, [])

  useEffect(() => {
    if(dadosProduto !==  null ) localStorage.setItem('produto', dadosProduto);
  }, [dadosProduto])

  function handleClick (event) {
    setDadosProduto(event.target.innerText)
  }

  return (
    <div>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      {dadosProduto && (
        <Produto produto={dadosProduto}/>
      )}
    </div>
  );
};
export default App;