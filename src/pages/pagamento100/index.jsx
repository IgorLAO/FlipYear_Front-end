import './index.scss';
import CabecalhoSimples from "../../ui/components/cabecalhoSimples";
import Rodape from '../../ui/components/rodape';

import Carrinho from '../../ui/assets/images/progress_pag_assets/carrinho_logo.png';
import Cartao from '../../ui/assets/images/progress_pag_assets/cartao_progresso_pagamento 1.png';
import Confirmacao from '../../ui/assets/images/progress_pag_assets/olho_progresso_pagamento 1.png';
import SonicEspera from '../../ui/assets/images/progress_pag_assets/sonic_esperando_progresso_100% 1.png';
import Concluir from '../../ui/assets/images/progress_pag_assets/confirm 1.png';


export default function Pagamento100() {
    return (
        <>
            <CabecalhoSimples />
            <div className="container_pag100">
                <div className='estado_pag'>
                    <div className='icons_pag'>
                        <div>
                            <img src={Carrinho} />
                            <p>Carrinho</p>
                        </div>
                        <div>
                            <img src={Cartao} />
                            <p>Pagamento</p>
                        </div>
                        <div>
                            <img src={Confirmacao} />
                            <p>Confirmação</p>

                        </div>
                        <div>
                            <img src={Concluir} />
                            <p>Concluir</p>
                            <img src={SonicEspera} style={{ width: "55px" }} />
                        </div>
                    </div>
                    <div className='pista'> </div>
                </div>
                <div className='pedido_concluido'>
                    <img src={SonicEspera}/>
                    <div className='mensagem_concluido'>
                        <div>
                            <img src={Concluir} />
                            <h1>Seu pedido foi concluido!</h1>
                        </div>
                        <div id='codigo_pedido'>
                            <p>O código do seu pedido é</p>
                            <h1>{}9999</h1>
                        </div>
                    </div>
                        <a id='pedidos'>Ver meus pedidos</a>
                    <div className='opcoes_navegacao'>
                        <button id='navegar'>Continuar navegando</button>
                    </div>

                </div>
            </div>
            <Rodape />
        </>
    )
}