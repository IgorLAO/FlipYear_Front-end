import "./style.scss";

import Adm_leftNavBar from "../../../ui/components/ADM_components/left_navbar";
import AdmTopNavBar from "../../../ui/components/ADM_components/topNavBar";

import userImage from "../../../ui/assets/images/adm_assets/relogio_icon_adm.png";

import console from "../../../ui/assets/images/atari_console.png";

export default function AdmHome() {

    return (
        <div className="MainAdm_Home">
            <AdmTopNavBar />
            <div className="Content">
                <Adm_leftNavBar />
                <section className="ADM">
                    <div className="perfilDetails">
                        <h2> Seja Bem-vindo "{"insira nome aqui"}" </h2>
                        <div className="ExpPerfil">
                            <img src={userImage} style={{ width: 500 }} />

                            <span className="TierBlockExp" style={{
                                display: "flex",
                                flexDirection: "column",
                                width: 80 + '%'
                            }}>

                                <a style={{ marginBottom: 10 }}> Tier ADM </a>
                                <span style={{ display: "flex", marginBottom: 10, alignItems: "center" }}> <img src="aa" />  x 464</span>
                                <progress value={32} max={100} ></progress>

                            </span>
                        </div>

                    </div>
                    <div className="VistoTitle">
                        <h3>Visto Recentemente</h3>
                        <hr />
                    </div>

                    <section className="vistos">
                        <div className="Produtos">
                            <h4> Produtos </h4>
                            <div className="produto" >
                                <img src={console} />
                                <a> {"insira o produto"}roduto"roduto"roduto" </a>
                                <i class="fa-solid fa-circle-info"></i>
                            </div>
                            <div className="produto" >
                                <img src={console} />
                                <a> {"insira o produto"}roduto"roduto"roduto" </a>
                                <i class="fa-solid fa-circle-info"></i>
                            </div>
                            <div className="produto" >
                                <img src={console} />
                                <a> {"insira o produto"}roduto"roduto"roduto" </a>
                                <i class="fa-solid fa-circle-info"></i>
                            </div>
                        </div>

                        <div className="Perfis">
                            <h4> Perfis </h4>
                            <div className="perfil" >
                                    <img src={userImage} />

                                    <a> {"insira o nome usuario"} </a>
                                    <div className='Stars' >
                                        <img src='aa' style={{margin: 0}} />
                                        x46
                                    </div>
                                    <i class="fa-solid fa-circle-info"></i>
                            </div>
                            <div className="perfil" >
                                    <img src={userImage} />

                                    <a> {"insira o nome usuario"} </a>
                                    <div className='Stars' >
                                        <img src='aa' style={{margin: 0}} />
                                        x46
                                    </div>
                                    <i class="fa-solid fa-circle-info"></i>
                            </div>
                            <div className="perfil" >
                                    <img src={userImage} />

                                    <a> {"insira o nome usuario"} </a>
                                    <div className='Stars' >
                                        <img src='aa' style={{margin: 0}} />
                                        x46
                                    </div>
                                    <i class="fa-solid fa-circle-info"></i>
                            </div>
                        </div>

                    </section>
                </section>

            </div>
        </div>
    );
}