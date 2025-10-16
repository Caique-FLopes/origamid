import React from 'react';
import Button from './Button';
import Produtos from './Produto';

const Contato = React.lazy(() => import('./Contato'));

const funcReducers = {
  aumentar: (state) => state + 1,
  diminuir: (state) => state - 1,
};

function reducer(state, action) {
  if (!funcReducers[action]) return new Error('Error action não existente;');
  else return funcReducers[action](state);
}

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <div>
      {/* {ativo && (
        <React.Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </React.Suspense>
      )}
      <Button width={300} margin={40} onClick={() => setAtivo(!ativo)}>
        Ativar
      </Button> */}

      <button onClick={() => dispatch('aumentar')}>+</button>
      <button onClick={() => dispatch('diminuir')}>-</button>
      <p>{state}</p>
      <Produtos titulo="Produtos gerais" />
    </div>
  );
};

export default App;
