import { Link, Navigate, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from 'moment';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


import './index.scss'

import Usuario from "../../ui/assets/images/NavBar_assets/usuario_logo.png";
import yum from '../../ui/assets/images/imageExamples/super_famicon_yum.png'
import yum_costa from '../../ui/assets/images/imageExamples/yum game_tras 1.png'
import yum_fita from '../../ui/assets/images/imageExamples/yum fita_frente 1.png'
import hermes from '../../ui/assets/images/compraPage_assets/hermes_express.png'
import red_star from '../../ui/assets/images/compraPage_assets/re_star_company.png'
import seta from '../../ui/assets/images/compraPage_assets/seta.png'
import NavBar from "../../ui/components/navBar"
import Comments from "../../ui/components/comments";
import Produtos from '../../ui/components/produtos'
import CardProdutoCtlg from "../../ui/components/card-produto-ctlg";
import Rodape from "../../ui/components/rodape";

import { ConsultarProdPorId, GetAllCmts, GetAllProd, GetCmtsPage, InsertComments } from "../../api/produtos";
import { GetUserById } from "../../api/usuario";
import axios from "axios";

export default function InfProduto() {
    const navigate = useNavigate();

    const [qtdProdutos, SetQtdProdutos] = useState(0);
    const [limiteQtd, setLimiteQtd] = useState();
    const [idUser, setIdUser] = useState(1);

    const [isHideOptions, setIsHideOptions] = useState(false);
    const [ang, setAng] = useState('0');
    const [hideBuyOptions, setHideBuyOptions] = useState('');

    const [comments, setComments] = useState([]);
    const [allProducts, SetAllProducts] = useState([]);
    let [parcela, SetParcela] = useState(0);
    const [produto, setProduto] = useState({});
    const { idParam } = useParams();
    const [dateNow, setDateNow] = useState(moment(new Date).format('YYYY/MM/DD'))
    const [commentContent, setCommentContent] = useState('')
    const [commentLikes, setCommentLikes] = useState(0)
    const [commentReport, setCommentReport] = useState(false);


    const [commentsPagAtual, setCommentsPagAtual] = useState(1)
    const [commentsPerPag, setCommentsPerPag] = useState(2)
    const [setaAvancarComments, setSetaAvancarComments] = useState(true)
    const [setaRetornarComments, setSetaRetornarComments] = useState(false)
    const [commentsProd, setCommentsProd] = useState([]);
    const [cep, setCep] = useState('');
    const [respCep, setRespCep] = useState('');

    const indexUltimoComment = commentsPagAtual * commentsPerPag;
    const indexPrimeiroComments = indexUltimoComment - commentsPerPag;
    const commentsAtuais = commentsProd.slice(indexPrimeiroComments, indexUltimoComment)
    const numPagComments = []

    for(let i = 1; i <= Math.ceil(commentsProd.length / commentsPerPag); i++){
        numPagComments.push(i)
    }

    function sla() {
        // Filtra os comentários que correspondem ao produto atual
        const commentsForProduct = comments.filter(comment => comment.PRODUTO === idParam);
      
        // Define os comentários filtrados no estado
        setCommentsProd(commentsForProduct);
      }

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
                produto: idParam,
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

    useEffect(() => {

        sla()

        if (commentsPagAtual !== 1) {
          setSetaRetornarComments(true);
        } else {
          setSetaRetornarComments(false);
        }
    
        if (commentsAtuais === numPagComments.length) {
          setSetaAvancarComments(false);
        } else {
          setSetaAvancarComments(true);
        }
      }, [commentsAtuais, numPagComments.length, comments, commentsPagAtual, commentsProd]);
    
      const paginaComments = (item) => {
        setCommentsPagAtual(item);
      };
    
      const AvancarComments = () => {
        if (commentsPagAtual < numPagComments.length) {
          setCommentsPagAtual((prevPag) => prevPag + 1);
        }
      };
    
      const RetornarComments = () => {
        if (commentsPagAtual > 1) {
          setCommentsPagAtual((prevPag) => prevPag - 1);
        }
      };

      async function ConsultarCep() {
        if(cep.length > 7){
            try {
                const resp = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                if (resp.status === 200) {
                  setRespCep('Cep encontrado!');
                }
              } catch (err) {
                setRespCep('Não encontrado');
              }
        }
        else{
            setRespCep('');
        }
        
      }
    
      useEffect(() => {

            ConsultarCep();
      }, [cep]);
      

    async function CarregarProdutos() {
        const resp = await ConsultarProdPorId(idParam);
        setLimiteQtd(limiteQtd);
        setProduto(resp);
        
    }

    // async function InserirProdutoNoCarrinho(){
    //     const resp = await InserirProdutoNoCarrinho(idproduto, idUser, qtdProduto);

    // }

         function parcelas() {
            const valorParcelas = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.VL_PRECO / 10);
            SetParcela(valorParcelas);
    }
    
    function processPag25() {
        navigate(`/pagamento25/${idParam}`);
    }
    //peguei o id_produto do catálogo e joguei aqui


    async function GetAllComments() {
        let res = await GetAllCmts();
        let t = (res.data);

        setComments(t)
    }

 
    async function InserirCommentarioEnter(e){
        if(e.key == 'Enter'){

        let resp = await InsertComments( idParam, commentContent, dateNow, commentLikes, commentReport)
        
     }
    }


    async function GetAllProduttc() {
        let res = await GetAllProd()

        let data = (res.data)
        SetAllProducts(data)
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

    useEffect(() =>{
        parcelas();
    }, [produto]);


    useEffect(() => {
        CarregarProdutos();
        GetAllProduttc();
        GetAllComments();

    },[]);    
    return (
        <div className="pagina-produto">
            <NavBar />
            <div className="infos">

                        
                            <div className="imagem">


                                <Swiper navigation={true} slidesPerView={1} modules={[Navigation]} className="mySwiper2">

                                <SwiperSlide>
                                <img src={yum} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                <img src={yum} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                <img src={yum} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                <img src={yum} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                <img src={yum} alt="" />
                                </SwiperSlide>


                                </Swiper>
                                
                </div>

                <div className="compra">
                    <div className="nome-produto">
                        <div id="tituloProd">
                            <h1>{produto.NM_PRODUTO}</h1>
                            <p>2x</p>
                        </div>
                        
                        <div id="linha"></div>
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
                            <input id="CEP" type="cep" placeholder="Digite seu CEP" value={cep} onChange={(e) => setCep(e.target.value)}/>
                        </div>
                        <p style={{padding: "7px"}}>{respCep}</p> 
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
                        <div>
                        <button id="button-carrinho" onClick={AddNoCarrinho}>Adicionar ao Carrinho
                        </button> 
                        </div>
                    </div>

                    <div className="contador">
                        <p className='hover-opt' onClick={MinusQtdProduto}>-</p>
                        <p >{qtdProdutos}</p>
                        <p className='hover-opt' onClick={AddQtdProduto} >+</p>
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
                    <input type="text" value={commentContent} onChange={e => setCommentContent(e.target.value)} onKeyDown={InserirCommentarioEnter} placeholder="Deixe um comentário" />
                </div>

            
                <div>
                    {comments.map((item) =>
                        <Comments
                            Nome={item.NOME}
                            Produto={item.PRODUTO}
                            Data={item.PUBLICACAO}
                            Conteudo={item.COMENTARIO}
                            Likes={item.LIKES}
                            idParam={idParam}
                        />
                    )}
                </div>
                
                          
            
                <div className="setas">

                        {
                            (setaRetornarComments == true)

                            ? <h2 id="seta" onClick={RetornarComments} style={{ fontSize: 70 }} > {'<'} </h2>
                            :<></>
                        }

                        {numPagComments.map(item =>

                            <p onClick={() => paginaComments(item)}>{item}</p>

                        )}

                        {
                            (setaAvancarComments == true)
                            ?<h2 id="seta" onClick={AvancarComments} style={{ fontSize: 70 }} > {'>'} </h2>
                            :<></>
                        }
                   


                    
                </div>
            </div>



            <div className="other-products">
                <div className="ot-tittle">
                    <h1>Outros Produtos</h1>
                </div>


                <div className="products">

                    <Produtos products={allProducts} />


                </div>
            </div>
            <Rodape />
        </div>
    )
}