import axios from "axios";

import { useEffect, useState } from "react";
import { GetAllProd } from "../../../../api/produtos";

export default function ListaFiltro(props) {

    const [selecX, setSelecX] = useState(false);
    const [buttonFundo, setButtonFundo] = useState('');
    const [buttonFonte, setButtonFonte] = useState('');

    const [estados, SetEstados] = useState([]);
    const [empresas, setEmpresas] = useState([]);

    async function PuxarListagem() {

        let resp = await GetAllProd();
        let dados = resp.data;

        let pushEstado = '';
        let arrEstado = [];

        let pushEmpresa = '';
        let arrEmpresa = [];

        dados.map((item) => {

            if (item.TP_ESTADO !== pushEstado) {
                pushEstado = item.TP_ESTADO;
                arrEstado.push(pushEstado);

            }

            if (item.NM_FABRICANTE !== pushEmpresa) {
                pushEmpresa = item.NM_FABRICANTE;
                arrEmpresa.push(pushEmpresa)

            }
        });

        SetEstados(arrEstado);
        setEmpresas(arrEmpresa);

    }

    function Selecionado() {

        setSelecX((current) => !current);

        if (selecX == false) {

            setButtonFonte('white');
            setButtonFundo('#413E3E');


        }

        else {

            setButtonFonte('');
            setButtonFundo('');


        }



    }

    useEffect(() => {

        PuxarListagem();

    }, [selecX])

    switch (props.item) {

        case 'Empresa':
            return <select className='empresa' style={{ backgroundColor: `${buttonFundo}`, color: `${buttonFonte}` }} onClick={Selecionado}>

                <option>{props.item}</option>
                {


                    empresas.map((it) =>

                        <option>{it}</option>


                    )

                }
            </select>

        case 'Estado':
            return <select className='empresa' style={{ backgroundColor: `${buttonFundo}`, color: `${buttonFonte}` }} onClick={Selecionado}>

                <option>{props.item}</option>
                {


                    estados.map((it) =>

                        <option>{it}</option>


                    )

                }
            </select>

        case 'Ordavaliacao':
            return <select className='empresa' style={{ backgroundColor: `${buttonFundo}`, color: `${buttonFonte}` }} onClick={Selecionado}>

                <option>Melhores Avaliados</option>
                <option>Piores Avaliados</option>


            </select>

        case 'Ordpreco':
            return <select className='empresa' style={{ backgroundColor: `${buttonFundo}`, color: `${buttonFonte}` }} onClick={Selecionado}>

                <option>Menores Preços</option>
                <option>Maiores Preços</option>


            </select>


    }




}


