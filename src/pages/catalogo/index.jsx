  import './index.scss';
import Rodape from '../../ui/components/rodape/index.js';
import CardProdutoCtlg from '../../ui/components/card-produto-ctlg';

import axios from 'axios';
import { useEffect, useState } from 'react';
import NavBar from '../../ui/components/navBar';

export default function Catalogo() {
    const [list, setList] = useState([]);
    

    const GetProds = async () => {
        let res = await axios.get('http://localhost:5000/produtos');
        setList(res.data);


    }


    useEffect(() => {
        GetProds();
    }, [])

    return (
        <>
            <div className="container-ctlg">
                <NavBar/>
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
                    {list.map((item) => <>

                        <CardProdutoCtlg 
                            preco={item.VL_PRECO} 
                            nome={item.NM_PRODUTO} 
                            precoPromocao={item.VL_PRECO_PROMOCIONAL} 
                            promocao={item.BT_PROMOCAO} 
                            avaliacao={item.VL_AVALIACAO}
                            fabricante={item.NM_FABRICANTE}
                            estado={item.TP_ESTADO}
                            estoque={item.QTD_ESTOQUE}
                            idProduto={item.ID_PRODUTO}
                            />
             
                    </>)}
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