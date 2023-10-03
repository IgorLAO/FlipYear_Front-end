import NavBar from '../../ui/components/navBar';
import Rodape from '../../ui/components/rodape'
import CarrinhoIMG from '../../ui/assets/images/perfil-pessoal/image-removebg-preview (8) 2.png'
import Fantasma1 from '../../ui/assets/images/perfil-side-bar/fantasma 2.png'
import Fantasma2 from '../../ui/assets/images/perfil-side-bar/fantasma4.png'

import './index.scss';

export default function Carrinho(){

    return(
        <div className='pag-carrinho'>
            <NavBar/>
            <div className='pedidos'>
                    <img src={CarrinhoIMG}></img>
                <div className='titulo'>
                    <p>Meus Pedidos</p>
                <div className='lb-carrinho'></div>
                </div>
            </div>


            <div className='vazio'>
                <img src={Fantasma2} className='fantasma2'></img>
                <p>Parece que esta vazio :{`(`}</p>
                <img src={Fantasma1} className='fantasma1'></img>
            </div>

            <Rodape></Rodape>
        </div>



    )




}