import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/loginPage/login';
import App from './pages/home/App';
import Cadastro from './pages/cadastroPage/cadastroPage';
import InfProduto from './pages/InfProduto';
import Catalogo from './pages/catalogo';
<<<<<<< HEAD
import Pagamento50 from './pages/pagemento50';
=======
import PerfilPublico from './pages/perfil/perfil-publico'
>>>>>>> 96c81dfb86e4d874f1ea42618de2410f65957327

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/cadastro' element={<Cadastro/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/produto' element={<InfProduto/>} />
        <Route path='/catalogo' element= {<Catalogo/>} />
<<<<<<< HEAD
        <Route path='/pagamento50' element= {<Pagamento50/>} > />
=======
        <Route path='/perfil-publico' element= {<PerfilPublico/>} />

>>>>>>> 96c81dfb86e4d874f1ea42618de2410f65957327
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

