import './index.scss';

import localStorage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Corvo from '../../../ui/assets/images/perfil-publico_assets/download 2.png'
import Lapis from '../../../ui/assets/images/perfil-pessoal/105b06c79bc402f 1.png'
import Carrinho from '../../../ui/assets/images/perfil-pessoal/image-removebg-preview (8) 2.png'
import filter from '../../../ui/assets/images/adm_assets/filter_icon 1.svg'

import SideBarUsers from '../../../ui/components/perfil/lateral_menu_Perfil';
import Adm_leftNavBar from '../../../ui/components/ADM_components/left_navbar';
import CardPedido2 from '../../../ui/components/perfil/card-pedido2'
import EditarPerfil from '../../../ui/components/perfil/editar-perfil';
import Report from '../../../ui/components/report';


export default function PerfilPessoal() {
    const navigate = useNavigate();
    const [NomeUser, setNomeUser] = useState('default');
    const [Infos, setInfos] = useState();
    const [IsHideEdit, setIsHideEdit] = useState(false);
    const [dados, setDadosRecebidos] = useState('');
    const [ReceivedBanner, setReceivedBanner] = useState('');
    const [ReceivedProfile, setReceivedProfile] = useState('');

    useEffect(() => {
        if (!localStorage("NORMAL_USER_Logado")) {
            navigate('/login');

        } else {
            const infos = localStorage("NORMAL_USER_Logado");
            navigate('/perfil-pessoal');
            setNomeUser(infos.data.Nome);
            setInfos(infos);
        }

    }, []);

    function is() {
        setIsHideEdit(true)
    }

    const sendBannerToS = (dados) => {
        setReceivedBanner(dados);
    };

    const sendProfileToS = (dados) => {
        setReceivedProfile(dados);
    };

    useEffect(() => {
        sendProfileToS();
        sendBannerToS();
        console.log(dados);
    }, [])

    return (
        <>
            <div className='MainPerfil-P'>
                <EditarPerfil IsHideEdit={IsHideEdit}
                    SendBannerToD={sendBannerToS}
                    SendProfileToD={sendProfileToS} />

                <div className='perfil-pag'>
                    <img src={ReceivedBanner} style={{width: '100%', objectFit: 'cover', height: '10%'}} />

                    <span style={{ display: 'flex' }}>
                        <SideBarUsers />
                        <section className='PerfilDetails'>
                            <div className='Perfil'>
                                <span className='InfoP'>
                                    <img src={ReceivedProfile} style={{height: '150px', width: '100%', maxWidth: '150px', objectFit: 'cover'}} />
                                    <a> {NomeUser} </a>
                                </span>
                                <span>

                                    <a className='EditBtn' style={{ cursor: 'pointer' }} onClick={is}>Editar Perfil</a>
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
                    </span>

                </div>
            </div>
        </>
    )




}