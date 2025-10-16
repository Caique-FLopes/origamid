import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProdutosScreens from './Components/Pages/ProdutosScreens';
import HomeScreen from './Components/Pages/HomeScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="produtos/:id" element={<ProdutosScreens />}>
          <Route path="" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
