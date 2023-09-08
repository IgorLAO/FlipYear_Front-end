import './index.scss';
import Atari from '../../../assets/images/imagesCardProduto/nintendo_Console-removebg-preview 102.png'
import Estrela from '../../../assets/images/imagesCardProduto/estrela_vazia 6.png'

export default function CardProdutoCtlg(){

    return(
        <div className='card-produto-ctlg'>

            <div className='card'>

                <img src={Atari}></img>
                <p className='nm-produto'> Atari 3000 </p>

                <div className='desc-info'>
                <p className='info-produto' id='cinza-pequeno'> Atari inc. </p>
                <p id='cinza-pequeno' className='ponto'>•</p> 
                <p className='estado-produto' id='cinza-pequeno'>Seminovo</p>
                
                </div>
                <svg className = 'linha' xmlns="http://www.w3.org/2000/svg" width="284" height="2" viewBox="0 0 284 2" fill="none">
                <path d="M0.816406 1.22266H282.724" stroke="#0D3A3D" stroke-linecap="round"/>
                </svg>
                <p className='preco-produto'>R$ 99,90 </p>
                <p className='prec-produto-original' id='cinza-pequeno'>RS$ 999,90 </p>

                <div className='avaliacao-produto'>
                    <div className='estrelas'>
                    <img src={Estrela}></img>
                    <img src={Estrela}></img>
                    <img src={Estrela}></img>
                    <img src={Estrela}></img>
                    <img src={Estrela}></img>
                    </div>

                    <p className='avaliacao-decimal'>(3,5)</p>

                </div>

            </div>



        </div>





    )







}