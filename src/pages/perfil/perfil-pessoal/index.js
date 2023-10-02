import './index.scss';

import BannerGato from '../../../ui/assets/images/perfil-publico_assets/5759cdb17f90d64d25e9e59854181dde 2.png'
import Corvo from '../../../ui/assets/images/perfil-publico_assets/download 2.png'
import CardPedido2 from '../../../ui/components/perfil/card-pedido2'
import Lapis from '../../../ui/assets/images/perfil-pessoal/105b06c79bc402f 1.png'
import Carrinho from '../../../ui/assets/images/perfil-pessoal/image-removebg-preview (8) 2.png'
import { useNavigate } from 'react-router-dom';

import storage from 'local-storage'
import SideBarUsers from '../../../ui/components/perfil/lateral_menu_Perfil';
import Adm_leftNavBar from '../../../ui/components/ADM_components/left_navbar';


export default function PerfilPessoal() {
    const navigate = useNavigate();

    const LogOut = () => {
        storage.remove('NORMAL_USER_Logado');
        navigate('/login');
    };

    return (
        <div className='MainPerfil-P'>
             <SideBarUsers/> 
        <div className='perfil-pag'>
                <div className='banner'>

                </div>

            <div className='perfil-infos'>
                <div className='meio'>
                    <div className='pfp1'>
                        <img src={Corvo}></img>
                    </div>
                    <p className='nome'>Ind0m4bl3_Cr0w</p>
                </div>

                <img className='lapis' src={Lapis}></img>
                <button onClick={LogOut} style={{width: 75, height: 25}} > LOGOUT </button>
            </div>



            <div className='pedidos'>
                <div className='carrinho-titulo'>
                    <img className='carrinho' src={Carrinho}></img>
                    <p className='titulo'>Meus Pedidos </p>
                </div>
                <div className='linha-branca'> </div>
            </div>



        </div>



        </div>
    )




}