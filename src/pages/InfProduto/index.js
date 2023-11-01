import { Link, Navigate, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import Carousel from 'react-elastic-carousel'

import './index.scss'
import axios from "axios";

import Usuario from "../../ui/assets/images/NavBar_assets/usuario_logo.png";
import yum from '../../ui/assets/images/imageExamples/super_famicon_yum.png'
import yum_costa from '../../ui/assets/images/imageExamples/yum game_tras 1.png'
import yum_fita from '../../ui/assets/images/imageExamples/yum fita_frente 1.png'
import hermes from '../../ui/assets/images/compraPage_assets/hermes_express.png'
import red_star from '../../ui/assets/images/compraPage_assets/re_star_company.png'
import seta from '../../ui/assets/images/compraPage_assets/seta.png'
import NavBar from "../../ui/components/navBar"
import Comments from "../../ui/components/comments";
import CardProdutoCtlg from "../../ui/components/card-produto-ctlg";
import Rodape from "../../ui/components/rodape";

import { ConsultarProdPorId } from "../../api/produtos";
import { GetUserById } from "../../api/usuario";

export default function InfProduto() {
    const [isHideOptions, setIsHideOptions] = useState(false);
    const [ang, setAng] = useState('0');
    const [hideBuyOptions, setHideBuyOptions] = useState('');
    const [IsHideReportPopUp, setIsHideReportPopUp] = useState(false);

    const [comments, setComments] = useState([]);
    const [allComments, setAllComments] = useState([])
    const [otherProducts, setOtherProducts] = useState([]);
    const [pageComments, setPageComments] = useState(1);
    const [pageProducts, setPageProducts] = useState(1);
    const [allProducts, SetAllProducts] = useState([]);
    const [parcela, SetParcela] = useState(0)

    //    
    const navigate = useNavigate();

    const [produto, setProduto] = useState({});
    const { idParam } = useParams();

    useEffect(() => {
        CarregarProdutos();
    }, []);

    async function CarregarProdutos() {
        const resp = await ConsultarProdPorId(idParam);
        setProduto(resp);
    }

    function parcelas() {
        const parcela = produto.VL_PRECO / 10
        SetParcela(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(parcela))
        console.log(parcela)
    }

    function processPag25() {
        navigate(`/pagamento25/${idParam}`);
    }
    //peguei o id_produto do catálogo e joguei aqui

    async function GetComments() {
        let res = await axios.get('http://localhost:5000/comentarios?pagina=' + pageComments)

        setComments(res.data)
    }

    async function GetAllComments() {
        let res = await axios.get('http://localhost:5000/AllComentarios')
        let t = (res.data)
        let a = t.length

        let c = a / comments.length
        setAllComments(c)
    }

    function nextPagComments() {
        if (pageComments <= allComments) {
            setPageComments(pageComments + 1)
        }
    }

    function prevPagComments() {
        if (pageComments > 1) {
            setPageComments(pageComments - 1)
        }
    }



    async function GetProducts() {
        let res = await axios.get('http://localhost:5000/outrosprodutos?pagina=' + pageProducts)

        setOtherProducts(res.data)
    }

    async function GetAllProduttc() {
        let res = await axios.get('http://localhost:5000/produtos')

        let data = (res.data)
        let a = data.length

        let length = a / otherProducts.length

        SetAllProducts(data)
        console.log(length)
    }



    function nextPagProducts() {
        if (pageProducts <= allProducts) {
            setPageProducts(pageProducts + 1)
        }
    }

    function prevPagProducts() {
        if (pageProducts > 1) {
            setPageProducts(pageProducts - 1)
        }
    }

    function hideValid() {
        setIsHideOptions(true)
        setHideBuyOptions('none')
        setAng('90')

        if (isHideOptions) {
            setIsHideOptions(false);
            setHideBuyOptions('flex')
            setAng('0')
        }
    }



    useEffect(() => {
        parcelas()
        GetProducts()
        GetComments()
        GetAllProduttc()
        GetAllComments()
    }, [pageProducts, pageComments]);


    return (
        <div className="pagina-produto">

            <div className="infos">
                <div className="txt-img">
                    <div className="imgs-produto">
                        <div className="mini-imgs">
                            <div className="mini-img">
                                <img src={yum} alt="" />
                            </div>

                            <div className="mini-img">
                                <img src={yum_costa} alt="" />
                            </div>

                            <div className="mini-img">
                                <img id="fita" src={yum_fita} alt="" />
                            </div>

                            <div className="mini-img">
                                <img src={yum} alt="" />
                            </div>
                        </div>
                        <div className="div_imagem">
                            <div className="imagem">
                                <img src={yum} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="compra">
                    <div className="nome-produto">
                        <h1>{produto.NM_PRODUTO}</h1>
                        <div></div>
                    </div>

                    <div className="estado">
                        <p>{produto.TP_ESTADO}</p>
                    </div>

                    <div className="preco">
                        <h2>R${produto.VL_PRECO}</h2>
                        <p>Ou 10x de {parcela}</p>
                        <div></div>
                    </div>

                    <div className="frete">
                        <label for="CEP"> <h4>Onde entregar?</h4> </label>

                        <div className="search-bar">
                            <input id="CEP" type="text" placeholder="Digite seu CEP" />
                        </div>
                    </div>



                    <div className="envio">
                        <span onClick={hideValid} style={{ display: "flex", cursor: "pointer", textAlign: "center" }}>
                            <h4 > Opções de Entrega </h4>
                            <a style={{ transform: `rotate(${ang}deg)`, marginLeft: 7 }}>  {'>'} </a>
                        </span>
                        {isHideOptions &&
                            <>
                                <div className="tipo-envio">
                                    <div className="env-hermes">
                                        <button>
                                            <div>
                                                <img src={hermes} alt="" />
                                                <h4>Hermes Express</h4>
                                            </div>

                                            <div>
                                                <p>Receba em até 5 dias úteis</p>
                                                <p>R$15,00</p>
                                            </div>

                                        </button>
                                    </div>

                                    <div className="linha2"></div>

                                    <div className="env-star">
                                        <button>
                                            <div>
                                                <img src={red_star} alt="" />
                                                <h4>Red Star Company</h4>
                                            </div>

                                            <div>
                                                <p>Receba em até 2 dias úteis</p>
                                                <p>R$25,00</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </>
                        }

                    </div>
                    <div className="buttons" style={{ display: `${hideBuyOptions}` }}>
                        <button id="button-compra" onClick={processPag25}>Compre já</button>
                        <button id="button-carrinho">Adicionar ao Carrinho</button>
                    </div>
                </div>
            </div>

            <div className="product-details">
                <div className="linha">
                    <h1>Sobre</h1>
                </div>
                <p>{produto.DS_DETALHES}</p>
                {/* <p>Yam Yam é um jogo de tiro em 3D com elementos de RPG, onde um garoto-toupeira chamado Magu Magu e seu animal de estimação, Yam Yam, embarcam em uma aventura por 28 missões. Eles viajam entre vilas, enfrentando fases de tiro em 3D para derrotar monstros, ganhar pontos de experiência e coletar recompensas. O jogo apresenta elementos de RPG, como comprar equipamentos e completar tarefas nas vilas, mas reseta o progresso do personagem após cada missão, como se fosse um sonho.</p> */}
            </div>

            <div className="comments-area">
                <h1>Avaliações</h1>

                <div className="escrita">
                    <img src={Usuario} alt="" />
                    <input type="text" placeholder="Deixe um comentário" />
                </div>

                {comments.map((item) =>
                    <Comments
                        Nome={item.NOME}
                        Data={item.PUBLICACAO}
                        Conteudo={item.COMENTARIO}
                        Likes={item.LIKES}
                    />
                )}
                <div className="setas">
                    <h2 id="seta" onClick={prevPagComments} style={{ fontSize: 70 }} > {'<'} </h2>
                    <h2 id="seta" onClick={nextPagComments} style={{ fontSize: 70 }} > {'>'} </h2>
                </div>
            </div>



            <div className="other-products">
                <div className="ot-tittle">
                    <h1>Outros Produtos</h1>
                </div>


                <div className="products">
                        
                    {/* <Carousel renderArrow={this.myArrow} itemsToShow={4}>
                    {allProducts.map((item) => (
                        <CardProdutoCtlg preco={item.VL_PRECO}
                            idProduto={item.ID_PRODUTO}
                            nome={item.NM_PRODUTO}
                            precoPromocao={item.VL_PRECO_PROMOCIONA}
                            promocao={item.BT_PRMOCAO} />
                    ))}
</Carousel> */}

                </div>
            </div>
            <Rodape />
        </div>
    )
}