import './index.scss';

import Usuario from "../../../ui/assets/images/NavBar_assets/usuario_logo.png";
import flag from '../../../ui/assets/images/compraPage_assets/red_flag.png'
import estrela from '../../../ui/assets/images/imagesCardProduto/estrela_vazia 6.png'
import PopUpPerfil from '../perfil/pop-up-perfil';

import { useEffect, useState } from 'react';
import Report from '../report';


export default function Comments(props) {
    const [popUpPefil, setPopUpPerfil] = useState('');
    const [IsHideReportPopUp, setIsHideReportPopUp] = useState(false);


    function mostrarPopUpPerfil() {

        setPopUpPerfil(true);

        if (popUpPefil == true) {

            setPopUpPerfil(false);

        }

    }
    return (
        <div className='Comment'>

                {(popUpPefil)
                ? <PopUpPerfil/> 
                : <></>}

            <div className="comment-block">
                {(IsHideReportPopUp) ? <Report isHide={IsHideReportPopUp}/> : <></> }
                
                <div className="comments">
                    <div className="comment-box">
                        <div className="content">
                            <div className="img-perfil">
                                <img onClick={mostrarPopUpPerfil} src={Usuario} alt="" />
                            </div>

                            <div className="txt-comment">
                                <div className="username">
                                    <h2>{props.Nome}</h2>
                                    <span>{props.Data}</span>
                                </div>

                                <div className="comment">
                                    <p>{props.Conteudo}</p>
                                </div>
                            </div>
                        </div>

                        <div className="resposta-area">
                            <div className="likes-button">
                                <img src={estrela} alt="" />
                                <h4>X{props.Likes}</h4>
                                <button>Responder</button>
                            </div>

                            <div className="show-answers">
                                <a>  {'>'} </a>
                                <a>2 Respostas</a>
                            </div>
                        </div>
                    </div>
                </div>
                <img id="red-flag" src={flag} alt="" onClick={() => setIsHideReportPopUp(true)} />
            </div>
        </div>
    )
}