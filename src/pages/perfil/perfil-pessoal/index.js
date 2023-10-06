import './index.scss';

import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';

import Corvo from '../../../ui/assets/images/perfil-publico_assets/download 2.png'
import Lapis from '../../../ui/assets/images/perfil-pessoal/105b06c79bc402f 1.png'
import Carrinho from '../../../ui/assets/images/perfil-pessoal/image-removebg-preview (8) 2.png'
import filter from '../../../ui/assets/images/adm_assets/filter_icon 1.svg'

import SideBarUsers from '../../../ui/components/perfil/lateral_menu_Perfil';
import Adm_leftNavBar from '../../../ui/components/ADM_components/left_navbar';
import CardPedido2 from '../../../ui/components/perfil/card-pedido2'


export default function PerfilPessoal() {
    const navigate = useNavigate();

    const LogOut = () => {
        storage.remove('NORMAL_USER_Logado');
        navigate('/login');
    };

    return (
        <div className='MainPerfil-P'>
            {/* <SideBarUsers/>  */}
            <div className='perfil-pag'>
                <div className='banner'></div>
                <section className='PerfilDetails'>

                    <div className='Perfil'>
                        <span className='InfoP'>
                            <img src={Corvo} />
                            <a> Tyler, the creator </a>
                        </span>
                        <span>

                            <a className='EditBtn'>Editar Perfil</a>
                        </span>
                    </div>

                    <div className='Pedidos'>
                            <span className='title'>
                                <span>
                                <h1> Meus Pedidos </h1>
                                </span>
                                <img src={filter} />
                            </span>
                        <div className='Items'>
                            <CardPedido2 />
                            <CardPedido2 />
                            <CardPedido2 />
                            <CardPedido2 />
                            <CardPedido2 />
                        </div>

                        <span className='pages'>
                            <a>1</a>
                            <a>2</a>
                            <a>3</a>
                            <a>4</a>
                            <a>5</a>
                            <a>6</a>
                            <a>7</a>
                            <a>8</a>
                            <a>9</a>
                            <a>{'>'}</a>
                        </span>
                    </div>

                </section>

            </div>
        </div>
    )




}