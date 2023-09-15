import "./style.scss"
import { useState } from "react";

import Adm_leftNavBar from "../../../ui/components/ADM_components/left_navbar";
import AdmTopNavBar from "../../../ui/components/ADM_components/topNavBar";

import searchIcon from '../../../ui/assets/images/NavBar_assets/lupa.png';
import filter from '../../../ui/assets/images/adm_assets/filter_icon 1.svg';
import Filter from "../../../ui/components/ADM_components/Filter";

export default function ADM_pedidos() {
 
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
                <h1> Buscar Pedidos </h1>


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
                        <col style={{ width: 10 + '%' }} />
                        <col style={{ width: 2 + '%' }} />
                        <col style={{ width: 5 + '%' }} />
                        <col style={{ width: 0.1 + '%' }} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Pedido</th>
                            <th>Data e Hora</th>
                            <th> QTD </th>
                            <th> Comprador </th>
                            <th> Status </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> 1 </td>
                            <td> sega horse edition </td>
                            <td> 2020/03/22 00:00:20:30 </td>
                            <td> x69 </td>
                            <td> Foi entregue </td>
                            <td> <button> ... </button> </td>
                        </tr>
                        <tr>
                            <td> 1 </td>
                            <td> sega horse edition </td>
                            <td> 2020/03/22 00:00:20:30 </td>
                            <td> x69 </td>
                            <td> Foi entregue </td>
                            <td> <button> ... </button> </td>
                        </tr>
                        <tr>
                            <td> 1 </td>
                            <td> sega horse edition </td>
                            <td> 2020/03/22 00:00:20:30 </td>
                            <td> x69 </td>
                            <td> Foi entregue </td>
                            <td> <button> ... </button> </td>
                        </tr>
                        <tr>
                            <td> 1 </td>
                            <td> sega horse edition </td>
                            <td> 2020/03/22 00:00:20:30 </td>
                            <td> x69 </td>
                            <td> Foi entregue </td>
                            <td> <button> ... </button> </td>
                        </tr>
                        <tr>
                            <td> 1 </td>
                            <td> sega horse edition </td>
                            <td> 2020/03/22 00:00:20:30 </td>
                            <td> x69 </td>
                            <td> Foi entregue </td>
                            <td> <button> ... </button> </td>
                        </tr>
                        <tr>
                            <td> 1 </td>
                            <td> sega horse edition </td>
                            <td> 2020/03/22 00:00:20:30 </td>
                            <td> x69 </td>
                            <td> Foi entregue </td>
                            <td> <button> ... </button> </td>
                        </tr>
                        <tr>
                            <td> 1 </td>
                            <td> sega horse edition </td>
                            <td> 2020/03/22 00:00:20:30 </td>
                            <td> x69 </td>
                            <td> Foi entregue </td>
                            <td> <button> ... </button> </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>);
}