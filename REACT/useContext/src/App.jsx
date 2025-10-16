import React, { useState } from 'react';

import Produto from './Produto';
import { GlobalStorage } from './GlobalContex';
import Limpar from './Limpar';

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
      <Limpar />
    </GlobalStorage>
  );
};

export default App;
