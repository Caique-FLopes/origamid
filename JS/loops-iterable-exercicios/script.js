// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const lista = document.querySelectorAll('li')

for (const item of lista) {
    item.classList.add('ativo')
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
for (const propertie in window) {
    console.log(`${propertie}: ${window[propertie]}`)
}