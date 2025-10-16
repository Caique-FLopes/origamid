class Button {
    constructor(text, background, color) {
        this.text = text;
        this.background = background;
        this.color = color;
    }
    element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        buttonElement.style.color = this.color;
        return buttonElement;
    }
    appendTo(target) {
        const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element());
        return targetElement;
    }
    static blueButton(text) {
        return new Button(text, 'blue', 'white');
    }
}

const buttonAzul = Button.blueButton('mama');

/*
const blueButton = new Button('Comprar', 'blue', 'white');

console.log(blueButton.appendTo('body'));

class Button {
    constructor(options) {
        this.options = options;
    }
    static createButton(text, background) {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = text;
        buttonElement.style.background = background;

        return buttonElement;
    }
}
const optionsBlue = {
    text: 'Comprar',
    background: 'blue',
    color: 'white',
};

const blueButton = new Button(optionsBlue);
const blueButtonStatic = Button.createButton('Clique', 'red');

console.log(blueButtonStatic);
*/
