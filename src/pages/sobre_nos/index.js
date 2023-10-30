import './index.scss';
import Rodape from '../../ui/components/rodape';
import NavBar from '../../ui/components/navBar';
import Corvo from '../../ui/assets/images/perfil-publico_assets/download 2.png';
import JaoCard from '../../ui/components/sobreNos/JaoCard';

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
                        <h2 style={{ fontSize: 70, cursor: "pointer" }} > {'<'} </h2>
                        <div className='perfil'>

                            <div className='conteudo_perfil'>
                               <JaoCard/>
                            </div>
                        </div>
                        <h2 style={{ fontSize: 70, cursor: "pointer" }} > {'>'}</h2>
                    </div>
                </div>
            </div>

            <Rodape />
        </>
    )
}