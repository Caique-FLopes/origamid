/*const promessa = new Promise((resolve, reject) => {
    let condicao = true;
    if (condicao) {
        setTimeout(() => {
            resolve({ nome: 'Caique', idade: 23 });
        }, 1000);
    } else {
        reject(Error('Erro na promise'));
    }
});

const retorno = promessa
    .then((resolucao) => {
        console.log(resolucao);
        resolucao.profissao = 'Designer';
        return resolucao;
    })
    .then(
        (resolucao) => console.log(resolucao),
        (rejeitada) => console.log(rejeitada),
    )
    .finally((teste) => {
        console.log('teste');
    });

console.log(retorno);
*/

const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('usuario logado');
    }, 1000);
});

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados Carregados');
    }, 1500);
});

const carregou = Promise.race([login, dados]);

carregou.then((resolucao) => {
    console.log(resolucao);
});
