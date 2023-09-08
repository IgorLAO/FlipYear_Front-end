import { useState } from 'react'
import { Link } from 'react-router-dom'

import { RecupararSenha } from '../../ui/components/recuperarSenhaComponets/recuperar_senha'
import './login.scss'

import gameFrame from '../../ui/assets/images/imagesLogin/GAMEBOY_FRAME 1.png'
import googleLogo from '../../ui/assets/images/imagesLogin/google 1.png'
import FacebookeLogo from '../../ui/assets/images/imagesLogin/face 1.png'

function Login(props2) {
  const [hide, setHide] = useState(true)
  const [reveal, setReveal] = useState(false)

  const hideReveal = () =>{
    setHide(false)
    setReveal(true)
  }

  const hideReveal2 = () =>{
    setHide(true)
    setReveal(false)
  }

  return (
    <>
    <div className='main'>
    <img src={gameFrame} alt="" />
    <div className='DetailsInside'>
  {hide &&(
    <>
    <h2>Ola! seja bem-vindo </h2>
      
        <form action="">
           <label for='email'>
            Email
          <input type="text" id='email'/>
         </label>
           <label for='senha'>
            Senha
          <input type="password" id='senha'/>
         </label>
          <h6 onClick={hideReveal}>Esqueceu a senha</h6>
          </form>
        <a href="http://" className='entrarButton'>APERTE PARA ENTRAR</a>

        <hr className='linha'/>
     
      <div className='entrarCom'>
          <p>Acesse com:</p>
          <div className='redes'>
            <img src={FacebookeLogo} alt="" />
            <img src={googleLogo} alt="" />
          </div>
        <h6>Ainda não tem uma conta? <Link to='/cadastro'> <a >Cadastre-se</a></Link> </h6>  
      </div>
      </>
      )}      

    {reveal && (
      <RecupararSenha hideReveal2={hideReveal2} />
    )}
    </div>

    </div>

    </>
  )
}

export default Login
