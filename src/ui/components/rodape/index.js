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

        <div className='comp-rodape'>


        <div className='infos'>

        <div className='conteudo'>

        <h3>Conteúdo</h3>

        <p>Fale Conosco</p>
        <p>Minha Conta</p>
        <p>A Empresa</p>
        <p>Atendimento ao Cliente</p>
        <p>Garantias e Devoluções</p>
        <p>Política de Privacidade</p>

        <div className='certificados'>

<h3>certificados de segurança</h3>

<img src={CertSeg}/>

</div>


        </div>

        <div className='categorias'>

        <h3>Categorias</h3>

        <p>Consoles</p>
        <p>Jogos</p>
        <p>Colecionador</p>


        </div>

        <div className='contato'>

        <h3>Contato</h3>

        <div className='contato-linha'>
        <img src={Tel}/><p>Telefone 
        <br/> (11) 9999-9999
        </p>
        </div>


        <div className='contato-linha'>
        <img src={ZAP}/><p>Whatsapp: 
        <br/> (11) 9999-9999
        </p>
        </div>


        <div className='contato-linha'> 
        <img src={Email}/><p>E-mail: 
        <br/> manoelgomes@gmail.com
        </p>
        </div>
        </div>

    <div className='info-2'>

    <div className='formas-pag'>
            <h3>Formas de pagamento</h3>

            <div className='imagens-pag'>
            <img src={Visa}/>
            <img src={MercadoPago}/>
            <img src={MasterCard}/>
            </div>

            <div className='imagens-pag'>
            <img src={HyperCard}/>
            <img src={Pix}/>
            <img src={Boleto}/>
            </div>


        <div className='redes-sociais'>

            <h6>Siga-nos nas redes sociais</h6>

            <img src={Facebook}/>
            <img src={Instagram}/>
            <img src={Youtube}/>
        </div>

    </div>

        
        </div>

        </div>

        



        <hr/>

        

        <p>Copyright © 2023 FLIPER2000 Inc. Todos os direitos reservados.</p>



        </div>



    )




}