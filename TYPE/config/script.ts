declare global {
  interface Usuario {
    nome: string;
    email: string;
    idade: number;
  }
}

const livro: Produto = {
  nome: 'teste',
  preco: 10,
};
