import './index.scss';
import Atari from '../../assets/images/imagesCardProduto/nintendo_Console-removebg-preview 102.png'
import EstrelaVaziaEsquerda from '../../assets/images/imagesCardProduto/estrelavazia esquerda.png'
import EstrelaVaziaDireita from '../../assets/images/imagesCardProduto/estrelavaziadireita.png'
import EstrelaCheiaEsquerda from '../../assets/images/imagesCardProduto/estrelacheiaesquerda.png'
import EstrelaCheiaDireita from '../../assets/images/imagesCardProduto/estrelacheiadireita.png'
import Carrrinho from '../../assets/images/perfil-pessoal/image-removebg-preview (8) 2.png'
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CardProdutoCtlg(props) {

    const [qtdProdutos, SetQtdProdutos] = useState(0);
    const [limiteQtd, setLimiteQtd] = useState(props.estoque);
    const [idUser, setIdUser] = useState(3);
    const [idProduto, setIdProduto] = useState(props.idProduto);
    const [colecionador, setColecionador] = useState(props.colecionador);

    const [estrelaCheiaEsq1, setEstrelaCheiaEsq1] = useState(false);
    const [estrelaCheiaDir1, setEstrelaCheiaDir1] = useState(false);

    const [estrelaCheiaEsq2, setEstrelaCheiaEsq2] = useState(false);
    const [estrelaCheiaDir2, setEstrelaCheiaDir2] = useState(false);

    const [estrelaCheiaEsq3, setEstrelaCheiaEsq3] = useState(false);
    const [estrelaCheiaDir3, setEstrelaCheiaDir3] = useState(false);

    const [estrelaCheiaEsq4, setEstrelaCheiaEsq4] = useState(false);
    const [estrelaCheiaDir4, setEstrelaCheiaDir4] = useState(false);

    const [estrelaCheiaEsq5, setEstrelaCheiaEsq5] = useState(false);
    const [estrelaCheiaDir5, setEstrelaCheiaDir5] = useState(false);

    const [clicado, setClicado] = useState(false);

    function selectEstrelaEsq(){

        setEstrelaCheiaEsq1(true);




    }

    function selectEstEsq2(){

        setEstrelaCheiaEsq2(true);
        setEstrelaCheiaDir1(true);
        setEstrelaCheiaEsq1(true);
        



    }

    function selectEstDir2(){

        selectEstEsq2()
        setEstrelaCheiaDir2(true);



    }

    function unselectEstEsq2(){

        if(clicado == false){

            setEstrelaCheiaEsq2(false);
            unselectEstrelaDir()
            unselectEstrelaEsq()

        }


    }

    function unselectEstDir2(){


        if(clicado == false){


            setEstrelaCheiaDir2(false)
            unselectEstEsq2();


        }


    }

    function unselectEstrelaEsq(){

        if(clicado == false){

            setEstrelaCheiaEsq1(false)

        }

    }

    function selectEstrelaDir(){


        setEstrelaCheiaDir1(true);


    }

    function unselectEstrelaDir(){

        if(clicado == false){

            setEstrelaCheiaDir1(false);


        }




    }

    function ClickEsq(){

        setClicado((current) => !current);


    }

    function ClickDir(){

        setClicado((current) => !current);
        selectEstrelaDir();
        selectEstrelaEsq();


    }





    function AddQtdProduto() {
        SetQtdProdutos(qtdProdutos + 1);

        if (qtdProdutos >= limiteQtd) {
            SetQtdProdutos(limiteQtd);

        }
    }

    function ProdutoAdicionado() {

        toast.success("Produto Adicionado ao Carrinho!")


    }


    function ErroAdicionarProduto() {


        toast.error("Produto Não Adicionado ao Carrinho");


    }

    function MinusQtdProduto() {
        SetQtdProdutos(qtdProdutos - 1);

        if (qtdProdutos == 0) {
            SetQtdProdutos(0);

        }
    }




    async function AddNoCarrinho() {

        if (qtdProdutos >= 1) {

            let resposta = await axios.post('http://localhost:5000/carrinho', {
                usuario: idUser,
                produto: idProduto,
                qtd: qtdProdutos
            });
            let limite = limiteQtd - qtdProdutos;
            setLimiteQtd(limiteQtd - qtdProdutos);

            if (qtdProdutos > limite) {
                SetQtdProdutos(limite);

            }

            ProdutoAdicionado();



        }

        else {


            ErroAdicionarProduto();

        }




    }

    return (
        <div className='card-produto-ctlg'>

            <ToastContainer></ToastContainer>
            {
                (colecionador == true)
                    ? <div id='colecionador' className='card'>

                        <div className='qtd-produtos'>
                            <img src={Carrrinho} className='card-prod-carrinho' onClick={AddNoCarrinho}></img>
                            <p className='hover-opt' onClick={MinusQtdProduto}>-</p>
                            <p>{qtdProdutos}</p>
                            <p className='hover-opt' onClick={AddQtdProduto}>+</p>
                        </div>


                        <img src={Atari}></img>
                        <p className='nm-produto'> {props.nome} </p>

                        <div className='desc-info'>

                            <p className='infor-produto' id='cinza-pequeno'> {props.fabricante} </p>
                            <div className='ponto'>
                                <p>•</p>
                            </div>
                            <p className='estado-produto' id='cinza-pequeno'>{props.estado}</p>

                        </div>

                        <svg className='linha' xmlns="http://www.w3.org/2000/svg" width="284" height="2" viewBox="0 0 284 2" fill="none">

                            <path d="M0.816406 1.22266H282.724" stroke="#0D3A3D" stroke-linecap="round" />
                        </svg>
                        {
                            (props.promocao == 1)
                                ? <>
                                    <p className='preco-produto'> ${props.precoPromocao} </p>
                                    <p className='preco-produto-original' id='cinza-pequeno'> ${props.preco} </p>
                                </>
                                : <p className='preco-produto'> ${props.preco} </p>

                        }

                        <div className='avaliacao-produto'>

                            <div className='estrelas-linha'>

                                <div className='estrelas'>
                                    {estrelaCheiaEsq1 == true

                                    ? <img src={EstrelaCheiaEsquerda} onMouseLeave={unselectEstrelaEsq} onClick={ClickEsq}></img>

                                    
                                    :<img src={EstrelaVaziaEsquerda}  
                                    onMouseEnter={selectEstrelaEsq}
                                    onClick={ClickEsq}></img>

                                    }

                                    {estrelaCheiaDir1 == true
   
                                    ?<img src={EstrelaCheiaDireita} 
                                    onMouseLeave={() => {unselectEstrelaDir(); unselectEstrelaEsq();}} onClick={ClickDir}></img>
                                   

                                    :<img src={EstrelaVaziaDireita} 
                                    onMouseEnter={() => {selectEstrelaDir(); selectEstrelaEsq();}} onClick={ClickDir}></img>


                                    }


                                </div>

                                <div className='estrelas'>
                                    {estrelaCheiaEsq2 == true

                                    ? <img src={EstrelaCheiaEsquerda} onMouseLeave={unselectEstEsq2} onClick={ClickEsq}></img>

                                    
                                    :<img src={EstrelaVaziaEsquerda}  
                                    onMouseEnter={selectEstEsq2}
                                    onClick={ClickEsq}></img>

                                    }

                                    {estrelaCheiaDir2 == true
   
                                    ?<img src={EstrelaCheiaDireita} 
                                    onMouseLeave={unselectEstDir2} onClick={ClickDir}></img>
                                   

                                    :<img src={EstrelaVaziaDireita} 
                                    onMouseEnter={selectEstDir2} onClick={ClickDir}></img>


                                    }


                                </div>

  

                                <div className='estrelas'>
                                    <img src={EstrelaVaziaEsquerda}></img>
                                    <img src={EstrelaVaziaDireita}></img>
                                </div>

                                <div className='estrelas'>
                                    <img src={EstrelaVaziaEsquerda}></img>
                                    <img src={EstrelaVaziaDireita}></img>
                                </div>

                                <div className='estrelas'>
                                    <img src={EstrelaVaziaEsquerda}></img>
                                    <img src={EstrelaVaziaDireita}></img>
                                </div>

                            </div>

                            <p className='avaliacao-decimal'>({props.avaliacao})</p>

                        </div>

                    </div>

                    : <div className='card'>

                        <div className='qtd-produtos'>
                            <img src={Carrrinho} className='card-prod-carrinho' onClick={AddNoCarrinho}></img>
                            <p className='hover-opt' onClick={MinusQtdProduto}>-</p>
                            <p>{qtdProdutos}</p>
                            <p className='hover-opt' onClick={AddQtdProduto}>+</p>
                        </div>

                        <img src={Atari}></img>
                        <p className='nm-produto'> {props.nome} </p>

                        <div className='desc-info'>

                            <p className='infor-produto' id='cinza-pequeno'> {props.fabricante} </p>
                            <div className='ponto'>
                                <p>•</p>
                            </div>
                            <p className='estado-produto' id='cinza-pequeno'>{props.estado}</p>

                        </div>

                        <svg className='linha' xmlns="http://www.w3.org/2000/svg" width="284" height="2" viewBox="0 0 284 2" fill="none">

                            <path d="M0.816406 1.22266H282.724" stroke="#0D3A3D" stroke-linecap="round" />
                        </svg>
                        {
                            (props.promocao == 1)

                                ? <>
                                    <p className='preco-produto'> ${props.precoPromocao} </p>
                                    <p className='preco-produto-original' id='cinza-pequeno'> ${props.preco} </p>
                                </>

                                : <p className='preco-produto'> ${props.preco} </p>
                        }

                        <div className='avaliacao-produto'>
                            <div className='estrelas-linha'>

                                <div className='estrelas'>
                                    <img src={EstrelaVaziaEsquerda}></img>
                                    <img src={EstrelaVaziaDireita}></img>
                                </div>

                                <div className='estrelas'>
                                    <img src={EstrelaVaziaEsquerda}></img>
                                    <img src={EstrelaVaziaDireita}></img>
                                </div>

                                <div className='estrelas'>
                                    <img src={EstrelaVaziaEsquerda}></img>
                                    <img src={EstrelaVaziaDireita}></img>
                                </div>

                                <div className='estrelas'>
                                    <img src={EstrelaVaziaEsquerda}></img>
                                    <img src={EstrelaVaziaDireita}></img>
                                </div>

                                <div className='estrelas'>
                                    <img src={EstrelaVaziaEsquerda}></img>
                                    <img src={EstrelaVaziaDireita}></img>
                                </div>

                            </div>
                            <p className='avaliacao-decimal'>({props.avaliacao})</p>

                        </div>
                    </div>
            }
        </div>

    )
};