import React from 'react';
import ProdutoServico from '../Services/ProdutoServico';

const useViewModelHomeScreen = () => {
  const [produtos, setProdutos] = React.useState([]);
  const [active, setActive] = React.useState(true);

  React.useEffect(() => {
    async function fetchProdutos() {
      try {
        const listaProdutos = await ProdutoServico.findAll();
        setProdutos(listaProdutos);
      } catch (err) {
        console.error(err);
      } finally {
      }
    }

    if (active) fetchProdutos();
  }, [active]);

  return {
    active: active,
    onClick: () => setActive(!active),
    produtos: produtos,
  };
};

export default useViewModelHomeScreen;
