import React from 'react';
import ListaProdutos from '../Molecules/ListaProdutos';
import useViewModelHomeScreen from '../../Hooks/useViewModelHomeScreen';

const HomeScreen = () => {
  const { active, onClick, produtos } = useViewModelHomeScreen();
  return (
    <section>
      <button onClick={onClick}>Produtos</button>
      <button onClick={onClick}>Contato</button>
      {active ? <ListaProdutos data={produtos} /> : <></>}
    </section>
  );
};

export default HomeScreen;
