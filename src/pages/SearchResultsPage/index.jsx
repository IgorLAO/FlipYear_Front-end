  import './index.scss';
import Rodape from '../../ui/components/rodape/index.js';
import CardProdutoCtlg from '../../ui/components/card-produto-ctlg';

import axios from 'axios';
import { useEffect, useState } from 'react';
import NavBar from '../../ui/components/navBar';
import localStorage from 'local-storage';
import { useNavigate } from 'react-router-dom';

export default function SearchResults(props) {
    const [list, setList] = useState([]);
    const navigate = useNavigate('')
    

    const GetProds = async () => {
        let infos = localStorage('SearchValue')
        let res = await axios.get(`http://localhost:5000/produto/busca?search=${infos}`);
        setList(res.data);
        console.log(props.SearchValue);


    }


    useEffect(() => {
        GetProds();
        if(!localStorage('SearchValue')){
            navigate('/')
        }   
    }, [])

    return (
        <>
            <div className="container-ctlg">
                <NavBar/>
                <h1 className='exib'>Exibindo todos os resultados para { }</h1>

                <div className='resultados'>
                    {list?.map((item) => <>
                        <CardProdutoCtlg 
                            preco={item.Preco} 
                            nome={item.Nome} precoPromocao={item.Promo} 
                            promocao={item.IsPromo} avaliacao={item.Avaliacao}
                            fabricante={item.Fabricante}
                            estado={item.Estado}
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