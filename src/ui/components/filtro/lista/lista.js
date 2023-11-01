import { useEffect, useState } from "react";
import axios from "axios";

export default function ListaFiltro(props) {

    const [selecX, setSelecX] = useState(false);
    const [buttonFundo, setButtonFundo] = useState('');
    const [buttonFonte, setButtonFonte] = useState('');

    const [listagem, setListagem] = useState([]);
    const [estados, SetEstados] = useState([]);
    const [empresas, setEmpresas] = useState([]);

    async function PuxarListagem() {

        let resp = await axios.get('http://localhost:5000/produtos');
        let dados = resp.data;

        let pushEstado = '';
        let arrEstado = [];

        let pushEmpresa = '';
        let arrEmpresa =  [];
        
        dados.map((item) => {

            if(item.TP_ESTADO !== pushEstado){

                pushEstado = item.TP_ESTADO;
                arrEstado.push(pushEstado);


            }

            if(item.NM_FABRICANTE !== pushEmpresa){

                pushEmpresa = item.NM_FABRICANTE;
                arrEmpresa.push(pushEmpresa)

            }



        })

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

    })


    return (

        <>

            {

                (props.item == 'Empresa')

                    ? <select className='empresa' style={{ backgroundColor: `${buttonFundo}`, color: `${buttonFonte}` }} onClick={Selecionado}>

                        <option>{props.item}</option>
                        {


                            empresas.map((it) =>

                                <option>{it}</option>


                            )

                        }
                    </select>

                    : <select className='empresa' style={{ backgroundColor: `${buttonFundo}`, color: `${buttonFonte}` }} onClick={Selecionado}>

                        <option>{props.item}</option>
                        {


                            estados.map((it) =>

                                <option>{it}</option>


                            )

                        }
                    </select>





            }
        </>



    )

}