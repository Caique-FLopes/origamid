import { CountLista } from './countBy.js';
import Estatisticas from './Estatisticas.js';
import fetchData from './fetchData.js';
import normalizarTransacao from './normalizarTransacao.js';

function isTransacao(transacao: unknown): transacao is TransacaoApi {
  if (
    transacao &&
    typeof transacao === 'object' &&
    'Status' in transacao &&
    'ID' in transacao &&
    'Data' in transacao &&
    'Nome' in transacao &&
    'Forma de Pagamento' in transacao &&
    'Email' in transacao &&
    'Valor (R$)' in transacao &&
    'Cliente Novo' in transacao
  ) {
    return true;
  } else {
    return false;
  }
}

async function handleTransacoes() {
  const dados = await fetchData<TransacaoApi[]>(
    'https://api.origamid.dev/json/transacoes.json?'
  );

  if (!dados) return;

  const transacoes = dados.map(normalizarTransacao);
  preencherTabela(transacoes);
  preencherEstatisticas(transacoes);
}

function preencherLista(lista: CountLista, containerId: string): void {
  const container = document.getElementById(containerId);
  if (container) {
    Object.keys(lista).forEach((key) => {
      container.innerHTML += `
        <p>${key}: ${lista[key]}</p>
      `;
    });
  }
}

function preencherEstatisticas(transacao: Transacao[]): void {
  const data = new Estatisticas(transacao);

  console.log(data);

  preencherLista(data.pagamento, 'pagamento');
  preencherLista(data.status, 'status');

  const dia = document.querySelector<HTMLElement>('#mais-vendas span');
  if (dia) dia.innerText = data.melhorDia[0];

  const total = document.querySelector<HTMLElement>('#total span');
  if (total)
    total.innerText = data.total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
}

function preencherTabela(transacoes: Transacao[]): void {
  const tabela = document.querySelector('#tabela-transacoes tbody');
  if (!tabela) return;

  transacoes.forEach((transacoes) => {
    tabela.innerHTML += componenteDados(transacoes);
  });
}

const componenteDados = (e: Transacao): string => {
  return `
    <tr>
      <td>${e.nome}</td>
      <td>${e.email}</td>
      <td>R$ ${e.moeda}</td>
      <td>${e.pagamento}</td>
      <td>${e.status}</td>
    </tr>
  `;
};

handleTransacoes();
