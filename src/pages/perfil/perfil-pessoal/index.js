import './index.scss';
import BannerGato from '../../../ui/assets/images/perfil-publico_assets/5759cdb17f90d64d25e9e59854181dde 2.png'
import Corvo from '../../../ui/assets/images/perfil-publico_assets/download 2.png'
import CardPedido2 from '../../../ui/components/perfil/card-pedido2'
import Lapis from '../../../ui/assets/images/perfil-pessoal/105b06c79bc402f 1.png'
import Carrinho from '../../../ui/assets/images/perfil-pessoal/image-removebg-preview (8) 2.png'
export default function PerfilPessoal(){

    return(

        <div className='perfil-pag'> 
        <img src={BannerGato}></img>

        <div className='perfil-infos'>


            <div className='meio'>
                <div className='pfp'>
                    <img src={Corvo}></img>
                </div>
                <p className='nome'>Ind0m4bl3_Cr0w</p>
            </div>

            <img className='lapis' src={Lapis}></img>

        </div>

        

        <div className='pedidos'>
            <div className='carrinho-titulo'>
                <img className='carrinho'src={Carrinho}></img>
                <p className='titulo'>Meus Pedidos </p>
            </div>
            <div className='linha-branca'> </div>
        </div>
        
            <CardPedido2></CardPedido2>
            <CardPedido2></CardPedido2>            
            <CardPedido2></CardPedido2>
            <CardPedido2></CardPedido2>
            <CardPedido2></CardPedido2>
            

        </div>



    )




}