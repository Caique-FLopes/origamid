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
function mostrarQuantidade(produto) {
    console.log(produto.quantidade + 20);
}
mostrarQuantidade(produto1);
mostrarQuantidade(produto2);
mostrarQuantidade(servico);
function mostrarQuantidadePartial(produto) {
    if (produto.quantidade) {
        console.log(produto.quantidade + 20);
    }
}
mostrarQuantidadePartial(produto1);
mostrarQuantidadePartial(produto2);
mostrarQuantidadePartial(servico);
const artigo = {
    titulo: 'HTML e CSS',
    visualizacoes: 3000,
    tags: ['html', 'front end'],
    autor: 'Caique Fernandes',
};
function mostrarTitulo(obj) {
    if ('titulo' in obj) {
        console.log(obj.titulo);
    }
}
mostrarTitulo({ titulo: 'Teste' });
mostrarTitulo('string');
