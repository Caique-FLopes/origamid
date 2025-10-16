/**
 *Recebe string '1.200,50' retorna number
 */
export default function moedaParaNumero(moeda: string): number | null {
  const numero: number = Number(moeda.replaceAll('.', '').replace(',', '.'));
  return !isNaN(numero) ? numero : null;
}
