import './index.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';


import Login from './pages/loginPage/login';
import App from './pages/home/App';
import Cadastro from './pages/cadastroPage/cadastroPage';
import InfProduto from './pages/InfProduto';
import Catalogo from './pages/catalogo';
import Pagamento50 from './pages/pagemento50';
import PerfilPublico from './pages/perfil/perfil-publico'
import Pagamento75 from './pages/pagamento75';
import AdmHome from './pages/ADM_pages/home';
import ADM_pedidos from './pages/ADM_pages/pedidos_concluidos';
import Users_Consulta from './pages/ADM_pages/consulta_usuarios';
import Produtos_ConsultaADM from './pages/ADM_pages/consulta_produto';
<<<<<<< HEAD
import Esqueceu from './pages/esqueceusenha';
import PerfilPessoal from './pages/perfil/perfil-pessoal';
=======
import StatusPedido from './pages/perfil/status-pedido'






import PerfilPessoal from './pages/perfil/perfil-pessoal'


>>>>>>> c32e1939fce74fbbed8ceb064fd3006c8367576f


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/login' element={<Login />} />
        <Route path='/produto' element={<InfProduto />} />
        <Route path='/catalogo' element={<Catalogo />} />
        <Route path='/pagamento50' element={<Pagamento50 />} />
        <Route path='/pagamento75' element={<Pagamento75 />} />
        <Route path='/perfil-publico' element={<PerfilPublico />} />
        <Route path='/status-pedido' element={<StatusPedido />} />
        <Route path='/perfil-pessoal' element={<PerfilPessoal />} />
        <Route path='/ADM' element={<AdmHome />} />
        <Route path='/ADM_Users' element={<Users_Consulta />} />
        <Route path='/ADM_Produtos' element={<Produtos_ConsultaADM />} />
<<<<<<< HEAD
        <Route path='/esqueceusenha' element={<Esqueceu />} />
        
        
=======
        <Route path='/ADM_Pedidos' element={<ADM_pedidos />} />
>>>>>>> c32e1939fce74fbbed8ceb064fd3006c8367576f
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

