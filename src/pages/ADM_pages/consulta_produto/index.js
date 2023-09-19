import "./style.scss"
import { useState, useEffect } from "react";

import axios from "axios";

import Adm_leftNavBar from "../../../ui/components/ADM_components/left_navbar";
import AdmTopNavBar from "../../../ui/components/ADM_components/topNavBar";

import searchIcon from '../../../ui/assets/images/NavBar_assets/lupa.png';
import filter from '../../../ui/assets/images/adm_assets/filter_icon 1.svg';
import Filter from "../../../ui/components/ADM_components/Filter";

export default function Produtos_ConsultaADM() {
    const [listProdutos, setListProdutos] = useState([]);

    const [selectdOptionStyle, setSelectdOptionStyle] = useState('');
    const [isHide_X, setisHide_X] = useState(false);
    const [IsHideFilterMenu, setIsHideFilterMenu] = useState(false);

    const Hide = () => {
        setIsHideFilterMenu(true);

        if (IsHideFilterMenu ) {
            setIsHideFilterMenu(false);
        }
    }

   const GetProducts = async () =>{
    let res = await axios.get('http://localhost:5000/produtos')

    console.log(res)

    setListProdutos(res.data)
   }
   

   useEffect(() => {
    GetProducts();
}, []);


    return (<div className="ADM_usersConsulta">
        <AdmTopNavBar />
        <div className="s">
            <Adm_leftNavBar />
            <div className="content">
                <h1> Buscar Produtos </h1>


                <span style={{ display: "flex", justifyContent: "center" }}>
                    <span className='searchBox'>
                        <img onClick={GetProducts} src={searchIcon} />
                        <input type="text" />
                    </span>
                    <img
                        src={filter}
                        style={{ marginLeft: 10, marginTop: -40, width: 40 }}
                        onClick={Hide} />

                </span>
                {IsHideFilterMenu &&

                    <Filter/>
                }

                <table>
                    <colgroup>
                        <col style={{ width: 1 + '%' }} />
                        <col style={{ width: 15 + '%' }} />
                        <col style={{ width: 5 + '%' }} />
                        <col style={{ width: 10 + '%' }} />
                        <col style={{ width: 1 + '%' }} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Produto</th>
                            <th>QTD</th>
                            <th>Categoria</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                    {listProdutos.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id || item.ID_PRODUTO}</td>
                                <td>{item.nome || item.NM_PRODUTO}</td>
                                <td>{item.estoque || item.QTD_ESTOQUE}</td>
                                <td>{item.NM_CATEGORIA}</td>
                                <td> R${item.preco || item.VL_PRECO}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>);
}