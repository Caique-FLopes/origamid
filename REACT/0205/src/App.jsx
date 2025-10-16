// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const style = {
  ativa: {
    color: 'green'
  },
  inativa: {
    color: 'red'
  }
}

const App = () => {
  const dados = luana;

  let total = 0;

  for(let compra of dados.compras ){
    total += parseInt(compra.preco.replace('R$ ', ''));
  }

  return <div>
    <p>Cliente: {dados.cliente}</p>
    <p>Idade: {dados.idade}</p>
    <p style={dados.ativa ? style.ativa : style.inativa}>Situação: {dados.ativa ? 'Ativo' : "Inativo"}</p>
    <p>Total: R$ {total}</p>
    {(total > 1000) &&  <span> Vamo Parar Poha</span>}
  </div>;
};

export default App;