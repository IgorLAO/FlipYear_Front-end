import './style.scss'

import CarIcon from '../../../assets/images/perfil-pessoal/image-removebg-preview (8) 2.png'

export default function SideBarUsers(){

    return(
        <div className="MainSideBar">
            <div className="op">
                <span>
                    <img src='' />
                    <a> Home </a>
                </span>
                <span>
                    <img src="aa" />
                    <a> Notificações </a>
                </span>
                <span>
                    <img src={CarIcon} />
                    <a> Carrinho </a>
                </span>
                <span>
                    <img src="aa" />
                    <a> Buscar pedidos anteriores </a>
                </span>
            </div>
    </div>
    );
}