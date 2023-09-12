import './index.scss';
import Carrinho from '../../ui/assets/images/progress_pag_assets/carrinho_logo.png';
import Cartao from '../../ui/assets/images/progress_pag_assets/cartao_progresso_pagamento 1.png';
import Confirmacao from '../../ui/assets/images/progress_pag_assets/olho_progresso_pagamento 1.png';
import Concluir from '../../ui/assets/images/progress_pag_assets/confirm 1.png';
import Pista from '../../ui/images/pista.png';
import Seta from '../../ui/images/setabaixa.png';
import Sonic from '../../ui/images/sonic-running.gif';
import Atari from '../../ui/assets/images/atari_console.png';
import CabecalhoVazio from '../../ui/components/cabecalhoSimples';
import Rodape from '../../ui/components/rodape';


export default function Pagamento75(){
    return(
        <>
            <div className='container_pag75'>
                <CabecalhoVazio />
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
                        <img src={Sonic} style={{width: "55px"}}/>

                    </div>
                    <div>
                        <img src={Concluir}/>
                        <p>Concluir</p>
                    </div>
                </div> 
                <div className='pista'> </div>  
            </div>
            
            <div className='titulo_infom_pedidos'>
                <img src={Confirmacao}/>
                <p>Informações do Pedido</p>
            </div>
    <div className='dados_lista_resumos'>
        <div className='dados_produtos'>
            <div className='dados_pessoais_pag75'>
                <div className='coluna_dados'>
                    <div>
                        <h1>Dados Pessoais</h1>
                        <p>informações que serão inseridas na nota fiscal</p>
                    </div>
                    <div className='dados_inform'>
                        <p>nome{}</p>                
                        <div>
                            <h1>CPF:</h1>
                            <p>{}123311</p>
                        </div>
                        <div>
                            <h1>Celular:</h1>
                            <p>{}2121321123</p>
                        </div>
                        <div>
                            <h1>Email:</h1>
                            <p>{}manoelgomes@gmail.com</p>
                        </div>
                        <div>
                            <h1>CEP:</h1>
                            <p>04612321</p>
                        </div>
                    </div>
                </div>
                <div className='coluna_dados'>
                    <div>
                        <h1>Endereço de Entrega</h1>
                        <p>este é o endereço de entrega onde seu pedido será enviado </p>
                    </div>
                    <div className='dados_inform'>
                      <p>rua{}</p>                 
                        <div>
                            <h1>Número:</h1>
                            <p>{}123311</p>
                        </div>
                        <div>
                            <h1>Bairro:</h1>
                            <p>{}2121321123</p>
                        </div>
                        <div>
                            <h1>CEP:</h1>
                            <p>{}12321</p>
                        </div>
                        <div>
                            <h1>Cidade:</h1>
                            <p>São Paulo</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lista_produtos75'>
                <div className='titulo_pag75'>
                    <img src={Carrinho}/>
                    <p>Lista de Produtos</p>
                </div>
                <div className='produtos75'>
                     <div>
                      <img src={Atari}/>
                        <p>{}Não utilizado Nintendo Original Gameboy Console Game Boy do Japão</p>
                    </div>   
                    <div className='qtd_preco75'>
                        <div style={{color: '#69FF8B'}}>
                            <p><span>qtd</span></p>
                            <p><span>Preço</span></p>
                        </div>
                        <div>
                            <p>{}1</p>
                            <p>{}R$ 999,99</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='resumo_pedido'>
            <div>
                 <p>Resumo</p>

                <div className='valores_resumo75'>
                    <div>
                        <p>SUBTOTAL</p>
                        <p>FRETE</p>
                        <p>CUPOM</p>
                    </div>
                    <div>
                        <p>R$ {} 999,99</p>
                        <p>R$ {} 999,99</p>
                        <p>R$ {} 999,99</p>
                    </div>
                </div>
                <div className='total_compra75'>
                    <p>TOTAL</p>
                    <p>R${} 999,99</p>
                </div>
            </div>
            
            <div className='finalizar75'>
                <img src={Carrinho}/>
                <p>Finalizar</p>
            </div>
        </div>  
    </div>
    </div>
            <Rodape />
        </>
    )
}
