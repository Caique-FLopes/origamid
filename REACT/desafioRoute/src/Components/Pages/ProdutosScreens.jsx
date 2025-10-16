import useViewModelProdutoScreen from '../../Hooks/useViewModelProdutoScreen';
import ProdutoIndividual from '../Organisms/ProdutoIndividual';

const ProdutosScreens = () => {
  const produtoAtual = useViewModelProdutoScreen();
  return (
    <section>
      <ProdutoIndividual {...produtoAtual} />
    </section>
  );
};

export default ProdutosScreens;
