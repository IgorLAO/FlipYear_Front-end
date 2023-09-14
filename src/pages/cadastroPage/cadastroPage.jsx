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
                <div className='bloco'>
                    <div className='prt-1'>
                        Nome
                        <input type='text' />
                    </div>
                    <div className='prt-2'>
                        Sobrenome
                        <input type='text'/>
                    </div>
                </div>
                <div>
                    <div> 
                        CPF
                        <input type='text'/>
                    </div>
                    <div>
                         Cep
                        <input type='text'/>
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