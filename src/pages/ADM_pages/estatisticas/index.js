import "./style.scss";

import Adm_leftNavBar from "../../../ui/components/ADM_components/left_navbar";
import AdmTopNavBar from "../../../ui/components/ADM_components/topNavBar";


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
                                <option> aaaaaaa</option>
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

                <section>
                    <div className="dash">
                        <div >
                            <span style={{backgroundColor: 'green', height: '12%'}}> </span>
                            <h2> Consoles </h2>
                        </div>
                       
                        <div>
                            <span style={{backgroundColor: 'green', height: '100%'}} > </span>
                            <h2> Fliperamas </h2>
                        </div>
                       
                        <div>
                            <span style={{backgroundColor: 'green', height: '45%'}} > </span>
                            <h2> Jogos </h2>
                        </div>
                       
                        <div>
                            <span style={{backgroundColor: 'green', height: '50%'}} > </span>
                            <h2> Colecionador </h2>
                        </div>
                       
                        <div>
                            <span style={{backgroundColor: 'green', height: '25%'}} > </span>
                            <h2> 2000/03/21 </h2>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    </div>
    );
}