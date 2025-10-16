/*function createButton(text) {
    function element() {
        const buttonElement = document.createElement('button')
        buttonElement.innerText = text
        return buttonElement
    }
    return Object.freeze(
        {
            element,
            text
        }
    )

}

const comprarBtn = createButton('Comprar')
const venderBtn = createButton('Vender')*/

function Pessoa(nome) {
    if (!(this instanceof Pessoa))
        return new Pessoa(nome)
    this.nome = nome
}

Pessoa.prototype.andar = function () {
    return `${this.nome} andou`;
}

const designer = new Pessoa('Caique')
console.log(designer)