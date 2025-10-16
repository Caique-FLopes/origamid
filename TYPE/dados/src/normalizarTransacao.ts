import moedaParaNumero from './moedaParaNumero.js';
import stringParaData from './stringParaData.js';
declare global {
  type TransacaoPagamento = 'Cartão de Crédito' | 'Boleto';
  type TransacaoStatus =
    | 'Paga'
    | 'Recusada pela operadora de cartão'
    | 'Aguardando pagamento'
    | 'Estornada';

  interface TransacaoApi {
    Status: TransacaoStatus;
    ID: number;
    Data: string;
    Nome: string;
    ['Forma de Pagamento']: TransacaoPagamento;
    Email: string;
    ['Valor (R$)']: string;
    ['Cliente Novo']: number;
  }

  interface Transacao {
    nome: string;
    id: number;
    data: Date;
    status: TransacaoStatus;
    email: string;
    moeda: string;
    valor: number | null;
    pagamento: TransacaoPagamento;
    novo: boolean;
  }
}

export default function normalizarTransacao(
  transacao: TransacaoApi
): Transacao {
  return {
    status: transacao.Status,
    id: transacao.ID,
    data: stringParaData(transacao.Data),
    nome: transacao.Nome,
    pagamento: transacao['Forma de Pagamento'],
    email: transacao.Email,
    moeda: transacao['Valor (R$)'],
    valor: moedaParaNumero(transacao['Valor (R$)']),
    novo: Boolean(transacao['Cliente Novo']),
  };
}
