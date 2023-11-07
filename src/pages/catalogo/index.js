import './index.scss';
import Rodape from '../../ui/components/rodape/index.js';
import CardProdutoCtlg from '../../ui/components/card-produto-ctlg';

import { useEffect, useState } from 'react';
import NavBar from '../../ui/components/navBar';
import { GetAllProd } from '../../api/produtos';
import FiltroCtlg from '../../ui/components/filtro/filtro-ctlg';

export default function Catalogo() {

    const [list, setList] = useState([]);
   
    const GetProds = async () => {
        let res = await GetAllProd();
        setList(res.data);
    }

    



    useEffect(() => {
        GetProds();
    }, [])

    return (
        <>
                <NavBar />

            <div className="container-ctlg">
                <h1 className='ctlg'>Catálogo</h1>

                <div className='resultados-ctlg'>
                <FiltroCtlg>
                </FiltroCtlg>

                <div className='produtos-result'>
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
                            colecionador={item.TP_COLECIONADOR}
                        />

                    </>)}


                </div>

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

                </div>
                

                <Rodape></Rodape>

        </>
    )
}