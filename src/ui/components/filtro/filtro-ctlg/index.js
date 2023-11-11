import Butao from '../butao/butao'
import ListaFiltro from '../lista/lista'
import OrdenaçãoAvaliados from '../lista/listaAvaliados'
import OrdenacaoPreco from '../lista/listaPreco'
import ValoresFiltro from '../valores/valores'
import filtro from '../../../assets/images/NavBar_assets/filtro_logo.png'
import './index.scss'

export default function FiltroCtlg(props) {

    const {setFiltroPreco} = props;
   


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
                OrdMelhoresAvaliados={props.OrdMelhoresAvaliados}
                OrdPioresAvaliados={props.OrdPioresAvaliados}>
                </OrdenaçãoAvaliados>
                <OrdenacaoPreco 
                OrdMaioresPrecos={props.OrdMaioresPrecos}
                OrdMenoresPrecos={props.OrdMenoresPrecos}>   
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

                    <ListaFiltro 
                    item={'Empresa'}>    
                    </ListaFiltro>


                </div>


                <div className='titulo'>
                    <div>
                        <h2>Atributos</h2>
                    </div>
                    <div className='linha'></div>
                </div>

                <div className='opc-selec'>

                    <div onClick={props.FiltroPromocao}>
                    <Butao item={'Promoção'}></Butao>
                    </div>

                    <div onClick={props.FiltroDestaque}>
                    <Butao item={'Destaque'}></Butao>
                    </div>

                    <div onClick={props.FiltroColecionador}>
                    <Butao 
                    item={'Colecionador'}>
                    </Butao>
                        
                    </div>
            



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
                        setFiltroPreco={setFiltroPreco}
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