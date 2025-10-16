const frutas = ['Banana', 'Morango', 'Uva'];

const frase = 'Isso é JavaScript';

// fetch('https://pokeapi.co/api/v2/pokemon/')
//     .then(({ headers }) => console.log(headers))

// for (const fruta of frutas) {
//     console.log(fruta);
// }

// for (const char of frase) {
//     console.log(char);
// }

// const buttons = document.querySelectorAll('button');

// for (const btn of buttons) {
//     btn.style.color = 'Blue'
// }
// console.log(...buttons);


const carro = {
    marca: 'Honda',
    ano: 2018
}

Object.defineProperties(carro, {
    rodas: {
        value: 4,
        enumerable: true
    }
})

for (const props in carro) {
    console.log(props, carro[props])
}

for (const f in frutas) {
    console.log(frutas[f])
}

const btn1 = document.querySelector('button')
const btnStyle = getComputedStyle(btn1)

for (const style in btnStyle) {
    console.log(`${style}: ${btnStyle[style]}`)
}