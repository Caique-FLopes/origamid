import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
// import Dog from './img/dog.svg?react';
import { UserStorage } from './Components/Contexts/UserContext';
import User from './Components/User/User';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import useModal from './Hooks/useModal';
import Question from './Components/Question/Question';

function App() {
  const { open, setOpen } = useModal();
  return (
    <>
      {open && <Modal />}

      <Question onClick={setOpen} />
      <div>
        <BrowserRouter>
          <UserStorage>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route
                path="conta/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
          </UserStorage>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
