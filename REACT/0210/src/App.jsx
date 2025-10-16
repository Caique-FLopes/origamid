import React from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Form from './form/Form.jsx'

const Test = () => {
  const active = false;

  if(active){
    return <p>Teste</p>;
  } else {
    return null
  }
};

const App = () => {

  return <div>
    <Header />
    <Test />
    <Form />
    <Footer />
  </div>
};
export default App;