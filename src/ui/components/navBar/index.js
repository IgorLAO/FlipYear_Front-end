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


export default function NavBar() {
    const [menuLateralHidden, setMenuLateralHidden] = useState();
    const [logado, setLogado] = useState(false);
    

    const [NomeUser, setNomeUser] = useState('');

    const navigate = useNavigate('');



    const Mostrar = () => {
        if (localStorage("ADM_Logado") || localStorage("NORMAL_USER_Logado")) {
            setLogado(true)
        }
        else
            setMenuLateralHidden(true)


        

    }


    return (

        <div className="Nav">

            <div className="Logo">
                <img src={LogoArcade} />
                <h3> Flip-Year
                    <h1>2000</h1>
                </h3>
            </div>
            <span className="SearchBox">
                <img src={Lupa} />
                <input type="text" placeholder="Oque esta buscando?" />
                <img src={Filtro} />
            </span>
            <span className="Options">
                <img src={Usuario} onClick={Mostrar} />
                <img src={Carrinho_logo} />
                <img src={Suporte} />
            </span>

            {
                (menuLateralHidden == true)
                    ? <SideBarFazerConta setLogado={setLogado} setMenuLateralHidden={setMenuLateralHidden} ></SideBarFazerConta>
                    : <></>

            }

            {
                (logado == true)
                    ? <SideBarLogado setLogado={setLogado} setMenuLateralHidden={setMenuLateralHidden} ></SideBarLogado>
                    : <></>
            }

            <PopUpCarrinho></PopUpCarrinho>

        </div>
    )
}