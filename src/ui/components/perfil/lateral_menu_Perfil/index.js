import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import storage from 'local-storage';

import "./style.scss"

import MenuIcon from "../../../assets/images/adm_assets/menuIcon.png"
import Mail from "../../../assets/images/adm_assets/mail_adm.png"
import penIcon from "../../../assets/images/adm_assets/lapis_icon.png"
import searchIcon from "../../../assets/images/adm_assets/search_adm.png"
import clockIcon from "../../../assets/images/adm_assets/relogio_icon_adm.png"
import userIcon from "../../../assets/images/adm_assets/usuarioADM_icon.png"
import statisticsIcon from "../../../assets/images/adm_assets/estatisticasADM_icon.png"
import logOutIcon from "../../../assets/images/adm_assets/logOut.png"

export default function SideBarUsers() {
    const [splitNav, setSplitNav] = useState();
    const navigate = useNavigate();

    const logOut = () => {
        storage.remove('NORMAL_USER_Logado')
        navigate('/login')
    }

    return (
        <div >

            <div className="MainUsers_bar">
                <span className="btns">

                    <div className="MenuHeader">
                        <img src={MenuIcon} />
                        <h1> Menu </h1>
                    </div>


                    <div className="Options">
                        <span className="">
                            <Link to="/">
                                <div>
                                    <img src={clockIcon} />
                                    <h4> Home </h4>
                                </div>
                            </Link>

                            <Link>
                                <div>
                                    <img src={Mail} />
                                    <h4> Caixa de Entrada </h4>
                                </div>
                            </Link>

                            <Link to="ADM_Pedidos">
                                <div>
                                    <img src={clockIcon} />
                                    <h4> Pedidos Pendentes </h4>
                                </div>
                            </Link>


                        </span>
                    </div>

                    <div className="LogOut" onClick={logOut}>
                        <img src={logOutIcon} />
                        <h4> Sair</h4>
                    </div>

                </span>
            </div>
        </div>
    );
}