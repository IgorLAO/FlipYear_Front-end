import './index.scss'
import Pfp from '../../../assets/images/perfil-publico_assets/download 2.png'
import Lapis from '../../../assets/images/perfil-pessoal/105b06c79bc402f 1.png'
import Adm from '../../../assets/images/perfil-side-bar/usuario icon.png'
import Seta from '../../../assets/images/perfil-side-bar/setapabaixo.png'
import Logo from '../../../assets/images/perfil-side-bar/arcade_Logo 21.png'
import Checkbox from '../../../assets/images/checkbox(correct).png'
import Uncheckbox from '../../../assets/images/checkbox(incorrect).png'

import Atari from '../../../../assets/images/imagesCardProduto/nintendo_Console-removebg-preview 102.png'
import { Link } from "react-router-dom";
import Carrinho from '../../../assets/images/perfil-pessoal/image-removebg-preview (8) 2.png'
import { useState } from 'react'
import { render } from '@testing-library/react'



export default function SideBarLogado() {

    const [selectPerfil, setSelectPerfil] = useState(false);
    const [coresHover, setCoresHover] = useState('');
    const [menuPedidos, setMenuPedidos] = useState(false);
    const [menuADM, setMenuADM] = useState(false)
    const [setaLado, setSetaLado] = useState('-90');
    const [fundoTopo, setFundoTopo] = useState('');
    const [corFonte, setCorFonte] = useState('white')

    function renderCssPedidos() {

        setFundoTopo('#88C070')
        setCorFonte('black');


    }

    function UnrenderCssPedidos() {


        setFundoTopo('');
        setCorFonte('white')

        if (menuPedidos == true) {

            renderCssPedidos();

        }


    }

    function ListarPedidos() {

        setMenuPedidos((current) => !current);



        if (menuPedidos == true) {

            setSetaLado('-90');
            setFundoTopo('#88C070')
            setCorFonte('black');


        }

        else {

            setSetaLado('0');
            UnrenderCssPedidos();

        }


    }

    function renderCssADM() {

        setMenuADM((current) => !current);

        if(coresHover.seta != '0'){

            


            if (menuADM == false) {
    
                let obj = {
    
                    fonte: 'black',
                    fundo: '#88C070',
                    seta: '-90'
                   
    
    
                }
    
                setCoresHover(obj);
    
    
            }
    
            else {
    
                let obj = {
    
                    fonte: 'white',
                    fundo: '#081820',
                    seta: '-90',
                    
    
    
                }
    
                setCoresHover(obj);
    
            }
    
     
        }





    }

    function PagADM(){

        setCoresHover({
            fonte: 'black',
            fundo: '#88C070',
            seta: '0'});

        if(coresHover.seta == 0){

            setCoresHover({
                fonte: 'white',
                fundo: '#081820',
                seta: '-90'});
    

        }



    }





    return (<div className='side-bar-logado'>

        <div className='pfp-nome'>
            <div className='foto'>
                <img src={Pfp}></img>
            </div>

            <p className='nome-side-bar'>Ind0m4bl3_Cr0w</p>
        </div>

        <div className='menu-side-bar'>
            <div className='linha-side-bar'></div>
            <div className='item-side-bar'>
                <img src={Lapis} className='lapis'></img>
                <p>Editar Perfil</p>
            </div>
            <div className='linha-side-bar'></div>

            <div className='item-side-bar' onMouseEnter={renderCssPedidos} onMouseLeave={UnrenderCssPedidos} style={{ backgroundColor: `${fundoTopo}`, color: `${corFonte}` }}>
                <img src={Carrinho} className='carrinho-side-bar'></img>
                <p>Meus Pedidos</p>
                <img src={Seta} style={{ transform: `rotate(${setaLado}deg)` }} className='seta-baixo' onClick={ListarPedidos}></img>


            </div>

            <div className='linha-side-bar'></div>

            {menuPedidos &&

                <div className='lista-pedidos'>

                    <div className='pedido'>
                        <div className='fundo-atari'>
                            <img className='Atari' src={Atari}></img>
                        </div>
                        <p className='prod-nome'>ATARI 3000</p>
                        <img className='status-sidebar' src={Checkbox}></img>
                    </div>
                    <div className='linha-side-bar'></div>

                    <div className='pedido'>
                        <div className='fundo-atari'>
                            <img className='Atari' src={Atari}></img>
                        </div>
                        <p className='prod-nome'>ATARI 3000</p>
                        <img className='status-sidebar' src=''></img>
                    </div>
                    <div className='linha-side-bar'></div>

                    <div className='pedido'>
                        <div className='fundo-atari'>
                            <img className='Atari' src={Atari}></img>
                        </div>
                        <p className='prod-nome'>ATARI 3000</p>
                        <img className='status-sidebar' src={Uncheckbox}></img>
                    </div>
                    <div className='linha-side-bar'></div>
                    <Link to='/perfil-pessoal'>
                        <div className='see-more'>
                            <p>Ver Mais...</p>

                            <div className='logo-sb-pedidos'>

                                <img src={Logo} />
                                <p>FLIP-YEAR</p>
                                <p className='doisk'>2000</p>

                            </div>

                        </div>
                    </Link>




                </div>

            }

            {

                (menuPedidos == false)
                    ? <div>
                        <div className='item-side-bar'
                            onMouseEnter={() => renderCssADM()}
                            onMouseLeave={() => renderCssADM()}


                            style={{ backgroundColor: `${coresHover.fundo}`, color: `${coresHover.fonte}` }}>
                            <img src={Adm} className='adm'></img>
                            <p >Administrador</p>


                            <img src={Seta} className='seta-baixo' style={{ transform: `rotate(${coresHover.seta}deg)` }} onClick={PagADM}></img>

                        </div>
                        <div className='linha-side-bar'></div>
                    </div>

                    : <></>

            }


            <div className='logo'>

                <img src={Logo} />
                <p>FLIP-YEAR</p>
                <p className='doisk'>2000</p>

            </div>

        </div>
    </div>
    )



}