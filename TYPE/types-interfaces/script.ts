type NumberOrString = string | number;

let total: NumberOrString = 20;
total = '30';

interface InterfaceProduto {
  nome: string;
  preco: number;
  teclado: boolean;
}

type TypeProduto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

function preecherDados(dados: InterfaceProduto) {
  document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>${dados.preco}</p>
      <p>Inclui Teclado: ${dados.teclado ? 'sim' : 'não'}</p>
    <div>
  `;
}

const computador: InterfaceProduto = {
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

type Categorias = 'design' | 'codigo' | 'descod';

function pintarCategoria(categoria: Categorias) {
  if (categoria === 'design') {
    console.log('Pintar Vermelho');
  }
}

pintarCategoria('descod');

//interface para definir objetos
//type para definir dados primitivos ou especificos
