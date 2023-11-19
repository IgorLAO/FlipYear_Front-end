import './index.scss';

import Atari from '../../assets/images/imagesCardProduto/nintendo_Console-removebg-preview 102.png';
import EstrelasAvaliacao from './estrelas';
import Carrrinho from '../../assets/images/perfil-pessoal/image-removebg-preview (8) 2.png'
import { useState } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import localStorage from 'local-storage';

export default function CardProdutoCtlg(props) {
    const navigate = useNavigate();
    const estoragemLocal = localStorage('ADM_Logado')

    
    const [qtdProdutos, SetQtdProdutos] = useState(0);
    const [limiteQtd, setLimiteQtd] = useState(props.estoque);
    const [idUser, setIdUser] = useState(1);
    const [idProduto, setIdProduto] = useState(props.idProduto);
    const [colecionador, setColecionador] = useState(props.colecionador);
    const [fundoBranco, setFundoBranco] = useState('white ')
    const [fontePreta, setFontePreta] = useState('black ')
    const [fonteCinza, setFonteCinza] = useState('#252525')

    function AddQtdProduto() {
        SetQtdProdutos(qtdProdutos + 1);
        if (qtdProdutos >= limiteQtd) {
            SetQtdProdutos(limiteQtd);

        }
    }

    function ProdutoAdicionado() {
        // toast.success("Produto Adicionado ao Carrinho!")

    }

    function ErroAdicionarProduto() {
        // toast.error("Produto Não Adicionado ao Carrinho");

    }

    function MinusQtdProduto() {
        SetQtdProdutos(qtdProdutos - 1);

        if (qtdProdutos == 0) {
            SetQtdProdutos(0);

        }
    }

    async function AddNoCarrinho() {
        if (qtdProdutos >= 1) {
            let resposta = await axios.post('http://129.148.42.252:5010/carrinho', {
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

    //utilizei o id do produto para seguir para a pág de produto
    function processoCompra() {
        navigate(`/produto/${props.idProduto}`)
        window.location.reload();
        window.scrollTo(0, 0);
    }

    function NaoColecionadorCard() {

        if (props.colecionador == true) {

            setFonteCinza('');
            setFontePreta('');
            setFundoBranco('');


        }

        else {
            setFonteCinza('#252525');
            setFontePreta('black ');
            setFundoBranco('white ');

        }
    }

    useEffect(() => {
        NaoColecionadorCard();

        

    }, [props])

    return (
        <>

            {/* <ToastContainer></ToastContainer> */}

            <div className='card' style={{ background: `${fundoBranco}` }}>

                <div className='qtd-produtos'>
                    <img src={Carrrinho} className='card-prod-carrinho' onClick={AddNoCarrinho}></img>
                    <div className='menu-add-cart'>

                        <p className='hover-opt' onClick={MinusQtdProduto} style={{ color: `${fontePreta}` }}>-</p>
                        <p style={{ color: `${fontePreta}` }}>{qtdProdutos}</p>
                        <p className='hover-opt' onClick={AddQtdProduto} style={{ color: `${fontePreta}` }}>+</p>
                    </div>
                </div>

                <img onClick={processoCompra} id='ImgProduto' src={Atari} />

                <p className='nm-produto' style={{ color: `${fontePreta}` }}> {props.nome} </p>

                <div className='desc-info'>

                    <p className='infor-produto' id='cinza-pequeno' style={{ color: `${fonteCinza}` }}> {props.fabricante} </p>

                    <p className='estado-produto' id='cinza-pequeno' style={{ color: `${fonteCinza}` }}>{props.estado}</p>

                </div>

                <svg className='linha' xmlns="http://www.w3.org/2000/svg"  height="2" viewBox="0 0 284 2" fill="none">
                    <path d="M0.816406 1.22266H282.724" stroke="#0D3A3D" stroke-linecap="round" />
                </svg>
                {
                    (props.promocao == 1)

                        ? <>
                            <p className='preco-produto' style={{ color: `${fontePreta}` }}> ${props.precoPromocao} </p>
                            <p className='preco-produto-original' id='cinza-pequeno' style={{ color: `${fonteCinza}` }}> ${props.preco} </p>
                        </>

                        : <p className='preco-produto' style={{ color: `${fontePreta}` }}> ${props.preco} </p>
                }

                <div className='avaliacao-produto'>
                    <EstrelasAvaliacao />
                    <p className='avaliacao-decimal' style={{ color: `${fontePreta}` }}>({props.avaliacao})</p>

                </div>
            </div>

        </>

    )
};