import { Link } from "react-router-dom"
import { useState } from "react"
import './index.scss'
import Cabecalho from "../../ui/components/cabecalho/cabecalho"
import yum from '../../ui/images/super_famicon_yum.png'
import yum_costa from '../../ui/images/yum game_tras 1.png'
import yum_fita from '../../ui/images/yum fita_frente 1.png'
import hermes from '../../ui/images/hermes_express.png'
import red_star from '../../ui/images/re_star_company.png'

export default function InfProduto(){

    return(
        <div className="pagina-produto">
            <Cabecalho />
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
                                <p>X4</p>
                                <img src={yum} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="txt">
                        <h1>sobre</h1>
                        <div className="linha"></div>
                        <p>Yam Yam é um jogo de tiro em 3D com elementos de RPG, onde um garoto-toupeira chamado Magu Magu e seu animal de estimação, Yam Yam, embarcam em uma aventura por 28 missões. Eles viajam entre vilas, enfrentando fases de tiro em 3D para derrotar monstros, ganhar pontos de experiência e coletar recompensas. O jogo apresenta elementos de RPG, como comprar equipamentos e completar tarefas nas vilas, mas reseta o progresso do personagem após cada missão, como se fosse um sonho.</p>
                    </div>
                </div>

                <div className="compra">
                    <div className="nome-produto">
                        <h1>Super Famicon Yum</h1>
                    </div>

                    <div className="estado">
                        <p>Estado: Seminovo</p>
                    </div>

                    <div className="preco">
                        <h2>R$800,00</h2>
                        <p>Ou 10x de R$80,00</p>
                    </div>

                    <div className="frete">
                        <h2>Onde entregar?</h2>
                        <button>
                            <div>
                                <img src={hermes} alt="" />
                                <h4>Hermes Express</h4>
                            </div>
                            <p>Receba em até 5 dias úteis</p>
                            <p>R$15,00</p>
                        </button>

                        <button>
                            <div>
                                <img src={red_star} alt="" />
                                <h4>Red Star Company</h4>
                            </div>
                            <p>Receba em até 2 dias úteis</p>
                            <p>R$25,00</p>
                        </button>
                    </div>

                    <div className="button-compra">
                        <button>Compre já</button>
                        <button>Adicionar ao Carrinho</button>
                    </div>
                </div>
            </div>
        </div>
    )
}