import "./index.scss";

import LogoArcade from "../../ui/assets/images/NavBar_assets/arcade_Logo 1.png";
import Lupa from "../../ui/assets/images/NavBar_assets/lupa.png";
import Filtro from "../../ui/assets/images/NavBar_assets/filtro_logo.png";
import Carrinho_logo from "../../ui/assets/images/NavBar_assets/carrinho_logo_cabecalho.png";
import Suporte from "../../ui/assets/images/NavBar_assets/suporte_logo.png";
import Usuario from "../../ui/assets/images/NavBar_assets/usuario_logo.png";

export default function NavBar() {

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
                <img src={Usuario} />
                <img src={Carrinho_logo} />
                <img src={Suporte} />
            </span>
        </div>
    );
};