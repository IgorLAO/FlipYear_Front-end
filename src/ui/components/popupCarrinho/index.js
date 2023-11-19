import './index.scss';

import linhaAstersico from '../../assets/images/carrinho_assets/linhaAsterisco.png'
import Logo from '../../assets/images/perfil-side-bar/arcade_Logo 21.png'
import linhaAsteriscoMenor from '../../assets/images/carrinho_assets/linhaAsteriscoMenor.png'
import Fantasma1 from '../../assets/images/carrinho_assets/fantasmapopupcarrinho1.png'
import Fantasma2 from '../../assets/images/carrinho_assets/fantasmapopupcarrinho2.png'
import ListagemCarrinho from './ListagemCarrinho.js'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ConsultaCarrinho } from '../../../api/carrinho.js';
import localStorage from 'local-storage';

export default function PopUpCarrinho({ setPopUpCarro }) {

    const estoragemLocal = localStorage('ADM_Logado')
    const [idUser, setIdUser] = useState(1);


    const [dataCarrinho, setDataCarrinho] = useState([]);
    const [total, SetTotal] = useState(0)

    

    function mostrarCarrinho() {

        setPopUpCarro((current) => !current);

    }


    async function PuxarCarrinho() {
        SetTotal(0);
        
        let respCarrinho = await ConsultaCarrinho(idUser);
        console.log(respCarrinho)
        setDataCarrinho(respCarrinho);
    }

    async function LimparCarrinho() {
        

    }

    async function CalcularTotal() {

        let total = 0;
        dataCarrinho.map((item) => {

            if (item.BT_PROMOCAO == true) {
                let calculo = item.VL_PRECO_PROMOCIONAL * item.QTD_PRODUTO_CARRINHO;
                total = total + calculo;
            }
            else {
                let calculo = item.VL_PRECO * item.QTD_PRODUTO_CARRINHO;
                total = total + calculo;
            }
        })

        SetTotal(total);
    }

    useEffect(() => {
        PuxarCarrinho();
        CalcularTotal();

       
    }, [dataCarrinho]);


    return (
        <div className='popUp-carrinho'>

            <p className='x' onClick={mostrarCarrinho}>X</p>

            <div className='puc-Logo'>
                <img src={Logo}></img>
                <p>FLIP-YEAR</p>
                <p className='puc-2000'>2000</p>
            </div>

            <div className='puc-campos'>

                <p>Qtd.</p>
                <p>Item</p>

                <p>Preço</p>
            </div>

            <img src={linhaAstersico}></img>


            {dataCarrinho.map((item) =>

                <ListagemCarrinho
                    qtd={item.QTD_PRODUTO_CARRINHO}
                    nome={item.NM_PRODUTO}
                    precoOriginal={item.VL_PRECO}
                    precoPromocional={item.VL_PRECO_PROMOCIONAL}
                    promocao={item.BT_PROMOCAO}
                    idProduto={item.ID_PRODUTO}>
                        
                    </ListagemCarrinho>

            )}


            {
                (dataCarrinho.length > 0)

                    ? <></>

                    : <div className='puc-listaPedidos'>

                        <img src={Fantasma1} className='puc-fantasma1'></img>

                        <p>Me parece vazio :{'('}</p>

                        <img src={Fantasma2} className='puc-fantasma2'></img>
                    </div>


            }
            <img src={linhaAstersico}></img>


            <div className='puc-total'>
                <p className='titulo'>Total</p>
                <p className='valor'>$ {total}</p>
            </div>

            <div className='puc-asteriscoCentro'>

                <img src={linhaAsteriscoMenor}></img>
            </div>

            <div className='puc-btn-finalizar'>
                <svg xmlns="http://www.w3.org/2000/svg" width="185" height="56" viewBox="0 0 185 56" fill="none">
                    <g opacity="0.5">
                        <rect x="8.30078" y="10.3594" width="169.756" height="35.5078" fill="black" />
                        <rect x="5" y="11.9492" width="3.30189" height="32.8986" fill="black" />
                        <rect x="13.2344" y="7" width="161.275" height="4.97369" fill="black" />
                        <rect x="174.562" y="11.9492" width="5.4384" height="31.9911" fill="black" />
                        <rect x="13.2344" y="44.0273" width="161.275" height="4.97369" fill="black" />
                    </g>
                    <g filter="url(#filter0_d_428_120)">
                        <rect x="13.2031" y="12.1094" width="159.323" height="31.78" fill="black" />
                        <rect x="10.1035" y="13.5312" width="3.09896" height="29.4447" fill="black" />
                        <rect x="17.5781" y="10.5859" width="151.667" height="2.94447" fill="black" />
                        <rect x="169.244" y="13.5312" width="5.10417" height="28.6324" fill="black" />
                        <rect x="17.5781" y="42.1641" width="151.667" height="3.046" fill="black" />
                    </g>
                    <defs>
                        <filter id="filter0_d_428_120" x="0.103516" y="0.585938" width="184.244" height="54.625" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_428_120" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_428_120" result="shape" />
                        </filter>
                    </defs>
                </svg>

                <p>Finalizar</p>

            </div>



        </div>


    )


}