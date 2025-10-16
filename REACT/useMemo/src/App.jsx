import React from 'react';

function operacaoLenta() {
  let c;

  for (let i = 0; i < 100000000; i++) c = i + i / 10;
  return c;
}

const set1 = new Set();
const set2 = new Set();

const Produto = () => {
  const func1 = () => {
    console.log('Teste');
  };
  const func2 = React.useCallback(() => {
    console.log('Teste');
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log('Set1: ', set1);
  console.log('Set2: ', set2);

  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  );
};

const App = () => {
  const [contar, setContar] = React.useState(0);

  // const t1 = performance.now();
  // const valor = React.useMemo(() => operacaoLenta(), []);
  // console.log(valor);
  // console.log(performance.now() - t1);

  return (
    <div>
      <Produto />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;
