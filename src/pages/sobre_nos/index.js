import './index.scss';
import Rodape from '../../ui/components/rodape';
import NavBar from '../../ui/components/navBar';
import Corvo from '../../ui/assets/images/perfil-publico_assets/download 2.png';
import JaoCard from '../../ui/components/sobreNos/JaoCard';
import DenzCard from '../../ui/components/sobreNos/DenzCard';

import { useState } from 'react';

export default function SobreNos() {
    const [IsJC, setIsJC] = useState(false);

    const Next = () => {
        let i = 30;
        document.getElementById('DC').style.transition = `transform 0.5s ease`
        document.getElementById('DC').style.transform = "translateX(50%)"
    }
   
    const Previous = () => {
        document.getElementById('DC').style.transition = "transform 0.5s ease";
        document.getElementById('DC').style.transform = "translateX(-0)";
    }

    return (
        <>
            <NavBar />
            <div className='container_sobrenos'>
                <div className='conteudo'>
                    <div className='descricao'>
                        <h1>Sobre nós</h1>
                        <p>Nós somos 5 jovens aficionados por videogames antigos e criamos esse site com a missão de trazer as boas memórias que só uma tarde videogame podem proporcionar. </p>
                    </div>
                    <div className='container_perfil'>
                        <h2 style={{ fontSize: 70, cursor: "pointer" }} onClick={Previous} > {'<'} </h2>
                        <div className='perfil'>

                            <div className='conteudo_perfil' style={{ display: 'flex' }}  >
                                <div id='DC'style={{ display: 'flex' }}>


                                    <div id='DCa'>
                                        <DenzCard />
                                    </div>
                                    <div id='JCa' >
                                        <JaoCard />
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                        <h2 style={{ fontSize: 70, cursor: "pointer" }} onClick={Next}> {'>'}</h2>
                    </div>
                </div>
            </div>

            <Rodape />
        </>
    )
}