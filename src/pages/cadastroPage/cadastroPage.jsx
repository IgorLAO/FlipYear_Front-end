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
            <p> Informe os seus dados abaixo para criar sua conta </p>
            <div className="inputs">
                <div className="dupla">
                    <div className='prt-1'>
                        <div>
                            <p> Nome </p>
                            <imput />
                        </div>
                        <div>
                            <p> Sobrenome</p>
                            <imput />
                        </div>
                    </div>
                    <div className='prt-2'>
                        <div>
                            <p CPF ></p>
                            <imput />
                        </div>
                        <div>
                            <p> CEP </p>
                            <imput />
                        </div>
                    </div>
                    <div className='prt-3'>
                        <div>
                            <p> Cidade </p>
                            <imput />
                        </div>
                        <div>
                            <p> Rua </p>
                            <imput />
                        </div>
                    </div>
                    <div  className='prt-4'>
                        <div>
                            <p> Complemento </p>
                            <imput />
                        </div>
                        <div>
                            <p> Número </p>
                            <imput />
                        </div>
                    </div>

                    <div className='prt-5'>
                        <p> Endereço de Email </p>
                        <imput />
                    </div>
                    <div className='prt-6'>
                        <p> Senha </p>
                        <imput />
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