
import './index.scss'
import { useState } from 'react'

import EstrelaVaziaEsquerda from '../../../assets/images/imagesCardProduto/estrelavazia esquerda.png'
import EstrelaVaziaDireita from '../../../assets/images/imagesCardProduto/estrelavaziadireita.png'
import EstrelaCheiaEsquerda from '../../../assets/images/imagesCardProduto/estrelacheiaesquerda.png'
import EstrelaCheiaDireita from '../../../assets/images/imagesCardProduto/estrelacheiadireita.png'

export default function EstrelasAvaliacao(){

    const [estrelaCheiaEsq1, setEstrelaCheiaEsq1] = useState(false);
    const [estrelaCheiaDir1, setEstrelaCheiaDir1] = useState(false);


    const [estrelaCheiaEsq2, setEstrelaCheiaEsq2] = useState(false);
    const [estrelaCheiaDir2, setEstrelaCheiaDir2] = useState(false);

    const [estrelaCheiaEsq3, setEstrelaCheiaEsq3] = useState(false);
    const [estrelaCheiaDir3, setEstrelaCheiaDir3] = useState(false);
 

    const [estrelaCheiaEsq4, setEstrelaCheiaEsq4] = useState(false);
    const [estrelaCheiaDir4, setEstrelaCheiaDir4] = useState(false);


    const [estrelaCheiaEsq5, setEstrelaCheiaEsq5] = useState(false);
    const [estrelaCheiaDir5, setEstrelaCheiaDir5] = useState(false);



    const [clicado, setClicado] = useState(false);

    //Selects da esquerda

    function selectEstrelaEsq(){

        setEstrelaCheiaEsq1(true);
    }

    function selectEstEsq2(){

        setEstrelaCheiaEsq2(true);
        setEstrelaCheiaDir1(true);
        setEstrelaCheiaEsq1(true);
        



    }

    function selectEstEsq3(){

        setEstrelaCheiaEsq3(true);
        selectEstEsq2();
        selectEstDir2();


    }

    function selectEstEsq4(){

        setEstrelaCheiaEsq4(true);
        selectEstEsq3();
        selectEstDir3();


    }

    function selectEstEsq5(){

        setEstrelaCheiaEsq5(true);
        selectEstEsq4();
        selectEstDir4();



    }

    //Selects da direita

    function selectEstrelaDir(){


        setEstrelaCheiaDir1(true);


    }


    function selectEstDir2(){

        selectEstEsq2();
        setEstrelaCheiaDir2(true);



    }

    function selectEstDir3(){

        setEstrelaCheiaDir3(true);
        selectEstEsq3();



    }

    function selectEstDir4(){
        
        setEstrelaCheiaDir4(true);
        selectEstEsq4();


    }
    
    function selectEstDir5(){


        setEstrelaCheiaDir5(true);
        selectEstEsq5();


    }


    //Unselect da Esquerda

    function unselectEstrelaEsq(){

        if(clicado == false){

            setEstrelaCheiaEsq1(false)

        }

    }

    function unselectEstEsq2(){

        if(clicado == false){

            setEstrelaCheiaEsq2(false);
            unselectEstrelaDir();
            unselectEstrelaEsq();

        }


    }

    function unselectEstEsq3(){


        if(clicado == false){

            setEstrelaCheiaEsq3(false);
            unselectEstDir2();
            unselectEstEsq2();


        }



    }

    function unselectEstEsq4(){


        if (clicado == false){

            setEstrelaCheiaEsq4(false);
            unselectEstDir3();
            unselectEstEsq3();



        }



    }

    function unselectEstEsq5(){

        if (clicado == false){

            setEstrelaCheiaEsq5(false);
            unselectEstDir4();
            unselectEstEsq4();



        }



    }

    //Unselect da Direita

    function unselectEstrelaDir(){

        if(clicado == false){

            setEstrelaCheiaDir1(false);


        }




    }

    function unselectEstDir2(){


        if(clicado == false){


            setEstrelaCheiaDir2(false)
            unselectEstEsq2();


        }


    }

    function unselectEstDir3(){


        if (clicado == false){

            setEstrelaCheiaDir3(false);
            unselectEstEsq3();


        }


    }

    function unselectEstDir4(){

        if (clicado == false){

            setEstrelaCheiaDir4(false);
            unselectEstEsq4();


        }



    }

    function unselectEstDir5(){

        if(clicado == false){

            setEstrelaCheiaDir5(false);
            unselectEstEsq5();


        }



    }






    function ClickEsq(){

        setClicado((current) => !current);


    }

    function ClickDir(){

        setClicado((current) => !current);
        selectEstrelaDir();
        selectEstrelaEsq();


    }


return(

    <div className='estrelas-linha'>

    <div className='estrelas'>
        {estrelaCheiaEsq1 == true

        ? <img src={EstrelaCheiaEsquerda} onMouseLeave={unselectEstrelaEsq} onClick={ClickEsq}></img>

        
        :<img src={EstrelaVaziaEsquerda}  
        onMouseEnter={selectEstrelaEsq}
        onClick={ClickEsq}></img>

        }

        {estrelaCheiaDir1 == true

        ?<img src={EstrelaCheiaDireita} 
        onMouseLeave={() => {unselectEstrelaDir(); unselectEstrelaEsq();}} onClick={ClickDir}></img>
       

        :<img src={EstrelaVaziaDireita} 
        onMouseEnter={() => {selectEstrelaDir(); selectEstrelaEsq();}} onClick={ClickDir}></img>


        }


    </div>

    <div className='estrelas'>
        {estrelaCheiaEsq2 == true

        ? <img src={EstrelaCheiaEsquerda} onMouseLeave={unselectEstEsq2} onClick={ClickEsq}></img>

        
        :<img src={EstrelaVaziaEsquerda}  
        onMouseEnter={selectEstEsq2}
        onClick={ClickEsq}></img>

        }

        {estrelaCheiaDir2 == true

        ?<img src={EstrelaCheiaDireita} 
        onMouseLeave={unselectEstDir2} onClick={ClickDir}></img>
       

        :<img src={EstrelaVaziaDireita} 
        onMouseEnter={selectEstDir2} onClick={ClickDir}></img>


        }


    </div>

    <div className='estrelas'>
        {estrelaCheiaEsq3 == true

        ? <img src={EstrelaCheiaEsquerda} onMouseLeave={unselectEstEsq3} onClick={ClickEsq}></img>

        
        :<img src={EstrelaVaziaEsquerda}  
        onMouseEnter={selectEstEsq3}
        onClick={ClickEsq}></img>

        }

        {estrelaCheiaDir3 == true

        ?<img src={EstrelaCheiaDireita} 
        onMouseLeave={unselectEstDir3} onClick={ClickDir}></img>
       

        :<img src={EstrelaVaziaDireita} 
        onMouseEnter={selectEstDir3} onClick={ClickDir}></img>


        }


    </div>

    <div className='estrelas'>
        {estrelaCheiaEsq4 == true

        ? <img src={EstrelaCheiaEsquerda} onMouseLeave={unselectEstEsq4} onClick={ClickEsq}></img>

        
        :<img src={EstrelaVaziaEsquerda}  
        onMouseEnter={selectEstEsq4}
        onClick={ClickEsq}></img>

        }

        {estrelaCheiaDir4 == true

        ?<img src={EstrelaCheiaDireita} 
        onMouseLeave={unselectEstDir4} onClick={ClickDir}></img>
       

        :<img src={EstrelaVaziaDireita} 
        onMouseEnter={selectEstDir4} onClick={ClickDir}></img>


        }


    </div>

    <div className='estrelas'>
        {estrelaCheiaEsq5 == true

        ? <img src={EstrelaCheiaEsquerda} onMouseLeave={unselectEstEsq5} onClick={ClickEsq}></img>

        
        :<img src={EstrelaVaziaEsquerda}  
        onMouseEnter={selectEstEsq5}
        onClick={ClickEsq}></img>

        }

        {estrelaCheiaDir5 == true

        ?<img src={EstrelaCheiaDireita} 
        onMouseLeave={unselectEstDir5} onClick={ClickDir}></img>
       

        :<img src={EstrelaVaziaDireita} 
        onMouseEnter={selectEstDir5} onClick={ClickDir}></img>


        }


    </div>

    </div>


)





}