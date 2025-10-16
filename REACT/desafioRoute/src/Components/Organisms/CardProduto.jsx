import { NavLink } from 'react-router-dom';

const CardProduto = ({ data }) => {
  const { descricao, fotos, id, nome, preco, usuario_id, vendido } = data;
  return (
    <NavLink to={`/produtos/${id}`}>
      <div>
        <img src={fotos[0].src} alt={fotos[0].title} />
        <h2>{nome}</h2>
      </div>
    </NavLink>
  );
};

export default CardProduto;
