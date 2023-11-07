import './index.scss';
import filtro from '../../assets/images/NavBar_assets/filtro_logo.png'
import { useState } from 'react';

import Butao from './butao/butao';
import ListaFiltro from './lista/lista';
import ValoresFiltro from './valores/valores';

export default function Filtro({setPopUpFiltro}) {

    return (
        <>

            <div className='clicar-fora' onClick={() =>{ setPopUpFiltro(false) }}></div>
        

            <div className='card-filtro'>

                <div className='titulo'>
                    <div>
                        <img src={filtro} className='filtro-card'></img>
                        <h2>Ordenar Por</h2>
                    </div>
                    <div className='linha-preta'></div>
                </div>

                <div className='opc-selec'>

                    <ListaFiltro item={'Ordavaliacao'}></ListaFiltro>
                    <ListaFiltro item={'Ordpreco'}></ListaFiltro>

                </div>


                <div className='titulo'>
                    <div>
                        <h2>Tipo de Produto</h2>
                    </div>
        </div>
                    <div className='linha-preta'></div>

                <div className='opc-selec'>

                    <Butao item={'Jogos de CD'}></Butao>

                    <Butao item={'Jogos de Fita'}></Butao>

                    <Butao item={'Consoles'}></Butao>

                    <Butao item={'Fliperamas'}></Butao>

                    <ListaFiltro item={'Empresa'}></ListaFiltro>


                </div>


                <div className='titulo'>
                    <div>
                        <h2>Atributos</h2>
                    </div>
                    <div className='linha-preta'></div>
                </div>

                <div className='opc-selec'>

                    <Butao item={'Promoção'}></Butao>

                    <Butao item={'Destaque'}></Butao>

                    <Butao item={'Colecionador'}></Butao>

                    <ListaFiltro item={'Estado'}></ListaFiltro>


                </div>

                <div className='titulo'>
                    <div>
                        <h2>Valores</h2>
                    </div>
                    <div className='linha-preta'></div>
                </div>

                <div className='opc-selec'>

                    <ValoresFiltro
                        item={'Preço'}
                        inter={'?????'}
                    ></ValoresFiltro>

                    <ValoresFiltro
                        item={'Estoque'}
                        inter={'???'}>
                    </ValoresFiltro>

                    <ValoresFiltro
                        item={'Avaliação'}
                        inter={'?'}>
                    </ValoresFiltro>


                </div>
                </div>
        </>




           









    )




}
