import './index.scss';

import { useEffect, useState } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';

import Rodape from '../../ui/components/rodape';
import NavBar from '../../ui/components/navBar';

import JaoCard from '../../ui/components/sobreNos/JaoCard';
import DenzCard from '../../ui/components/sobreNos/DenzCard';

import IgoCard from '../../ui/components/sobreNos/IgoCard';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function SobreNos() {
    const [Position, setPosition] = useState(0);

  
    return (
        <>
            <NavBar />
            <div className='container_sobrenos'>
                <div className='conteudo'>
                    <div className='descricao'>
                        <h1>Sobre nós</h1>
                        <p style={{font: '17px', border:' red solid'}}>Nós somos 5 jovens aficionados por videogames antigos e criamos esse site com a missão de trazer as boas memórias que só uma tarde videogame podem proporcionar. </p>
                    </div>
                    <div className='container_perfil'>

                        <div className='sw' style={{ display: 'flex', width: '275px', alignItems: 'center', border: 'red solid' }}>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide> <DenzCard /></SwiperSlide>
                                <SwiperSlide> <JaoCard /></SwiperSlide>
                                <SwiperSlide> <IgoCard /></SwiperSlide>

                            </Swiper>
                        </div>

                    </div>
                </div>
            </div>

            <Rodape />
        </>
    )
}