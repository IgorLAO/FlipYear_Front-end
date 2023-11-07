import Butao from '../butao/butao'
import ListaFiltro from '../lista/lista'
import OrdenaçãoAvaliados from '../lista/listaAvaliados'
import OrdenacaoPreco from '../lista/listaPreco'
import ValoresFiltro from '../valores/valores'
import filtro from '../../../assets/images/NavBar_assets/filtro_logo.png'
import './index.scss'

export default function FiltroCtlg({OrdMelhoresAvaliados, OrdPioresAvaliados, OrdMaioresPrecos, OrdMenoresPrecos}) {
   


    return (


        <div>


            <div className='card-filtro-ctlg'>

            <div className='titulo'>
                <div>
                <img src={filtro} className='filtro-card'></img>
                <h2>Ordenar Por</h2>    
                </div>
                <div className='linha'></div>
            </div>

            <div className='opc-selec'>

                <OrdenaçãoAvaliados 
                OrdMelhoresAvaliados={OrdMelhoresAvaliados}
                OrdPioresAvaliados={OrdPioresAvaliados}>
                </OrdenaçãoAvaliados>
                <OrdenacaoPreco 
                OrdMaioresPrecos={OrdMaioresPrecos}
                OrdMenoresPrecos={OrdMenoresPrecos}>   
                </OrdenacaoPreco>

            </div>


                <div className='titulo'>
                    <div>
                        <h2>Tipo de Produto</h2>
                    </div>
                    <div className='linha'></div>
                </div>

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
                    <div className='linha'></div>
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
                    <div className='linha'></div>
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







        </div>


    )





}