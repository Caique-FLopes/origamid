"use strict";
let total = 20;
total = '30';
function preecherDados(dados) {
    document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>${dados.preco}</p>
      <p>Inclui Teclado: ${dados.teclado ? 'sim' : 'não'}</p>
    <div>
  `;
}
const computador = {
    nome: 'Computador',
    preco: 3000,
    teclado: false,
};
preecherDados(computador);
preecherDados({
    nome: 'Notebook',
    preco: 2500,
    teclado: true,
});
function pintarCategoria(categoria) {
    if (categoria === 'design') {
        console.log('Pintar Vermelho');
    }
}
pintarCategoria('descod');
//interface para definir objetos
//type para definir dados primitivos ou especificos
