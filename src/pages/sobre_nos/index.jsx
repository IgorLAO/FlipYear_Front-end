import './index.scss';
import Rodape from '../../ui/components/rodape';
import NavBar from '../../ui/components/navBar';
import Corvo from '../../ui/assets/images/perfil-publico_assets/download 2.png';

export default function SobreNos() {
    return (
        <>
            <NavBar />
            <div className='container_sobrenos'>
                <div className='conteudo'>
                    <div className='descricao'>
                        <h1>Sobre nós</h1>
                        <p>Nós somos 5 jovens aficionados por videogames antigos e criamos esse site com a missão de trazer as boas memórias que só uma tarde videogem podem proporcionar. </p>
                    </div>
                    <div className='container_perfil'>
                        <h2 style={{ fontSize: 70 }} > {'<'} </h2>
                        <div className='perfil'>

                            <div className='conteudo_perfil'>
                                <div id='corvo'>
                                    <img src={Corvo} />
                                    <p>{ }Denzel</p>
                                </div>

                                <div className='dados_integrantes'>
                                    <div className='cargo'>
                                        <div>
                                            <h5>{ }Cargo</h5>
                                            <p>{ }DEV Brabo</p>
                                        </div>
                                        <div>
                                            <h5>Jogo Favorito</h5>
                                            <p>{ }Silent Hill 2</p>
                                        </div>
                                    </div>
                                    <div className='memorias'>
                                        <p>Uma memória com videogame</p>
                                        <div>
                                            <p>Zerar Top Gear com meu pai. Malditas uvas!!!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 style={{ fontSize: 70 }} > {'>'}</h2>
                    </div>
                </div>
            </div>

            <Rodape />
        </>
    )
}