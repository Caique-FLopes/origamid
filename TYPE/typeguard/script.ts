// function typeGuard(value: any) {
//   if (typeof value === 'string') {
//     return value.toLowerCase();
//   }
//   if (typeof value === 'number') {
//     return value.toFixed();
//   }
//   if (value instanceof HTMLElement) {
//     return value.innerText;
//   }
// }

// console.log(typeGuard('Origamid'));
// typeGuard(200);
// typeGuard(document.body);

// const obj = {
//   nome: 'Caique',
// };

// if ('nome' in obj) {
//   console.log('sim');
// }

// async function fetchProduto() {
//   const response = await fetch('https://api.origamid.dev/json/notebook.json');
//   const json = await response.json();
//   handleProduto(json);
// }

// interface Produto {
//   nome: string;
//   preco: number;
// }

// function handleProduto(data: Produto) {
//   if ('preco' in data) {
//     document.body.innerHTML += `
//       <p>Nome: ${data.nome}</p>
//       <p>Preço: R$ ${data.preco + 100}</p>
//     `;
//   }
// }

// fetchProduto();

// function typeGuard(value: unknown) {
//   if (typeof value === 'string') {
//     return value.toUpperCase();
//   }
//   if (typeof value === 'number') {
//     return value.toFixed();
//   }
//   if (value instanceof HTMLElement) {
//     return value.innerText;
//   }
// }

// typeGuard('CAique');
// typeGuard(200);
// console.log(typeGuard(document.body));

// async function fetchCursos() {
//   const response = await fetch('https://api.origamid.dev/json/cursos.json');
//   const json = await response.json();
//   handleCursos(json);
// }
// const handleCursos = (data: unknown) => {
//   if (data instanceof Array) {
//     console.log('É array');
//   }
//   if (Array.isArray(data)) {
//     console.log('É array');
//   }
// };

// fetchCursos();

// function isString(value: unknown): value is string {
//   return typeof value === 'string';
// }

// function handleData(data: unknown) {
//   if (isString(data)) {
//     data.toLowerCase();
//   }
// }

// async function fetchProduto() {
//   const response = await fetch('https://api.origamid.dev/json/notebook.json');
//   const json = await response.json();
//   handleProduto(json);
// }
// fetchProduto();

// interface Produto {
//   nome: string;
//   preco: number;
// }

// function isProduto(value: unknown): value is Produto {
//   if (
//     value &&
//     typeof value === 'object' &&
//     'nome' in value &&
//     'preco' in value
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function handleProduto(data: unknown) {
//   if (isProduto(data)) {
//     document.body.innerHTML += `
//       <p>Nome: ${data.nome}</p>
//       <p>Preço: R$ ${data.preco + 100}</p>
//     `;
//   }
// }

async function fetchCursos() {
  const resposta = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await resposta.json();
  console.log(json);
  handleCursos(json);
}

fetchCursos();

interface Curso {
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: Array<number>;
  nivel: string;
  nome: string;
  tags: Array<string>;
}

function isCurso(value: unknown): value is Curso {
  if (
    value &&
    typeof value === 'object' &&
    'aulas' in value &&
    'gratuito' in value &&
    'horas' in value &&
    'idAulas' in value &&
    'nivel' in value &&
    'nome' in value &&
    'tags' in value
  ) {
    return true;
  } else {
    return false;
  }
}

function handleCursos(data: unknown): void {
  if (data instanceof Array) {
    data.filter(isCurso).forEach((e: Curso) => {
      document.body.innerHTML += `
          <h2>${e.nome}</h2>
          <p>Quantidade de aulas disponiveis: ${e.aulas}</p>
          <p>Horas: ${e.horas}</p>
          <p>É gratuito? ${e.gratuito ? 'Sim' : 'Não'}</p>
          <p>Para qual nivel? ${e.nivel}</p>
          <p>${e.idAulas.map((e) => `<a href="#">${e}</a>`).join(' | ')}</p>
          <p>${e.tags.map((e) => `<span>${e}</span>`).join(' | ')}</p>
        `;
    });
  }
}
