import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/loginPage/login';
import App from './pages/home/App';
import Cadastro from './pages/cadastroPage/cadastroPage';
import InfProduto from './pages/InfProduto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/cadastro' element={<Cadastro/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/produto' element={<InfProduto />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

