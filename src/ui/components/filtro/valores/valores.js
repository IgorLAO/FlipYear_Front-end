import './valores.scss'
import { useEffect, useState } from 'react';

export default function ValoresFiltro(props){

    const [buttonFundo, setButtonFundo] = useState('');
    const [buttonFonte, setButtonFonte] = useState('');

    const[input1, setInput1] = useState('');
    const[input2, setInput2] = useState('');

    useEffect(()=>{
        

        if(!input1 && !input2){


            setButtonFonte('');
            setButtonFundo('');

        }

        else{


            
            setButtonFonte('white');
            setButtonFundo('#413E3E');


        }
        

        


    }, [input1, input2])







    return(

        <div 
        className='valores-selec' 
       
        style={{ backgroundColor: `${buttonFundo}`, color: `${buttonFonte}`}}
        >

            <p>{props.item}</p>
            <input type='number' 
            placeholder={props.inter}
            onChange={(e) => {setInput1(e.target.value); }} ></input>
            <p>e</p>
            <input type='number'
            placeholder={props.inter}
            onChange={(e) => {setInput2(e.target.value); }} ></input>
        </div>


    )




}