import NavBar from '../../ui/components/navBar';
import Rodape from '../../ui/components/rodape'
import './App.scss';

import nes from "../../ui/assets/images/Home_assets/nes_Console 1.png";
import gameBoy from "../../ui/assets/images/Home_assets/gameboy.png";
import block from "../../ui/assets/images/Home_assets/block.png";

import morcegos from "../../ui/assets/images/Home_assets/pixel_bat.png"
import castlevania_back from "../../ui/assets/images/Home_assets/castlevania_back.png"
import castlevania_delado from "../../ui/assets/images/Home_assets/castlevania_delado.png"
import castlevania_front from "../../ui/assets/images/Home_assets/castlevania_front.png"
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <section className='s1'>
        <div className='block'>
          <div className='texts'>
            <h1>Pra que máquina do tempo se existe Super Nintendo?</h1>
            <a>Relembrando a infância: gastar o troco em fliperama, inventar desculpa para a mãe, competir no Streets of Rage, nostalgia dos video games. Busque seu favorito no catálogo e volte a ser criança por um dia! Não se esqueça de assoprar a fita antes de jogar!</a>
            <span className='btnHome'>
              <svg xmlns="http://www.w3.org/2000/svg" width="242" height="63" viewBox="0 0 242 63" fill="none">
                <g opacity="0.5">
                  <rect x="4.56641" y="5.03906" width="234.748" height="53.2617" fill="#E0F8D0" />
                  <rect y="7.42188" width="4.56604" height="49.3479" fill="#E0F8D0" />
                  <rect x="11.3867" width="223.02" height="7.46053" fill="#E0F8D0" />
                  <rect x="234.48" y="7.42188" width="7.52053" height="47.9866" fill="#E0F8D0" />
                  <rect x="11.3867" y="55.5391" width="223.02" height="7.46053" fill="#E0F8D0" />
                </g>

              </svg>
              <button>
                <Link to='/catalogo'> Catálogo </Link> 
                
                </button>
            </span>
          </div>
          <span className='imgs'>
            <img src={gameBoy} id='img2' />
            <img src={nes} id='img1' />
          </span>
        </div>
        <img style={{ width: 1210, heigth: 100 }} src={block} />
      </section>

      <section className='s2'>
        <span className='cover1' id='covers'>
          <a>Os melhores preços!</a>
          <button> CONFIRA </button>
        </span>

        <span className='cover2' id='covers'>
          <a>Seus jogos preferidos aqui</a>
          <button> VER JOGOS </button>
        </span>

        <span className='cover3' id='covers'>
          <a> Nos Conheça </a>
          <button> SOBRE NÓS </button>
        </span>
      </section>

      <section className='s3'>
        <h2> Raridade no pedaço!!! </h2>
        <div className='block'>
          <span className='texts'>
            <h1> Castlevania Symphony of the Night Akumajo Dracula X  </h1>
            <a> Um simphony of the night classico...MAS VEIO DO JAPÃO!!!</a>
            
          </span>
          <span className='imgs'>
            <img src={morcegos} className='morcegos' />
            <img src={castlevania_back} id='castle_back' />
            <img src={castlevania_delado} id='castle_side'/>
            <img src={castlevania_front} id='castle_front'/>
          </span>
        </div>
      </section>
      <Rodape />
    </div>
  );
}

export default App;
