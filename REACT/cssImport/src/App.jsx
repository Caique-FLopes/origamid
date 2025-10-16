import './App.css';
import Card from 'react-bootstrap/Card';
import Produto from './Components/Produto';
import React from 'react';
import Slide from './Slide';
import foto from './img/foto.jpg';
import { ReactComponent as Dog } from './img/dog.svg';

const App = () => {
  // const slides = [
  //   {
  //     id: 'slide1',
  //     text: 'Slide 1',
  //   },
  //   {
  //     id: 'slide2',
  //     text: 'Slide 2',
  //   },
  //   {
  //     id: 'slide3',
  //     text: 'Slide 3',
  //   },
  // ];
  return (
    <div>
      {/* <Slide slides={slides} /> */}
      <p className="fundo"></p>
      <img src={foto} alt="" />
      <Dog />
    </div>
  );
};

export default App;
