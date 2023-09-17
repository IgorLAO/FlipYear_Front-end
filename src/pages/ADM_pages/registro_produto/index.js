import "./style.scss"

import Adm_leftNavBar from "../../../ui/components/ADM_components/left_navbar";
import AdmTopNavBar from "../../../ui/components/ADM_components/topNavBar";

import camera from "../../../ui/assets/images/adm_assets/camera_icon.png"

export default function RegistroProdutos() {

    return (
        <div className="MainRegistroADM">
            <AdmTopNavBar />
            <div className="s">
                <Adm_leftNavBar />
                <div className="content">
                    <span className="Title">
                        <h1> Estatisticas </h1>
                    </span>

                    <div className="inputs">
                        <span>
                            <a> Nome do Produto </a>
                            <input type="text" />
                        </span>

                        <div style={{ display: "flex" }}>
                            <span style={{ display: "flex" }}>
                                <a> R$ preco </a>
                                <input type="text" />
                            </span>

                            <div className="button">
                                <button>-</button> <a>{'0'}</a> <button>+</button>
                            </div>
                        </div>

                        <div>
                            <select>
                                <option>selecione</option>
                                <option>111</option>
                                <option>222</option>
                            </select>

                            <select>
                                <option>selecione</option>
                                <option>111</option>
                                <option>222</option>
                            </select>

                            <select>
                                <option>selecione</option>
                                <option>111</option>
                                <option>222</option>
                            </select>
                        </div>

                        <span className="desc">
                            Detalhes
                            <textarea />
                        </span>
                        <div className="ImageUpload">
                            <span>
                                <img src={camera} />
                                <input type="file" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>);
}