import './index.scss';
import Atari from '../../assets/images/imagesCardProduto/nintendo_Console-removebg-preview 102.png'
import Estrela from '../../assets/images/imagesCardProduto/estrela_vazia 6.png'
import Carrrinho from '../../assets/images/perfil-pessoal/image-removebg-preview (8) 2.png'

import { useState } from 'react';
import axios from 'axios';


export default function CardProdutoCtlg(props) {

    const [qtdProdutos, SetQtdProdutos] = useState(0);
    const [limiteQtd, setLimiteQtd] = useState(props.estoque);
    const [idUser, setIdUser] = useState(3);
    const [idProduto, setIdProduto] = useState(props.idProduto);
    const [colecionador, setColecionador] = useState(props.colecionador);

    function AddQtdProduto() {
        SetQtdProdutos(qtdProdutos + 1);

        if (qtdProdutos >= limiteQtd) {
            SetQtdProdutos(limiteQtd);

        }
    }

    function MinusQtdProduto() {
        SetQtdProdutos(qtdProdutos - 1);

        if (qtdProdutos == 0) {
            SetQtdProdutos(0);

        }
    }

    async function AddNoCarrinho() {

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

        return resposta.data;
    }

    return (
        <div className='card-produto-ctlg'>
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
                            <div className='estrelas'>
                                <img src={Estrela}></img>
                                <img src={Estrela}></img>
                                <img src={Estrela}></img>
                                <img src={Estrela}></img>
                                <img src={Estrela}></img>
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
                            <div className='estrelas'>
                                <img src={Estrela}></img>
                                <img src={Estrela}></img>
                                <img src={Estrela}></img>
                                <img src={Estrela}></img>
                                <img src={Estrela}></img>
                            </div>

                            <p className='avaliacao-decimal'>({props.avaliacao})</p>

                        </div>
                    </div>
            }
        </div>

    )};