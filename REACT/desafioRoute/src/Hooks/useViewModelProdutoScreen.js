import React from 'react';
import { useParams } from 'react-router-dom';
import ProdutoServico from '../Services/ProdutoServico';

const useViewModelProdutoScreen = () => {
  const params = useParams();
  const [produtoAtual, setProdutoAtual] = React.useState({});
  React.useEffect(() => {
    async function getProduct() {
      const produto = await ProdutoServico.findById(params.id);
      setProdutoAtual(produto);
    }
    getProduct();
  }, []);
  return {
    data: produtoAtual,
  };
};

export default useViewModelProdutoScreen;
