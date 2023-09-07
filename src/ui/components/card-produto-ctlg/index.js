import './index.scss';
import Atari from '../../../assets/images/imagesCardProduto/nintendo_Console-removebg-preview 102.png'
import Estrela from '../../../assets/images/imagesCardProduto/estrela_vazia 6.png'

export default function CardProdutoCtlg(){

    return(
        <div className='card-produto-ctlg'>

            <div className='card'>

                <img src={Atari}></img>
                <p className='nm-produto'> Atari 3000 </p>
                <p className='info-produto'> Atari inc. <p>•</p> 
                <p className='estado-produto'>Seminovo</p>
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="284" height="2" viewBox="0 0 284 2" fill="none">
                <path d="M0.816406 1.22266H282.724" stroke="#0D3A3D" stroke-linecap="round"/>
                </svg>
                <p className='preco-produto'>R$ 99,90 </p>
                <p className='prec-produto-original'>RS$ 999,90 </p>

                <div className='avaliacao-produto'>
                    <img src={Estrela}></img>
                    <img src={Estrela}></img>
                    <img src={Estrela}></img>
                    <img src={Estrela}></img>
                    <img src={Estrela}></img>

                    <p className='avaliacao-decimal'>(3,5)</p>

                </div>

            </div>



        </div>





    )







}