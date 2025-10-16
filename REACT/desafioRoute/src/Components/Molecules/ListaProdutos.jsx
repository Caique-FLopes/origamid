import CardProduto from '../Organisms/CardProduto';

const ListaProdutos = ({ data }) => {
  return (
    <div>
      {data?.map((produto) => (
        <CardProduto key={produto.id} data={produto} />
      ))}
    </div>
  );
};

export default ListaProdutos;
