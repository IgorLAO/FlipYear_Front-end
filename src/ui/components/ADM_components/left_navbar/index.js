import "./style.scss"

import MenuIcon from "../../../assets/images/adm_assets/menuIcon.png"
import Mail from "../../../assets/images/adm_assets/mail_adm.png"
import penIcon from "../../../assets/images/adm_assets/lapis_icon.png"
import searchIcon from "../../../assets/images/adm_assets/search_adm.png"
import clockIcon from "../../../assets/images/adm_assets/relogio_icon_adm.png"
import userIcon from "../../../assets/images/adm_assets/usuarioADM_icon.png"
import statisticsIcon from "../../../assets/images/adm_assets/estatisticasADM_icon.png"
import { useState } from "react"

export default function Adm_leftNavBar() {
    const [splitNav, setSplitNav] = useState();

    return (
        <div className="MainAdm_leftNavbar">
            <div className="MenuHeader">
                <h1> Menu </h1>
                <img src={MenuIcon} />
            </div>


            <div className="Options">

                <div>
                    <h4> Caixa de Entrada </h4>
                    <img src={Mail} />
                </div>

                <div>
                    <h4> Produtos </h4>
                    <img src={searchIcon} />
                </div>

                <div>
                    <h4> Usuarios </h4>
                    <img src={Mail} />
                </div>

                <div>
                    <h4> Pedidos Pendentes </h4>
                    <img src={clockIcon} />
                </div>

                <div>
                    <h4> Pedidos Concluídos </h4>
                    <img src={clockIcon} />
                </div>

                <div>
                    <h4> Estatísticas</h4>
                    <img src={statisticsIcon} />
                </div>

            </div>
        </div>
    );
}