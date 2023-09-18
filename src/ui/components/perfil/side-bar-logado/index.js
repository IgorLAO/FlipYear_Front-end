import './index.scss'
import Pfp from '../../../assets/images/perfil-publico_assets/download 2.png'
import Lapis from '../../../assets/images/perfil-pessoal/105b06c79bc402f 1.png'
import Adm from '../../../assets/images/perfil-side-bar/usuario icon.png'
import Seta from '../../../assets/images/perfil-side-bar/setapabaixo.png'
import Logo from '../../../assets/images/perfil-side-bar/arcade_Logo 21.png'
import { Link } from "react-router-dom";
import Carrinho from '../../../assets/images/perfil-pessoal/image-removebg-preview (8) 2.png'
import { useState } from 'react'



export default function SideBarLogado(){

    const [selectPerfil, setSelectPerfil] = useState(false);
    const [menuPedidos, setMenuPedidos] = useState(false);
    const [setaLado, setSetaLado] = useState('-90');
    const [fundoTopo, setFundoTopo] = useState('');
    const [corFonte, setCorFonte] = useState('white')

    function mostrarMenuPedidos(){

        setMenuPedidos(true);
        setSetaLado('0');
        setFundoTopo('#88C070')
        setCorFonte('black');


    }

    function esconderMenuPedidos(){

        setMenuPedidos(false);
        setSetaLado('-90');
        setFundoTopo('');
        setCorFonte('white')


    }


    function editarPerfilSelect(){


            setSetaLado('0');
            setFundoTopo('#88C070')
            setCorFonte('black');


    }

    
    function editarPerfilUnselect(){


        setSelectPerfil(false);
        setSetaLado('-90');
        setFundoTopo('');
        setCorFonte('white')



}


function editarPerfilSelect(){


    setSetaLado('0');
    setFundoTopo('#88C070')
    setCorFonte('black');


}


function editarPerfilUnselect(){


setMenuPedidos(false);
setSetaLado('-90');
setFundoTopo('');
setCorFonte('white')



}




    return(<div className='side-bar-logado'>

        <div className='pfp-nome'>
            <div className='foto'>
                <img src={Pfp}></img>
            </div>

            <p className='nome-side-bar'>Ind0m4bl3_Cr0w</p>
        </div>

            <div className='menu-side-bar'>
                <div className='linha-side-bar'></div>       
                <div className='item-side-bar'onMouseEnter={editarPerfilSelect} onMouseLeave={editarPerfilUnselect} style={{backgroundColor: `${fundoTopo}`, color: `${corFonte}`}}>
                    <img src={Lapis} className='lapis'></img>
                    <p>Editar Perfil</p>
                </div>
                <div className='linha-side-bar'></div>
                <Link to = '/perfil-pessoal' style={{textDecoration: 'none'}}>
                <div className='item-side-bar' onMouseEnter={mostrarMenuPedidos} onMouseLeave={esconderMenuPedidos} style={{backgroundColor: `${fundoTopo}`, color: `${corFonte}`}}>
                    <img src={Carrinho} className='carrinho-side-bar'></img>
                    <p>Meus Pedidos</p>
                    <img src={Seta} style={{transform: `rotate(${setaLado}deg)`}} className='seta-baixo'></img>
                    {menuPedidos &&


                        <div className='lista-pedidos'>

                        </div>

                    }
                </div>
                </Link>
                <div className='linha-side-bar'></div>
                <Link to = '/ADM' style={{textDecoration: 'none'}}>
                <div className='item-side-bar'>
                    <img src={Adm} className='adm'></img>
                    <p>Administrador</p>
                    <img src={Seta} className='seta-baixo'></img>
                </div>
                </Link>
                <div className='linha-side-bar'></div>

                <div className='logo'>

                <img src={Logo}/>
                <p>FLIP-YEAR</p>
                <p className='doisk'>2000</p>

                </div>

            </div>
        </div>
    )



}