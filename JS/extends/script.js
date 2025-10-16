class Veiculo {
    constructor(rodas, combustivel) {
        this.rodas = rodas;
        this.combustivel = combustivel;
    }
    acelerou() {
        console.log('Acelerou');
    }
}


class Moto extends Veiculo {
    constructor(rodas, combustivel, capacete) {
        super(rodas, combustivel)
        this.capacete = capacete;
    }
    empinar() {
        console.log('Moto empinou com ' + this.rodas + ' rodas');
    }
    acelerou() {
        super.acelerou()
        console.log('oia')
    }
}

const honda = new Moto(2, true);
const civic = new Veiculo(4);
console.log(honda, civic)