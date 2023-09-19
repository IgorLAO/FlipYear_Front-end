import "./index.scss";

import LogoArcade from "../../assets/images/NavBar_assets/arcade_Logo 1.png";
import Lupa from "../../assets/images/NavBar_assets/lupa.png";
import Filtro from "../../assets/images/NavBar_assets/filtro_logo.png";
import Carrinho_logo from "../../assets/images/NavBar_assets/carrinho_logo_cabecalho.png";
import Suporte from "../../assets/images/NavBar_assets/suporte_logo.png";
import Usuario from "../../assets/images/NavBar_assets/usuario_logo.png";
import SideBarFazerConta from '../perfil/side-bar'
import SideBarLogado from "../perfil/side-bar-logado";
import { useState } from "react";



export default function NavBar() {

    const [menuLateralHidden, setMenuLateralHidden] = useState();

    const Mostrar = () => {

        setMenuLateralHidden(true)

    }

    const Condeu = () =>{


        setMenuLateralHidden(false)

    }


    {menuLateralHidden &&


        <SideBarFazerConta></SideBarFazerConta>

    }

    <SideBarLogado></SideBarLogado>

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
                <img src={Usuario} onClick={Mostrar}/>
                <img src={Carrinho_logo} />
                <img src={Suporte} />
            </span>

            


            
        </div>
    );
};