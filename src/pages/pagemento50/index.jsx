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

export default function Pagamento(){
    return(
        <>
        
        <div className="container_pag50"> 
            <CabecalhoVazio />
            oi
            <div className='estado_pag'>
                <div className='icons_pag'>
                    <div>
                        <img src={Carrinho} />
                        <p>Carrinho</p>
                    </div>  
                    <div>
                        <img src={Cartao}/>
                        <p>Pagamento</p>
                    </div>
                    <div>
                        <img src={Confirmacao}/>
                        <p>Confirmação</p>
                    </div>
                    <div>
                        <img src={Concluir}/>
                        <p>Concluir</p>
                    </div>
                </div> 
                <div id='sonic'>
                    <img src={Sonic} style={{width: '55px'}}/>
                </div>
                
                <div className='pista'> </div>  
            </div>
            
                <div className='pagamento_50'>
                    <img src={Cartao}/>
                    <p>Pagamento</p>
                </div>
                <div className='pag_pix'>
                    <div className='opcoes_pag'>
                        <div id='Pix'>
                            <p>Pix</p>
                        </div>
                        <div>
                            <p>Boleto Bancário</p>
                        </div>
                        <div>
                            <p>Cartão de Crédito</p>
                        </div>
                    </div>

                    <div className='aprov_pix'>
                        <h1>PIX</h1>
                            <p>Com aprovação imediata que torna a expedição mais rápida do pedido.</p>
                                    
                        <div>
                            <button id='but_voltar'>Voltar</button>
                            <button id='but_concluir'>Concluir</button>
                        </div>  
                    </div>    
                </div>

                <div className='pag_boleto'>
                    <div className='opcoes_pag'>
                        <div>
                            <p>Pix</p>
                        </div>
                        <div id='boleto'>
                            <p>Boleto Bancário</p>
                        </div> 
                        <div>
                            <p>Cartão de Crédito</p>
                        </div>
                    </div>

                    <div className='aprov_boleto'>
                        <h1 >Boleto Bancário</h1>
                            <p>você podera visualizar ou imprimir o boleto após a finalização de pedido. Mas fique de olho! Passado  a data do vencimento seu pedido perderá automaticamente a validade. </p>
                        <div>
                            <button id='but_voltar' >Voltar</button>
                            <button id='but_concluir'>Concluir</button>
                        </div>  
                    </div>     
                </div>

                <div className='pag_cartao'>
                    <div className='opcoes_pag'>
                        <div id='Pix'>
                            <p>Pix</p>
                        </div>
                        <div >
                            <p>Boleto Bancário</p>
                        </div>
                        <div id='cartao'>
                            <p>Cartão de Crédito</p>
                        </div>
                    </div>
                    <div className='aprov_cartao'>
                        <h1>Cartão de Crédito</h1>  
                        <div className='dados_cartao'>
                            <div>
                                <p>Nome Completo</p>
                                <input />
                            </div>
                            <div>
                                <p>Número do Cartão</p>
                                <input />
                            </div>
                                <div className='vencimento_cartao'>
                                    <div>
                                        <p>Validade</p> 
                                        <input /> 
                                    </div>
                                    <div>
                                        <p>Código de verificação (CVV)</p>
                                        <input />
                                    </div>
                                    <div>
                                        <p>Data de nascimento</p>
                                        <input type='number'/>
                                    </div>
                                </div>
                            <div>
                                <p>CPF do Titular</p>
                                <input type='number'/>
                            </div>
                            <div id='parcelas_50'>
                                <p>Parcelar em -</p>
                                <img src={Seta}/>
                            </div>
                        </div>
                    </div>  
                </div>
                        
        </div> 
        <Rodape />
        </>       
        
    )
}