import "./index.scss";

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.scss";
import localStorage from "local-storage";


import LogoArcade from "../../assets/images/NavBar_assets/arcade_Logo 1.png";
import Lupa from "../../assets/images/NavBar_assets/lupa.png";
import Filtro from "../../assets/images/NavBar_assets/filtro_logo.png";
import Carrinho_logo from "../../assets/images/NavBar_assets/carrinho_logo_cabecalho.png";
import Suporte from "../../assets/images/NavBar_assets/suporte_logo.png";
import Usuario from "../../assets/images/NavBar_assets/usuario_logo.png";
import SideBarFazerConta from '../perfil/side-bar'
import SideBarLogado from "../perfil/side-bar-logado";
import PopUpCarrinho from "../popupCarrinho";
import SearchCard from "../SearchCards/cardBusca";
import SearchCard_NotFound from "../SearchCards/NotFoundCard";

import SearchResults from "../../../pages/SearchResultsPage";


export default function NavBar() {
    const navigate = useNavigate('');

    const [menuLateralHidden, setMenuLateralHidden] = useState();
    const [logado, setLogado] = useState(false);
    const [popUpCarro, setPopUpCarro] = useState(false);
    const [IsComp, setIsComp] = useState(false);

    const [NomeUser, setNomeUser] = useState('');
    const [searchRes, SetSearchRes] = useState([]);
    const [SearchValue, setSearchValue] = useState('');
    const [Erro, setErro] = useState('');
    const [limit, setLimit] = useState(5);
    const [IshideNotFount, setIshideNotFount] = useState(false);

    const Mostrar = () => {
        if (localStorage("ADM_Logado") || localStorage("NORMAL_USER_Logado")) {
            setLogado(true)
        }
        else
            setMenuLateralHidden(true)
    }

    function mostrarCarrinho() {
        setPopUpCarro((current) => !current);
    }

    const GetSearchRes = async (e) => {
        setSearchValue(e.target.value)

        try {
            let res = await axios.get(`http://localhost:5000/produtos/busca?search=${SearchValue}`)
            SetSearchRes(res.data);
            setErro(res)
            console.log(res)

        } catch (err) {
            setErro('Produto Não Encontrado')
            console.log(Erro)
            SetSearchRes([])
        }
        if (Erro.length === 'Produto Não Encontrado') {
            setIshideNotFount(true)
        }
    }

    const NavTo = (e) => {
        if(e.key === 'Enter')
                navigate('/search')
    }


    return (
        <>
            <div className="Nav">

                <div className="Logo">
                    <img src={LogoArcade} />
                    <h3> Flip-Year
                        <h1>2000</h1>
                    </h3>
                </div>
                <span className="SearchBox">
                    <span className="boxInput">
                        <img src={Lupa} />
                        <input type="text" value={SearchValue} placeholder="Oque esta buscando?" onChange={GetSearchRes} onKeyDown={NavTo}/>
                        <img src={Filtro} />
                    </span>
                </span>
                <span className="Options">
                    <img src={Usuario} onClick={Mostrar} />
                    <img src={Carrinho_logo} onClick={mostrarCarrinho} />
                    <img src={Suporte} />
                </span>

                {
                    (menuLateralHidden === true)
                        ? <SideBarFazerConta setLogado={setLogado} setMenuLateralHidden={setMenuLateralHidden} ></SideBarFazerConta>
                        : <></>

                }
                {
                    (logado === true)
                        ? <SideBarLogado setLogado={setLogado} setMenuLateralHidden={setMenuLateralHidden} ></SideBarLogado> : <></>
                }

                {
                    (popUpCarro === true)
                        ? <PopUpCarrinho setPopUpCarro={setPopUpCarro} ></PopUpCarrinho> : <></>
                }
            {
                (popUpCarro == true)

                ? <PopUpCarrinho setPopUpCarro={setPopUpCarro} ></PopUpCarrinho>

                : <></>


                    }
            </div>
            <div className="searchResults">
                {searchRes.slice(0, limit).map((i) => (
                    <SearchCard i={i} />
                ))}
                {IshideNotFount &&
                    <SearchCard_NotFound Erro={Erro} />
                }

                {IsComp && <SearchResults SearchValue={SearchValue} />}


            


            </div>


        </>
    )
}