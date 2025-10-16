function anunciarGanhadores(premio, ...ganhadores) {
    ganhadores.forEach(ganhador => {
        console.log(ganhador + ' ganhou um ' + premio);
    });
}

const ganhadores = ['Caique', 'Agata', 'Miguel'];

anunciarGanhadores('Bola', ...ganhadores)


const frutas = ['banana', 'uva', 'morango'];
const verduras = ['cenoura', 'batata'];

const comidas = [...frutas, 'pizza', ...verduras]

console.log(comidas)

const numeros = [3, 4, 5, 12, 3, 3, 24, 2, 4];
const numeroMax = Math.max(...numeros);

console.log(numeroMax)

const btns = document.querySelectorAll('button');
console.log(btns);

const btnArray = [...btns];
console.log(btnArray);