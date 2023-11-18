import "./style.scss"
import { useState, useEffect } from "react";

import { Delete, GetAllProd } from "../../../api/produtos";

import Adm_leftNavBar from "../../../ui/components/ADM_components/left_navbar";
import AdmTopNavBar from "../../../ui/components/ADM_components/topNavBar";


import searchIcon from '../../../ui/assets/images/NavBar_assets/lupa.png';
import filter from '../../../ui/assets/images/adm_assets/filter_icon 1.svg';
import Filter from "../../../ui/components/ADM_components/Filter";
import MoreOP from "../../../ui/components/ADM_components/MoreOP";
import penIcon from "../../../ui/assets/images/adm_assets/pen.png";

export default function Produtos_ConsultaADM() {
    const [listProdutos, setListProdutos] = useState([]);
    const [IsHideFilterMenu, setIsHideFilterMenu] = useState(false);
    const [WidthDisplay, setWidthDisplay] = useState(0);
    const [Display, setDisplay] = useState('none');
    const [expandedItems, setExpandedItems] = useState([]);
    const [Error, setError] = useState('');

    const Hide = () => {
        setIsHideFilterMenu(true);

        if (IsHideFilterMenu) {
            setIsHideFilterMenu(false);
        }
    }

    const GetProducts = async () => {
        try {
            let res = await GetAllProd();
            setListProdutos(res.data)
        } catch (err) {
            console.log(err)
            setError(`Parece Meio Vazio`)
        }
    }

    async function DeleteItem(id) {
        let i = await Delete(id);
        GetProducts();
        console.log(i)
    }

    useEffect(() => {
        GetProducts();
    }, []);


    return (
        <>
            <div className="ADM_usersConsulta">
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
                            <Filter />
                        }

                        <table>
                            <colgroup>
                                <col style={{ width: 1 + '%' }} />
                                <col style={{ width: 15 + '%' }} />
                                <col style={{ width: 5 + '%' }} />
                                <col style={{ width: 10 + '%' }} />
                                <col style={{ width: 1 + '%' }} />
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
                                {listProdutos.map((item, i) => (
                                    <tr key={item.id}>
                                        <td> {item.id || item.ID_PRODUTO} </td>
                                        <td>{item.nome || item.NM_PRODUTO}</td>
                                        <td>{item.estoque || item.QTD_ESTOQUE}</td>
                                        <td>{item.NM_CATEGORIA}</td>
                                        <td> R${item.preco || item.VL_PRECO}</td>
                                        <td>
                                            <span style={{ display: 'flex' }}>
                                                <img style={{ width: '15px', objectFit: 'contain', marginRight: '15px'}} src={penIcon} />
                                                <h1 onClick={() => DeleteItem(item.ID_PRODUTO)} > X </h1>
                                            </span>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <h3 style={{ color: '#fff' }}>
                            {Error}
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
}