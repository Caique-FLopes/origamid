interface Produto {
  nome: string;
  quantidade: number;
}

const produto1 = {
  nome: 'Notebook 1',
  quantidade: 10,
  cor: 'Azul',
};
const produto2 = {
  nome: 'Geladeira 1',
  quantidade: 10,
  freezer: true,
};

const servico = {
  nome: 'Instalação',
};

function mostrarQuantidade(produto: Produto) {
  console.log(produto.quantidade + 20);
}

mostrarQuantidade(produto1);
mostrarQuantidade(produto2);
mostrarQuantidade(servico);

function mostrarQuantidadePartial(produto: Partial<Produto>) {
  if (produto.quantidade) {
    console.log(produto.quantidade + 20);
  }
}

mostrarQuantidadePartial(produto1);
mostrarQuantidadePartial(produto2);
mostrarQuantidadePartial(servico);

interface Post {
  titulo: string;
  visualizacoes: number;
  tags: string[];
  [key: string]: unknown;
}

const artigo: Post = {
  titulo: 'HTML e CSS',
  visualizacoes: 3000,
  tags: ['html', 'front end'],
  autor: 'Caique Fernandes',
};

interface ObjetoLiteral {
  [key: string]: unknown;
}

type ObjetoLiteral2 = Record<'titulo', unknown>;

function mostrarTitulo(obj: ObjetoLiteral) {
  if ('titulo' in obj) {
    console.log(obj.titulo);
  }
}

mostrarTitulo({ titulo: 'Teste' });
mostrarTitulo('string');
