import './cabecalho.scss';
import logo from '../../assets/images/NavBar_assets/arcade_Logo 1.png'
import lupa from '../../assets/images/NavBar_assets/lupa.png'
import filtro from '../../assets/images/NavBar_assets/filtro_logo.png'
import usuario from '../../assets/images/NavBar_assets/usuario_logo.png'
import carrinho from '../../assets/images/NavBar_assets/carrinho_logo_cabecalho.png'
import suporte from '../../assets/images/NavBar_assets/suporte_logo.png'

export default function Cabecalho(){

    return(
        <div className='cabecalho'>
            <div className='logo'>
                <img src={logo} alt='' />
                <div className='logo-text'>
                    <h3>FLIP-YEAR</h3>
                    <h2>2000</h2>
                </div>
            </div>

            <div className='search-bar'>
                <img src={lupa} alt='' />
                <input type='text' placeholder='O que você procura?' />
                <img src={filtro} alt='' />
            </div>

            <div className='buttons'>
                <button>
                    <img id='usuario' src={usuario} alt='' />
                </button>
                <button>
                    <img src={carrinho} alt='' />
                </button>
                <button>
                    <img src={suporte} alt='' />
                </button>
            </div>
        </div>
    )
}