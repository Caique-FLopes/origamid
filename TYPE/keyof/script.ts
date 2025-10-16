// interface Produto {
//   nome: string;
//   preco: number;
//   novo: boolean;
// }

// let chave: keyof Produto;

// chave = 'novo';

// function coordenadas(x: number, y: number) {
//   return { x, y };
// }

// let coord: typeof coordenadas;

// coord = (x: number, y: number) => {
//   return {
//     x,
//     y,
//   };
// };

// interface Elementos {
//   a: HTMLAnchorElement;
//   video: HTMLVideoElement;
//   div: HTMLElement;
//   body: HTMLBodyElement;
//   audio: HTMLAudioElement;
// }

// let chave: keyof Elementos;

// function selecionar<K extends keyof Elementos>(
//   selector: K
// ): Elementos[K] | null {
//   return document.querySelector(selector);
// }

// selecionar('video');

interface Jogo {
  nome: string;
  ano: number;
  desenvolvedora: string;
  plataforma: string[];
}

interface Livro {
  nome: string;
  ano: number;
  autor: string;
  paginas: string;
}

async function fetchData<T>(url: string): Promise<T> {
  const base = 'https://api.origamid.dev/json';
  const response = await fetch(base + url);
  return await response.json();
}

function isInterface<Interface>(
  obj: unknown,
  key: keyof Interface
): obj is Interface {
  if (obj && typeof obj === 'object' && key in obj) {
    return true;
  } else {
    return false;
  }
}

async function handleData() {
  const jogo: Jogo = await fetchData<Jogo>('/jogo.json');
  if (isInterface<Jogo>(jogo, 'desenvolvedora')) {
    console.log(jogo.desenvolvedora);
  }
  const livro: Livro = await fetchData<Livro>('/livro.json');
  if (isInterface<Livro>(livro, 'autor')) {
    console.log(livro.autor);
  }
}

handleData();
