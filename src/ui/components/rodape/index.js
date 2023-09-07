import './index.scss';
import ZAP from '../../images/whatsapp.png'
import Tel from '../../images/telefone.png'
import Email from '../../images/email.png'
import CertSeg from '../../images/protection_logo.png'
import Visa from '../../images/visa.png'
import MercadoPago from '../../images/mercado_pago.png'
import MasterCard from '../../images/mastercard.png'
import HyperCard from '../../images/hypercard.png'
import Pix from '../../images/pix.png'
import  Boleto from '../../images/boleto.png'
import Youtube from '../../images/youtube_logo.png'
import Instagram from '../../images/instagram_logo.png'
import Facebook from '../../images/facebook_logo.png'


export default function Rodape(){
    return(
        <>
            <div className="container_rodape">
                <div className="topicos">
                    <div >
                        <h1>CONTEÚDO</h1>

                        <a>Fale conosco</a>
                        <a>Minha Conta</a>
                        <a>A Empresa</a>
                        <a>Atendimento ao Cliente</a>
                        <a>Garantia e Devoluções</a>
                        <a>Política de Privacidade</a>
                    </div>
                    <div>
                        <h1>CATEGORIAS</h1>

                        <a>Nintendo</a>
                        <a>Nintendo</a>
                        <a>Nintendo</a>
                        <a>Nintendo</a>
                        <a>Nintendo</a>
                        <a>Nintendo</a>
                    </div>
                    <div className="contato">
                        <h1>CONTATO</h1>

                        <div>
                            <img src={Tel}/>
                            <p>Telefone:(11)9999-9999</p>
                        </div>
                        <div>
                            <img src={ZAP}/>
                            <p>Whatsapp: (11)9999-9999</p>
                        </div>
                        <div>
                            <img src={Email}/>
                            <p>E-mail: garotodeprograma@gmail.com</p>
                        </div>
                    </div>
                    <div className="formas_pagamento">
                        <h1>FORMAS DE PAGAMENTO</h1>
                        <div className="images_pagamento">
                            <div>
                                <img src={Visa} />  
                                <img src={MercadoPago}/>
                                <img src={MasterCard}/>
                            </div>
                            <div>
                                <img src={HyperCard}/>
                                <img src={Pix}/>
                                <img src={Boleto}/>
                            </div>
                        </div>
                        <div className="redes_sociais">
                            <h1>Siga-nos nas Redes Sociais</h1>

                            <div>
                                <img src={Facebook}/>
                                <img src={Instagram}/>
                                <img src={Youtube}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cert_seguranca">
                        <h1>CERTIFICADOS DE SEGURANÇA</h1>

                        <img src={CertSeg}/>
                </div>
                    <div className="copyright">
                        <div></div>
                        <p>Copyright © 2023 FLIPER2000 Inc. Todos os direitos reservados.</p>
                    </div>
            </div>
        </>
    )
}