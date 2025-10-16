var numeros = [10, 20, 30, 40, 50, 3];
var valores = [10, 'Taxas', 30, 'Produtos', 50, 3];
function maiorQue10(data) {
    return data.filter(function (n) { return n > 10; });
}
function filtrarValores(data) {
    return data.filter(function (item) { return typeof item === 'number'; });
}
console.log(filtrarValores(valores));
console.log(maiorQue10(numeros));
var dados = [
    ['senhor dos aneis', 80],
    ['a guerra dos tronos', 80],
];
