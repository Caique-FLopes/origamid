// interface Produto {
//   nome: string;
//   preco: number;
//   novo: boolean;
// }
async function fetchData(url) {
    const base = 'https://api.origamid.dev/json';
    const response = await fetch(base + url);
    return await response.json();
}
function isInterface(obj, key) {
    if (obj && typeof obj === 'object' && key in obj) {
        return true;
    }
    else {
        return false;
    }
}
async function handleData() {
    const jogo = await fetchData('/jogo.json');
    if (isInterface(jogo, 'desenvolvedora')) {
        console.log(jogo.desenvolvedora);
    }
    const livro = await fetchData('/livro.json');
    if (isInterface(livro, 'autor')) {
        console.log(livro.autor);
    }
}
handleData();
