import './cadastro.scss'
import florFogo from '../../ui/assets/images/imagesCadastro/flor-fogo 1.png'
import luckyBox from '../../ui/assets/images/imagesCadastro/lucky_box 1.png'
import cruz from '../../ui/assets/images/imagesCadastro/cruz_castlevania 1.png'
import pote from '../../ui/assets/images/imagesCadastro/pote_poision 1.png'
import fogo from '../../ui/assets/images/imagesCadastro/fogo 1.png'
import { Link } from 'react-router-dom'

const Cadastro = () => {

    return (

        <div className="mainCad">
            <h1>Cadastro</h1>
            <p className='prt-0'> Informe os seus dados abaixo para criar sua conta </p>
            <div className="inputs">
                <div className='boxInput'>
                    <span style={{width: 45 + '%'}}>
                        <a> Nome </a>
                        <input type='text' style={{width: 100 + '%'}} />
                    </span>

                    <span style={{width: 75 + '%'}}>
                        <a > Sobrenome</a>
                        <input type='text'  />
                    </span>
                </div>

                <div className='boxInput'>
                    <span style={{width: 75 + '%'}}>
                        <a> CPF </a>
                        <input type='text' style={{width: 100 + '%'}} />
                    </span>

                    <span style={{width: 55 + '%'}}>
                        <a > CEP </a>
                        <input type='text' />
                    </span>
                </div>

                <div className='boxInput'>
                    <span>
                        <a> Cidade </a>
                        <input type='text' />
                    </span>

                    <span >
                        <a> Rua </a>
                        <input />
                    </span>
                </div>
               
                <div className='boxInput'>
                    <span>
                        <a> Complemento </a>
                        <input type='text' />
                    </span>

                    <span >
                        <a> Numero </a>
                        <input />
                    </span>
                </div>
            
                <div className='bottomInputs' style={{display:'flex', flexDirection: 'column'}}>
                    <div>
                        <a> Complemento </a>
                        <input type='text' />
                    </div>

                    <div>
                        <a> Numero </a>
                        <input />
                    </div>
                </div>
            </div>

            <button>Enviar</button>
            <div>
                <p>Já tem uma conta?</p>
                <Link className='lincar' to='/login' />
            </div>

            <div className='imgs'>
                <img src={fogo} alt="" id='fogo' />
                <img src={cruz} alt="" id='cruz' />
                <img src={luckyBox} alt="" id='luckyBox' />
                <img src={florFogo} alt="" id='flor' />
                <img src={pote} alt="" id='pote' />
            </div>
        </div>
    )
}

export default Cadastro