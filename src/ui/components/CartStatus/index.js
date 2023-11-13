import './index.scss';
import Carrinho_logo from "../../assets/images/NavBar_assets/carrinho_logo_cabecalho.png";
import { ConsultaCarrinho } from '../../../api/carrinho';
import { useState } from 'react';

export default function CartStatus({mostrarCarrinho}){
    const [list, setList] = useState([]);

   async function chamarCarrinho(){
        mostrarCarrinho();

        const resp = await ConsultaCarrinho();
        setList(resp.data[0]);

    }
    return(
        <>
            <div className="cart-status" onClick={chamarCarrinho}>
                <img src={Carrinho_logo}/>
                <span>{list.QTD_PRODUTO_CARRINHO}</span>
            </div>
        </>
    )
}