import "./style.scss"

import Adm_leftNavBar from "../../../ui/components/ADM_components/left_navbar";
import AdmTopNavBar from "../../../ui/components/ADM_components/topNavBar";

import searchIcon from '../../../ui/assets/images/NavBar_assets/lupa.png'

export default function Users_Consulta() {

    return (<div className="ADM_usersConsulta">
        <AdmTopNavBar />
        <div className="s">
            <Adm_leftNavBar />
            <div className="content">
                <h1> Buscar Usuario </h1>
                <span className='searchBox'>
                    <img src={searchIcon}/>
                    <input type="text" />
                </span>

                <table>
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
                            <td> 4 </td>
                            <td> <button> ... </button> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>);
}