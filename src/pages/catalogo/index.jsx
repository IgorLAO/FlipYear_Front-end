import './index.scss';
import Rodape from '../../ui/components/rodape/index.js';
import CardProdutoCtlg from '../../ui/components/card-produto-ctlg';

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Catalogo() {
    const [list, setList] = useState([]);

    const GetProds = async () => {
        let res = await axios.get('http://localhost:5000/produtos');
        setList(res.data);
        console.log(list);


    }


    

    useEffect(() => {
        GetProds();
    }, [])

    return (
        <>
            <div className="container-ctlg">
                <h1 className='ctlg'>Catálogo</h1>
                <div className="bloco-filtro-ctlg">
                    <div>
                        <p>Tipo de Produto</p>

                    </div>
                    <div className="filtros-ctlg">
                        <div>
                            <a>Jogos</a>
                            <a>Consoles</a>
                            <a>Super Nintendo</a>
                        </div>
                        <div>
                            <a>Colecionador</a>
                            <a>Funcionando</a>
                            <a>Mega Drive</a>
                        </div>
                    </div>
                </div>
                <h1 className='exib'>Exibindo todos os resultados para { }</h1>

                <div className='resultados'>
                    {list?.map((item) => <>
                        <CardProdutoCtlg 
                            id_categoria = {item.ID_CATEGORIA}
                            id_prod = {item.ID_PRODUTO}
                            destaque ={item.BT_DESTAQUE}
                            bt_disp = {item.BT_DISPONIVEL}
                            bt_promo = {item.BT_PRMOCAO}
                            detalhes = {item.DS_DETALHES}
                            Nome_categ = {item.NM_CATEGORIA}
                            Nome_prod = {item.NM_PRODUTO}
                            qtd = {item.QTD_ESTOQUE}
                            preco = {item.VL_PRECO}
                            preco_promo = {item.VL_PRECO_PROMOCIONA}
                            />
                    </>)}
                </div>


                <div className='resultados'>
                    <CardProdutoCtlg></CardProdutoCtlg>
                    <CardProdutoCtlg></CardProdutoCtlg>
                    <CardProdutoCtlg></CardProdutoCtlg>
                    <CardProdutoCtlg></CardProdutoCtlg>
                </div>

                <div className='paginacao'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p> {">"} </p>
                </div>
                <Rodape></Rodape>


            </div>

        </>
    )
}