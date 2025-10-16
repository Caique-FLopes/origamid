// function somar(a: number, b: number, c?: number): number {
//   return a + b + (c ? c : 0);
// }

// somar(3, 4, 6);

// const subtrair = (a: number, b: number) => a - b;

// subtrair(4, 3);

// type Callback = () => void;

// function pintarTela(cor: string): void {
//   document.body.style.background = cor;
// }

// pintarTela('black');

// const btn = document.querySelector('button');

// btn?.click();

// function isString(value: any) {
//   if (typeof value === 'string') return true;
// }
// console.log(isString('Teste'));
// console.log(isString(200));

// function abortar(mensagem: string): never {
//   throw new Error(mensagem);
// }

// //abortar('Um erro Ocorreu');
// //console.log('Tente Novamente');

// interface Quadrado {
//   lado: number;
//   perimetro(lado: number): number;
// }

// function calcular(forma: Quadrado) {
//   forma.perimetro(3);
// }

// //overload = para definir uma nova forma de receber parametros
// function normalizar(valor: string[]): string[];
// function normalizar(valor: string): string;
// function normalizar(valor: string | string[]): string | string[] {
//   if (typeof valor === 'string') {
//     return valor.trim().toLowerCase();
//   } else {
//     return valor.map((item) => item.trim().toLowerCase());
//   }
// }

// console.log(normalizar(' prODuto ').toUpperCase());
// console.log(normalizar([' BanaNa', ' UvA ']));

// function $(seletor: 'a'): HTMLAnchorElement | null;
// function $(seletor: 'video'): HTMLVideoElement | null;
// function $(seletor: string): Element | null;
// function $(seletor: string): Element | null {
//   return document.querySelector(seletor);
// }

// $('a')?.click();
// $('video')?.volume;

function arredondar(valor: string): string;
function arredondar(valor: number): number;
function arredondar(valor: string | number): string | number {
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
