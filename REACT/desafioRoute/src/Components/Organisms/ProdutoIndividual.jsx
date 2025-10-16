const ProdutoIndividual = ({ data }) => {
  const { descricao, fotos, id, nome, preco, usuario_id, vendido } = data;
  return (
    <div>
      <div>
        {fotos?.map(({ src, titulo }) => (
          <img src={src} alt={titulo} key={titulo} />
        ))}
      </div>
      <div>
        <h1>{nome}</h1>
        <span>{preco}</span>
        <p>{descricao}</p>
      </div>
    </div>
  );
};

export default ProdutoIndividual;
