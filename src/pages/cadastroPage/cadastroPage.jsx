    import './cadastro.scss'
    import florFogo from '../../ui/assets/images/imagesCadastro/flor-fogo 1.png'
    import luckyBox from '../../ui/assets/images/imagesCadastro/lucky_box 1.png'
    import cruz from '../../ui/assets/images/imagesCadastro/cruz_castlevania 1.png'
    import pote from '../../ui/assets/images/imagesCadastro/pote_poision 1.png'
    import fogo from '../../ui/assets/images/imagesCadastro/fogo 1.png'

 const Cadastro = () =>{

    return(
       
            <div className="mainCad">
                <h1>Cadastro</h1>
                <div className="inputs">
                <div  className="esq">
                    <label htmlFor="name">
                        Nome
                    <input type="text" id='name' />
                    </label>
                    <label htmlFor="CPF">
                        CPF
                    <input type="text" id='CPF'/>
                    </label>
                    <label htmlFor="Email">
                        Email
                    <input type="text" id='Email'/>
                    </label>
                    <label htmlFor="Senha">
                        Senha
                    <input type="text" id='Senha'/>
                    </label>

                </div>
                    <div className="direi">
                    <label htmlFor="Sobrenome">
                        Sobrenome
                    <input type="text" id='Sobrenome'/>
                    </label>
                    
                    <label htmlFor="CEP">
                        CEP
                    <input type="text" id='CEP'/>
                    </label>
                    <label htmlFor="ConfirmEmail">
                        Confirme o Email
                    <input type="text" id='Email'/>
                    </label>
                    <label htmlFor="ConfirmSenha">
                        Confirme a senha
                    <input type="text" id='ConfirmSenha'/>
                    </label>
                    </div>                
                </div>
                    <button>Enviar</button>
                    <div className='imgs'>
                        
                    <img src={fogo} alt="" id='fogo'/>
                    <img src={cruz} alt="" id='cruz'/>
                    <img src={luckyBox} alt="" id='luckyBox'/>
                    <img src={florFogo} alt="" id='flor'/>
                    <img src={pote} alt="" id='pote'/>
                    </div>
            </div>
        
    )
}

export default Cadastro