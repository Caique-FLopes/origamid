// const cliente = {
//     nome: 'Caique',
//     compras: 10,
// }


// const { nome: nomeCaique, email = 'email@teste.com' } = cliente;

// console.log(email);

// const [primeira, segunda, terceira] = ["Banana", "Uva", "Laranja"];

// console.log(primeira, segunda, terceira)

function handleKeyboard({ key, keyCode }) {
    console.log(key, keyCode)
}

document.addEventListener('keyup', handleKeyboard);