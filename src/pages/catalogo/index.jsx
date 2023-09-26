import './index.scss';
import Rodape from '../../ui/components/rodape/index.js';
import CardProdutoCtlg from '../../ui/components/card-produto-ctlg';

import axios from 'axios';
import { useState } from 'react';

export default function Catalogo(){
    const [listProd, setListProd] = useState([]);

    

    return(
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
                <h1 className='exib'>Exibindo todos os resultados para {}</h1>

                <div className='resultados'>
                    <CardProdutoCtlg></CardProdutoCtlg>
                    <CardProdutoCtlg></CardProdutoCtlg>
                    <CardProdutoCtlg></CardProdutoCtlg>
                    <CardProdutoCtlg></CardProdutoCtlg>
                </div>

                <div className='resultados'>
                    <CardProdutoCtlg></CardProdutoCtlg>
                    <CardProdutoCtlg></CardProdutoCtlg>
                    <CardProdutoCtlg></CardProdutoCtlg>
                    <CardProdutoCtlg></CardProdutoCtlg>
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