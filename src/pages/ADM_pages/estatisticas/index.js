import Adm_leftNavBar from "../../../ui/components/ADM_components/left_navbar";
import AdmTopNavBar from "../../../ui/components/ADM_components/topNavBar";

import searchIcon from '../../../ui/assets/images/NavBar_assets/lupa.png';

import "./style.scss"

export default function Estatisticas() {

    return (<div className="ADM_Estatisticas">
        <AdmTopNavBar />
        <div className="s">
            <Adm_leftNavBar />
            <div className="content">
                <span className="Title">
                    <h1> Estatisticas </h1>
                </span>

                <div className="dataRange">
                    <div>
                        <span>
                            <a>Intervalo</a>
                            <select>
                                <option> aaaaaaaa </option>
                                <option> aaaaaaaa </option>
                            </select>
                        </span>

                        <span>
                            <a>Começo:</a>
                            <select>
                                <option> aaaaaaaa </option>
                                <option> aaaaaaaa </option>
                            </select>
                        </span>

                        <span>
                            <a>Final:</a>
                            <select>
                                <option> aaaaaaaa </option>
                                <option> aaaaaaaa </option>
                            </select>
                        </span>
                    </div>

                    <button> Aplicar </button>
                </div>

            </div>
        </div>
    </div>
    );
}