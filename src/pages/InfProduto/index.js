import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

import './index.scss'

import axios from "axios";

import Usuario from "../../ui/assets/images/NavBar_assets/usuario_logo.png";
import yum from '../../ui/assets/images/imageExamples/super_famicon_yum.png'
import yum_costa from '../../ui/assets/images/imageExamples/yum game_tras 1.png'
import yum_fita from '../../ui/assets/images/imageExamples/yum fita_frente 1.png'
import hermes from '../../ui/assets/images/compraPage_assets/hermes_express.png'
import red_star from '../../ui/assets/images/compraPage_assets/re_star_company.png'
import seta from '../../ui/assets/images/compraPage_assets/seta.png'
import NavBar from "../../ui/components/navBar"
import Comments from "../../ui/components/comments";
import CardProdutoCtlg from "../../ui/components/card-produto-ctlg";
import Rodape from "../../ui/components/rodape";

export default function InfProduto() {
    const [isHideOptions, setIsHideOptions] = useState(false);
    const [ang, setAng] = useState('0');
    const [hideBuyOptions, setHideBuyOptions] = useState('');
    const [IsHideReportPopUp, setIsHideReportPopUp] = useState(false);

    const[comments, setComments] = useState([])


    const GetComments = async () =>{
        let res = await axios.get('http://localhost:5000/comentarios?pagina=1')

        console.log(res.data)
        setComments(res.data)
    }



    function hideValid() {
        setIsHideOptions(true)
        setHideBuyOptions('none')
        setAng('90')

        if (isHideOptions) {
            setIsHideOptions(false);
            setHideBuyOptions('flex')
            setAng('0')
        }
    }

    useEffect(() =>{
    GetComments()
    }, []);


    return (
        <div className="pagina-produto">
            <NavBar />
          
            <div className="infos">
                <div className="txt-img">
                    <div className="imgs-produto">
                        <div className="mini-imgs">
                            <div className="mini-img">
                                <img src={yum} alt="" />
                            </div>

                            <div className="mini-img">
                                <img src={yum_costa} alt="" />
                            </div>

                            <div className="mini-img">
                                <img id="fita" src={yum_fita} alt="" />
                            </div>

                            <div className="mini-img">
                                <img src={yum} alt="" />
                            </div>
                        </div>
                        <div className="div_imagem">
                            <div className="imagem">
                                <img src={yum} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="compra">
                    <div className="nome-produto">
                        <h1>Super Famicon Yum</h1>
                        <div></div>
                    </div>

                    <div className="estado">
                        <p>Estado: Seminovo</p>
                    </div>

                    <div className="preco">
                        <h2>R$800,00</h2>
                        <p>Ou 10x de R$80,00</p>
                        <div></div>
                    </div>

                    <div className="frete">
                        <label for="CEP"> <h4>Onde entregar?</h4> </label>

                        <div className="search-bar">
                            <input id="CEP" type="text" placeholder="Digite seu CEP" />
                        </div>
                    </div>



                    <div className="envio">
                        <span onClick={hideValid} style={{ display: "flex", cursor: "pointer", textAlign: "center" }}>
                            <h4 > Opções de Entrega </h4>
                            <a style={{ transform: `rotate(${ang}deg)`, marginLeft: 7 }}>  {'>'} </a>
                        </span>
                        {isHideOptions &&
                            <>
                                <div className="tipo-envio">
                                    <div className="env-hermes">
                                        <button>
                                            <div>
                                                <img src={hermes} alt="" />
                                                <h4>Hermes Express</h4>
                                            </div>

                                            <div>
                                                <p>Receba em até 5 dias úteis</p>
                                                <p>R$15,00</p>
                                            </div>

                                        </button>
                                    </div>

                                    <div className="linha2"></div>

                                    <div className="env-star">
                                        <button>
                                            <div>
                                                <img src={red_star} alt="" />
                                                <h4>Red Star Company</h4>
                                            </div>

                                            <div>
                                                <p>Receba em até 2 dias úteis</p>
                                                <p>R$25,00</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </>
                        }

                    </div>
                    <div className="buttons" style={{ display: `${hideBuyOptions}` }}>
                        <button id="button-compra">Compre já</button>
                        <button id="button-carrinho">Adicionar ao Carrinho</button>
                    </div>
                </div>
            </div>

            <div className="product-details">
                <div className="linha">
                    <h1>Sobre</h1>
                </div>
                <p>Yam Yam é um jogo de tiro em 3D com elementos de RPG, onde um garoto-toupeira chamado Magu Magu e seu animal de estimação, Yam Yam, embarcam em uma aventura por 28 missões. Eles viajam entre vilas, enfrentando fases de tiro em 3D para derrotar monstros, ganhar pontos de experiência e coletar recompensas. O jogo apresenta elementos de RPG, como comprar equipamentos e completar tarefas nas vilas, mas reseta o progresso do personagem após cada missão, como se fosse um sonho.</p>
            </div>

            <div className="comments-area">
                <h1>Avaliações</h1>

                <div className="escrita">
                    <img src={Usuario} alt="" />
                    <input type="text" placeholder="Deixe um comentário" />
                </div>

                <Comments/>
                <Comments/>
                <Comments/>

            </div>

            <div className="other-products">
                <div className="ot-tittle">
                    <h1>Outros Produtos</h1>
                </div>

                <div className="products">
                    <img id="setaInversa" src={seta} alt="" />
                        <CardProdutoCtlg />
                    <img src={seta} alt="" />
                </div>
            </div>
            <Rodape />
        </div>
    )
}