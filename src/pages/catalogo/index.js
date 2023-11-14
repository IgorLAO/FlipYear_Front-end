import './index.scss';
import Rodape from '../../ui/components/rodape/index.js';
import CardProdutoCtlg from '../../ui/components/card-produto-ctlg';

import { useEffect, useState } from 'react';
import NavBar from '../../ui/components/navBar';
import { GetAllProd } from '../../api/produtos';
import FiltroCtlg from '../../ui/components/filtro/filtro-ctlg';

export default function Catalogo() {

    const [list, setList] = useState([]);
    const [backupArr, setBackupArr] = useState([]);
    const [filtroColecionadorSwitch, setFiltroColecionadorSwitch] = useState(false);
    const [filtroPromocaoSwitch, setFiltroPromocaoSwitch] = useState(false);
    const [filtroDestaqueSwitch, setFiltroDestaqueSwitch] = useState(false);
    const [filtroEmpresa, setFiltroEmpresa] = useState('Empresa');
    const [ordenacaoSwitch, setOrdenacaoSwitch] = useState(false);
    const [filtroPreco, setFiltroPreco] = useState({
        inicial: '',
        final: ''
    })



    useEffect(() => {
        filtrarResultados();
    }, [filtroColecionadorSwitch, 
        filtroPromocaoSwitch, 
        filtroDestaqueSwitch, 
        filtroPreco,
        filtroEmpresa])


    function filtrarResultados() {
        let filtro = [...backupArr];

        if (filtroPromocaoSwitch)
            filtro = filtro.filter(item => item.BT_PROMOCAO == true);

        if (filtroColecionadorSwitch){
            filtro = filtro.filter(item => item.TP_COLECIONADOR == true);
        }

        if (filtroDestaqueSwitch){
            filtro = filtro.filter(item => item.BT_DESTAQUE == true)
        }

        if(filtroPreco.inicial !== '' && filtroPreco.final !== ''){
            filtro =  filtro.filter(item => item.BT_PROMOCAO == true && 
                item.VL_PRECO_PROMOCIONAL >= filtroPreco.inicial && 
                item.VL_PRECO_PROMOCIONAL <= filtroPreco.final ||
                item.BT_PROMOCAO == false && 
                item.VL_PRECO >= filtroPreco.inicial && 
                item.VL_PRECO <= filtroPreco.final)
                
        }

        if(filtroEmpresa !== 'Empresa'){
            filtro = filtro.filter(item => item.NM_FABRICANTE == filtroEmpresa)
        }


        setList(filtro);
    }



    const GetProds = async () => {
        let res = await GetAllProd();
        setList(res.data);
        setBackupArr(res.data);
    }

    function OrdMelhoresAvaliados(){
        const melhoresAval = [...list].sort((a,b) => a.VL_AVALIACAO - b.VL_AVALIACAO);
        setList(melhoresAval);

    }

    function OrdPioresAvaliados(){
        const pioresAval = [...list].sort((a,b) => b.VL_AVALIACAO - a.VL_AVALIACAO);
        setList(pioresAval);

    }


    function OrdMaioresPrecos(){

        const maioresPrecos = [...list].sort((a,b) => {
            if(a.BT_PROMOCAO == true && b.BT_PROMOCAO == true) return a.VL_PRECO_PROMOCIONAL - b.VL_PRECO_PROMOCIONAL
            if(a.BT_PROMOCAO == true && b.BT_PROMOCAO == false) return a.VL_PRECO_PROMOCIONAL - b.VL_PRECO
            if(a.BT_PROMOCAO == false && b.BT_PROMOCAO == true) return a.VL_PRECO - b.VL_PRECO_PROMOCIONAL
            if(a.BT_PROMOCAO == false && b.BT_PROMOCAO == false) return a.VL_PRECO - b.VL_PRECO


        });
        setList(maioresPrecos);

    }

    function OrdMenoresPrecos(){

        setOrdenacaoSwitch(!ordenacaoSwitch)

        const menoresPrecos = [...list].sort((a,b) => {
            
            if(a.BT_PROMOCAO == true && b.BT_PROMOCAO == true) return b.VL_PRECO_PROMOCIONAL - a.VL_PRECO_PROMOCIONAL
            if(a.BT_PROMOCAO == true && b.BT_PROMOCAO == false) return b.VL_PRECO - a.VL_PRECO_PROMOCIONAL
            if(a.BT_PROMOCAO == false && b.BT_PROMOCAO == true) return b.VL_PRECO_PROMOCIONAL - a.VL_PRECO
            if(a.BT_PROMOCAO == false && b.BT_PROMOCAO == false) return b.VL_PRECO - a.VL_PRECO

        });
        
        setList(menoresPrecos);

    }   


    function FiltroColecionador() {
        setFiltroColecionadorSwitch(!filtroColecionadorSwitch);
    }

    function FiltroPromocao() {
        setFiltroPromocaoSwitch(!filtroPromocaoSwitch);
    }
    function FiltroDestaque() {
        setFiltroDestaqueSwitch(!filtroDestaqueSwitch);
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
                <FiltroCtlg 
                    OrdMelhoresAvaliados={OrdMelhoresAvaliados}
                    OrdPioresAvaliados = {OrdPioresAvaliados}
                    OrdMaioresPrecos={OrdMaioresPrecos}
                    OrdMenoresPrecos={OrdMenoresPrecos}
                    FiltroColecionador={FiltroColecionador}
                    FiltroPromocao={FiltroPromocao}
                    FiltroDestaque={FiltroDestaque}
                    setFiltroPreco ={setFiltroPreco}
                    setFiltroEmpresa={setFiltroEmpresa}

                >
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