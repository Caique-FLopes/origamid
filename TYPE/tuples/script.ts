// const produto1 = ['Notebook', 2500];
// const produto2: [string, number] = ['Notebook', 2500];

// produto2[1].toFixed();

// if (typeof produto1[0] === 'string') {
//   console.log(produto1[0].toLowerCase());
// }

// const [nome, preco] = produto2;
// function getText(selector: string) {
//   const el = document.querySelector<HTMLElement>(selector);
//   if (el) {
//     return [el, el.innerText] as const;
//   } else {
//     return null;
//   }
// }

// const button = getText('button');
// console.log(button);

// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela

//obj
interface Produto {
  cor: string;
  marca: string;
}

//tuple
type Venda = [string, number, string, Produto];

async function fetchVendas() {
  const response = await fetch('https://api.origamid.dev/json/vendas.json');
  const json = await response.json();
  handleVenda(json);
}

function handleVenda(vendas: Array<Venda>): void {
  // let total = 0;
  // for (let i = 0; i < vendas.length; i++) {
  //   total += vendas[i][1];
  // }
  // document.body.innerHTML += `<p>Total: ${total}</p>`;

  const total = vendas.reduce((anterior, atual) => {
    return anterior + atual[1];
  }, 0);
  document.body.innerHTML += `<p>Total: ${total}</p>`;
}

fetchVendas();
