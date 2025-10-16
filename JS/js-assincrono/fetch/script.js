// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultadoCep = document.querySelector('.resultadoCep');

inputCep.addEventListener('change', handleClick);

function handleClick(event) {
    event.preventDefault();
    const cep = inputCep.value;
    buscaCep(cep);
    console.log(event);
}

function buscaCep(CEP) {
    fetch(`https://viacep.com.br/ws/${CEP}/json/`)
        .then((response) => response.text())
        .then((body) => {
            resultadoCep.innerText = body;
        });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const btcDisplay = document.querySelector('.btc');
function fetchBtc() {
    fetch('https://blockchain.info/ticker')
        .then((response) => {
            return response.json();
        })
        .then((btcJson) => {
            btcDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',');
        });
}
//setInterval(fetchBtc, 500);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const btnProxima = document.querySelector('.proxima');
const paragrafoPiada = document.querySelector('.piada');

function chamarPiada() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => response.json())
        .then((piada) => {
            console.log(piada.value);
            paragrafoPiada.innerText = piada.value;
        });
}

btnProxima.addEventListener('click', chamarPiada);
