import './index.scss';

import { GetBusca } from '../../api/produtos';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { prettyDOM } from '@testing-library/react';

import NavBar from '../../ui/components/navBar';
import Rodape from '../../ui/components/rodape'
import CarrinhoIMG from '../../ui/assets/images/perfil-pessoal/image-removebg-preview (8) 2.png'
import Fantasma1 from '../../ui/assets/images/perfil-side-bar/fantasma 2.png'
import CardProdutoCtlg from '../../ui/components/card-produto-ctlg';
import Fantasma2 from '../../ui/assets/images/perfil-side-bar/fantasma4.png'
import { ConsultaCarrinho } from '../../api/carrinho';
import ListagemCarrinho from '../../ui/components/popupCarrinho/ListagemCarrinho';

export default function Carrinho() {
    const [mostrarCarrinho, SetMostrarCarrrinho] = useState(true);
    const [listaCarrinho, setListaCarrrinho] = useState([]);

    async function consultaProdutos() {
        let resposta = await ConsultaCarrinho();
        setListaCarrrinho(resposta.data[0]);
    }

    useEffect(() => {
        consultaProdutos();

    }, [])

    return (
        <div className='pag-carrinho'>
            <NavBar />

            <div className='pedidos'>
                <img src={CarrinhoIMG}></img>
                <div className='titulo'>
                    <p>Meus Pedidos</p>
                    <div className='lb-carrinho'></div>
                </div>
            </div>

            {
                (mostrarCarrinho === true)

                    ? <div className='lista-carrinho'>       
                            <CardProdutoCtlg
                                preco={listaCarrinho.VL_PRECO}
                                nome={listaCarrinho.NM_PRODUTO} precoPromocao={listaCarrinho.VL_PRECO_PROMOCIONAL}
                                promocao={listaCarrinho.BT_PROMOCAO} avaliacao={listaCarrinho.VL_AVALIACAO}
                                fabricante={listaCarrinho.NM_FABRICANTE}
                                estado={listaCarrinho.TP_ESTADO}
                            />

                    </div>
                    : <div className='vazio'>
                        <img src={Fantasma2} className='fantasma2'></img>
                        <p>Parece que esta vazio :{`(`}</p>
                        <img src={Fantasma1} className='fantasma1'></img>
                    </div>
            }
            <Rodape></Rodape>
        </div>
    )




}