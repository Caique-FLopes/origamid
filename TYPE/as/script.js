const { body } = document;
function handleData({ nome, preco }) {
    nome.includes('book');
    preco?.toFixed();
}
handleData({
    nome: 'Notebook',
    preco: 2500,
});
function handleClick({ currentTarget }) {
    if (currentTarget instanceof HTMLElement) {
        // currentTarget.innerHTML = `<h1> Mouse click em x: ${pageX}`;
    }
}
document.documentElement.addEventListener('click', handleClick);
document.documentElement.addEventListener('touchstart', handleClick);
function comparar(tipo, ...numeros) {
    if (tipo === 'menor') {
        return Math.min(...numeros);
    }
    if (tipo === 'maior') {
        return Math.max(...numeros);
    }
}
comparar('menor', 3, 4, 5, 12, 3, 4324, 324);
