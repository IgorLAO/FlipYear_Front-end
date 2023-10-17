import './index.scss';
import Rodape from '../../ui/components/rodape';
import CabecalhoSimples from '../../ui/components/cabecalhoSimples';
import Carrinho from '../../ui/assets/images/progress_pag_assets/carrinho_logo.png'
import Cartao from '../../ui/assets/images/progress_pag_assets/cartao_progresso_pagamento 1.png';
import Confirmacao from '../../ui/assets/images/progress_pag_assets/olho_progresso_pagamento 1.png'
import Concluir from '../../ui/assets/images/progress_pag_assets/confirm 1.png';
import Sonic from '../../ui/assets/images/progress_pag_assets/sonicRunning_gif.png';
import CarrinhoBranco from '../../ui/assets/images/progress_pag_assets/carrinhoBranco.png';

// import { ListProd } from '../../../../FlipYear-Back-end/api/src/repositorys/produtos/produtosRepository.js';

export default function Pagamento25() {


    return (
        <>
            <CabecalhoSimples />
            <div className="container_pag25">
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
                            <img src={Sonic} />
                        </div>
                        <div>
                            <img src={Concluir} />
                            <p>Concluído</p>
                        </div>
                    </div>
                    <div className='pista'></div>
                </div>

                <div className='titulo_carrinho'>
                    <div>
                        <img src={Carrinho} />
                        <p>Meu Carrinho</p>
                    </div>
                </div>

                <div className='finalizar-produtos'>
                    <div className='inform_prod'>
                        <div className='container_lista'>
                            <div className='lista_produtos'>
                                <div className='cabecalho_prod'>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Produto</th>
                                                <th>Qtd</th>
                                                <th>Preço</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>#01</td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                            <div className='resumo_pedido'>
            
                            </div>
                        </div>
                    </div>

                    <div className='resumo_pedido'>
                        <div className='valores_pedido'>
                            <div className='titulo_resumo'>
                                <p>Resumo</p>
                                <div></div>
                            </div>
                            <div className='dados_pedido'>
                                <div>
                                    <p>SUBTOTAL</p>
                                    <p>R${ } 999,99</p>
                                </div>
                                <div>
                                    <p>FRETE</p>
                                    <p>R${ } 999,99</p>
                                </div>
                                <div>
                                    <p>CUPOM</p>
                                    <p>R${ } 999,99</p>
                                </div>
                            </div>
                            <div className='total_pedido'>
                                <p>TOTAL</p>
                                <p>R${ } 999</p>
                            </div>
                            <div className='cupom_desconto'>
                                <input type="text" placeholder='Cupom de desconto' />
                                <a>Aplicar</a>
                            </div>
                        </div>
                        <div className='finalizar'>
                            <img src={CarrinhoBranco} />
                            <p>Finalizar</p>
                        </div>
                    </div>
                </div>
            </div>
            <Rodape />
        </>

    )
}