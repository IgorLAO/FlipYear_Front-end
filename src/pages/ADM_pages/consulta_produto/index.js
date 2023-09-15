import "./style.scss"
import { useState } from "react";

import Adm_leftNavBar from "../../../ui/components/ADM_components/left_navbar";
import AdmTopNavBar from "../../../ui/components/ADM_components/topNavBar";

import searchIcon from '../../../ui/assets/images/NavBar_assets/lupa.png';
import filter from '../../../ui/assets/images/adm_assets/filter_icon 1.svg';
import Filter from "../../../ui/components/ADM_components/Filter";

export default function Produtos_ConsultaADM() {
    const [selectdOptionStyle, setSelectdOptionStyle] = useState('');
    const [isHide_X, setisHide_X] = useState(false);
    const [IsHideFilterMenu, setIsHideFilterMenu] = useState(false);

    const Hide = () => {
        setIsHideFilterMenu(true);

        if (IsHideFilterMenu ) {
            setIsHideFilterMenu(false);
        }
    }

   


    return (<div className="ADM_usersConsulta">
        <AdmTopNavBar />
        <div className="s">
            <Adm_leftNavBar />
            <div className="content">
                <h1> Buscar Produtos </h1>


                <span style={{ display: "flex", justifyContent: "center" }}>
                    <span className='searchBox'>
                        <img src={searchIcon} />
                        <input type="text" />
                    </span>
                    <img
                        src={filter}
                        style={{ marginLeft: 10, marginTop: -40, width: 40 }}
                        onClick={Hide} />

                </span>
                {IsHideFilterMenu &&

                    <Filter/>
                }

                <table>
                    <colgroup>
                        <col style={{ width: 1 + '%' }} />
                        <col style={{ width: 15 + '%' }} />
                        <col style={{ width: 5 + '%' }} />
                        <col style={{ width: 10 + '%' }} />
                        <col style={{ width: 1 + '%' }} />
                        <col style={{ width: 1 + '%' }} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome de usuario</th>
                            <th>CPF</th>
                            <th>Email</th>
                            <th>compras</th>
                            <th> infos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> 1 </td>
                            <td> carlinhos </td>
                            <td> 54654654654 </td>
                            <td> carlinhos@gmail.com </td>
                            <td> 69 </td>
                            <td> <button> ... </button> </td>
                        </tr>
                        <tr>
                            <td> 1 </td>
                            <td> carlinhos </td>
                            <td> 54654654654 </td>
                            <td> carlinhos@gmail.com </td>
                            <td> 69 </td>
                            <td> <button> ... </button> </td>
                        </tr>
                        <tr>
                            <td> 1 </td>
                            <td> carlinhos </td>
                            <td> 54654654654 </td>
                            <td> carlinhos@gmail.com </td>
                            <td> 666 </td>
                            <td> <button> ... </button> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>);
}