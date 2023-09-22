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
    const [logado, setLogado] = useState(false);
    const [fundoEscurecido, setFundoEscurecido] = useState('');


  function Condeu(){


    setMenuLateralHidden(false);
    setLogado(false);
    setFundoEscurecido('');

}
  


    const Mostrar = () => {

        setMenuLateralHidden(true)
        setFundoEscurecido('#000000a9')        

    }






    return (
        <div className="escurecer-fundo" style={{backgroundColor: `${fundoEscurecido}`} }>

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
            
            {
                
                (menuLateralHidden == true) 

                ? <SideBarFazerConta setLogado={setLogado} setMenuLateralHidden={setMenuLateralHidden}></SideBarFazerConta>

                :<></>


            }

            {
                (logado == true)

                ? <SideBarLogado></SideBarLogado>

                : <></>



            }

            
        </div>
        </div>
    )
}