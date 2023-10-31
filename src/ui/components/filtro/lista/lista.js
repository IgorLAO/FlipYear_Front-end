import { useEffect, useState } from "react";
import axios from "axios";

export default function ListaFiltro(props){

    const [selecX, setSelecX] = useState(false);
    const [buttonFundo, setButtonFundo] = useState('');
    const [buttonFonte, setButtonFonte] = useState('');

    const [lista, setLista] = useState([]);

    async function PuxarListagem(){

        let resp = await axios.get('http://localhost:5000/produtos');
        let dados = resp.data;
        setLista(dados);

      

    } 

    function Selecionado(){

        setSelecX((current) => !current);

        if(selecX == false){

            setButtonFonte('white');
            setButtonFundo('#413E3E');


        }

        else{

            setButtonFonte('');
            setButtonFundo('');


        }



    }

    useEffect(()=>{

        PuxarListagem();

    })


return(
    <select className='empresa'style={{ backgroundColor: `${buttonFundo}`, color: `${buttonFonte}`}} onClick={Selecionado}>

        <option>{props.item}</option>
    {


        lista.map((it) =>{

            <option>{it.TP_ESTADO}</option>


        })

    }
</select>



)

}