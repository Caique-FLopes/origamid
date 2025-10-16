// class Produto {
//   nome: string;
//   constructor(nome: string) {
//     this.nome = nome;
//   }
// }
// const livro = new Produto('1984');
// console.log(livro instanceof Array);
// class Livro extends Produto {
//   autor: string;
//   constructor(nome: string, autor: string) {
//     super(nome);
//     this.autor = autor;
//   }
// }
// class Jogo extends Produto {
//   jogadores: number;
//   constructor(nome: string, jogadores: number) {
//     super(nome);
//     this.jogadores = jogadores;
//   }
// }
// function buscarProduto(busca: string) {
//   if (busca === 'O hobbit') {
//     return new Livro('O Hobbit', 'JRR Tolkien');
//   }
//   if (busca === 'LOL') {
//     return new Jogo('League of Legends', 12);
//   }
//   return null;
// }
// const produto = buscarProduto('LOL');
// if (produto instanceof Livro) {
//   console.log(produto.autor);
// }
// if (produto instanceof Jogo) {
//   console.log(produto.jogadores);
// }
// if (produto instanceof Produto) {
//   console.log(produto.nome);
// }
// interface Carro {
//   nome: string;
// }
// const honda: Carro = {
//   nome: 'Honda',
// };
// console.log(honda instanceof Carro);
var link = document.getElementById('origamid');
if (link instanceof HTMLAnchorElement) {
    console.dir(link);
    link.href = link.href.replace('http://', 'https://');
}
