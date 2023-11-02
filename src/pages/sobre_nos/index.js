import './index.scss';

import { useEffect, useState } from 'react';

// import Carousel from 'react-elastic-carousel'

import Rodape from '../../ui/components/rodape';
import NavBar from '../../ui/components/navBar';

import JaoCard from '../../ui/components/sobreNos/JaoCard';
import DenzCard from '../../ui/components/sobreNos/DenzCard';

import IgoCard from '../../ui/components/sobreNos/IgoCard';



export default function SobreNos() {
    const [Position, setPosition] = useState(0);

    const Next = () => {
        setPosition(Position + 800);
        console.log(Position)
    }

    const Previous = () => {
        setPosition(Position - 800);
        console.log(Position)
    }

    useEffect(() => {
        if (Position < 3600 && Position > 0) {
            let divElement = document.getElementById("DC");
            divElement.style.transition = `transform 500ms ease`;
            divElement.style.transform = `translateX(${Position}px)`;
        }

    }, [Position])


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
                        <h2 style={{ fontSize: 70, cursor: "pointer" }} onClick={Next}> {'<'} </h2>
                        <div className=''>

                            <div className='conteudo_perfil' style={{ display: 'flex', width: '45vh'}}  >
                                <div id='DC' style={{ display: 'flex'}}>

                                    <div id='C'>
                                        <DenzCard />
                                    </div>

                                    <div id='C' >
                                        <JaoCard />
                                    </div>

                                    <div id='C' >
                                        <IgoCard />
                                    </div>

                                    <div id='C' >
                                        <IgoCard />
                                    </div>

                                    <div id='C' >
                                        <IgoCard />
                                    </div>

                                </div>
                            </div>
{/* 
                            <div style={{ display: 'flex' }}  >
                                <div style={{ display: 'flex', width: '700px', height: '800px', alignItems: 'center' }}>
                                    {/* <Carousel itemsToShow={1}>
                                        <div>
                                            <DenzCard />
                                        </div>

                                        <div >
                                            <JaoCard />
                                        </div>

                                        <div >
                                            <IgoCard />
                                        </div>

                                        <div >
                                            <IgoCard />
                                        </div>

                                        <div >
                                            <IgoCard />
                                        </div>
                                    </Carousel>

                                </div>
                            </div> */}

                        </div>
                        <h2 style={{ fontSize: 70, cursor: "pointer" }} onClick={Previous}> {'>'}</h2>
                    </div>
                </div>
            </div>

            <Rodape />
        </>
    )
}