// function somar(a: number, b: number, c?: number): number {
//   return a + b + (c ? c : 0);
// }
function arredondar(valor) {
    if (typeof valor === 'number') {
        return Math.ceil(valor);
    }
    if (typeof valor === 'string') {
        return Math.ceil(Number(valor)).toString();
    }
    return 'Adicione um tipo valido';
}
console.log(arredondar('4.5'));
console.log(arredondar(4.5));
