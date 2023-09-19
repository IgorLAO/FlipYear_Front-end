import './index.scss';

import Carrinho from '../../ui/assets/images/progress_pag_assets/carrinho_logo.png';
import Cartao from '../../ui/assets/images/progress_pag_assets/cartao_progresso_pagamento 1.png';
import Confirmacao from '../../ui/assets/images/progress_pag_assets/olho_progresso_pagamento 1.png';
import Concluir from '../../ui/assets/images/progress_pag_assets/confirm 1.png';
import Pista from '../../ui/images/pista.png';
import Seta from '../../ui/images/setabaixa.png';
import Sonic from '../../ui/images/sonic-running.gif';

import CabecalhoVazio from '../../ui/components/cabecalhoSimples';
import Rodape from '../../ui/components/rodape';
import { useEffect, useState } from 'react';

export default function Pagamento() {
    const [isHidePix, setPix] = useState(true);
    const [isHideBoleto, setIsHideBoleto] = useState(false);
    const [isHideCartao, setIsHideCartao] = useState(false);
    const [vNumbers, setVNumbers] = useState(1)

    const Hide = () => {

    }

    return (
        <>

            <div className="container_pag50">
                <CabecalhoVazio />
                <div className='estado_pag'>
                    <div className='icons_pag'>
                        <div>
                            <img src={Carrinho} />
                            <p>Carrinho</p>
                        </div>
                        <div>
                            <img src={Cartao} />
                            <p>Pagamento</p>
                            <img src={Sonic} style={{ width: '55px' }} />
                        </div>
                        <div>
                            <img src={Confirmacao} />
                            <p>Confirmação</p>
                        </div>
                        <div>
                            <img src={Concluir} />
                            <p>Concluir</p>
                        </div>
                    </div>

                    <div className='pista'> </div>
                </div>

                <div className='pagamento_50'>
                    <img src={Cartao} />
                    <p>Pagamento</p>
                </div>

                <div className='ModosPag'>
                    <div className='opcoes_pag'>

                        {() => {
                            switch (vNumbers) {
                                case 1:
                                    setPix(true);
                                case 2:
                                    return (<div>aaaaaaaaaaa</div> );
                                case 3:
                                    setIsHideCartao(true);
                            }
                        }}

                        <div id='Pix' onClick={() => setVNumbers(1)}>
                            <p>Pix</p>
                        </div>

                        <div onClick={() => setVNumbers(2)}>
                            <p >Boleto Bancário</p>
                        </div>

                        <div onClick={() => setVNumbers(3)}>
                            <p>Cartão de Crédito</p>
                        </div>

                    </div>
                    <div className='contents'>

                        {isHidePix &&
                            <div className='aprov_pix'>
                                <h1>PIX</h1>
                                <p>Com aprovação imediata que torna a expedição mais rápida do pedido.</p>
                            </div>
                        }

                        {isHideBoleto &&
                            <div className='aprov_boleto'>
                                <h1 >Boleto Bancário</h1>
                                <p>você podera visualizar ou imprimir o boleto após a finalização de pedido. Mas fique de olho! Passado  a data do vencimento seu pedido perderá automaticamente a validade. </p>

                            </div>
                        }

                        {isHideCartao &&
                            <div className='aprov_cartao'>
                                <h1>Cartão de Crédito</h1>
                                <div className='dados_cartao'>
                                    <div>
                                        <p>Nome Completo</p>
                                        <input type='text' />
                                    </div>
                                    <div>
                                        <p>Número do Cartão</p>
                                        <input type='number' />
                                    </div>
                                    <div className='vencimento_cartao'>
                                        <div>
                                            <p>Validade</p>
                                            <input />
                                        </div>
                                        <div>
                                            <p> CVV </p>
                                            <input type='number' />
                                        </div>
                                        <div>
                                            <p>Data de nascimento</p>
                                            <input type='number' />
                                        </div>
                                    </div>
                                    <div>
                                        <p>CPF do Titular</p>
                                        <input type='number' />
                                    </div>
                                    <div>
                                        Parcelar Em -
                                        <select>
                                            <option> 0 </option>
                                            <option> 0 - </option>
                                            <option> 0 </option>
                                            <option> 0 </option>
                                            <option> 0 </option>
                                            <option> 0 </option>

                                        </select>
                                    </div>
                                </div>
                            </div>}

                        <div className='VoltarConcluir'>
                            <button id='but_voltar'>Voltar</button>
                            <button id='but_concluir'>Concluir</button>
                        </div>

                    </div>

                </div>





            </div>
            <Rodape />
        </>

    )
}