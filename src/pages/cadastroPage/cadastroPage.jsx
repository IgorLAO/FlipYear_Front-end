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
                    <span style={{ width: 45 + '%' }}>
                        <a> Nome* </a>
                        <input type='text' style={{ width: 100 + '%' }} />
                    </span>

                    <span style={{ width: 75 + '%' }}>
                        <a > Sobrenome*</a>
                        <input type='text' />
                    </span>
                </div>

                <div className='boxInput'>
                    <span style={{ width: 75 + '%' }}>
                        <a> CPF* </a>
                        <input type='text' style={{ width: 100 + '%' }} />
                    </span>

                    <span style={{ width: 55 + '%' }}>
                        <a > CEP* </a>
                        <input type='text' />
                    </span>
                </div>

                <div className='boxInput'>
                    <span style={{ width: 50 + '%' }}>
                        <a> Cidade* </a>
                        <input type='text' />
                    </span>

                    <span style={{ width: 50 + '%' }}>
                        <a> Rua* </a>
                        <input />
                    </span>
                </div>

                <div className='boxInput'>
                    <span style={{ width: 90 + '%' }}>
                        <a> Complemento </a>
                        <input type='text' />
                    </span>

                    <span style={{ width: 15 + '%' }}>
                        <a> Numero* </a>
                        <input type='number' />
                    </span>
                </div>

                <div className='bottomInputs' style={{ display: 'flex', flexDirection: 'column' }}>
                    <span>
                        <a> Email* </a>
                        <input type='text' style={{ width: 98.4 + "%" }} />
                    </span>

                    <div style={{ display: "flex" }}>
                        <span>
                            <a> Senha* </a>
                            <input type='password' />
                        </span>

                        <span>
                            <a> Digite a senha novamente* </a>
                            <input type='password' />
                        </span>

                    </div>
                </div>
            </div>
            <div className='button'>
                <span style={{ display: "flex", position: "absolute" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="255" height="71" viewBox="0 0 255 71" fill="none">
                        <g opacity="0.5">
                            <rect x="7.7168" y="9.87891" width="242.508" height="51.5709" fill="#429B56" />
                            <rect x="3" y="12.1875" width="4.71698" height="47.7813" fill="#429B56" />
                            <rect x="14.7656" y="5" width="230.392" height="7.22369" fill="#429B56" />
                            <rect x="245.23" y="12.1875" width="7.76915" height="46.4632" fill="#429B56" />
                            <rect x="14.7656" y="58.7773" width="230.392" height="7.22369" fill="#429B56" />
                        </g>
                        <g filter="url(#filter0_d_348_45)">
                            <rect x="14.7188" y="12.4219" width="227.604" height="46.1566" fill="#429B56" />
                            <rect x="10.293" y="14.4883" width="4.42708" height="42.7649" fill="#429B56" />
                            <rect x="20.9707" y="10.2109" width="216.667" height="4.27649" fill="#429B56" />
                            <rect x="237.637" y="14.4883" width="7.29167" height="41.5852" fill="#429B56" />
                            <rect x="20.9707" y="56.0742" width="216.667" height="4.42395" fill="#429B56" />
                        </g>
                        <defs>
                            <filter id="filter0_d_348_45" x="0.292969" y="0.210938" width="254.635" height="70.2891" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset />
                                <feGaussianBlur stdDeviation="5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_348_45" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_348_45" result="shape" />
                            </filter>
                        </defs>
                    </svg></span>
                <a>
                    Enviar
                </a>
            </div>
            <div>

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