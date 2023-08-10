import { useState } from 'react'
import './login.scss'
import gameFrame from '../../assets/GAMEBOY_FRAME 1.png'
import googleLogo from '../../assets/google 1.png'
import FacebookeLogo from '../../assets/face 1.png'
import { Link } from 'react-router-dom'
function Login() {
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
        <h6>Ainda não tem uma conta? <a href='<cadastro/>' >Cadastre-se</a> </h6>  
      </div>
      </>
      )}      

    {reveal && (
      <div className='recuperação'>
        <div className='voltar'>
          <h5 onClick={hideReveal2}> --Voltar </h5>
        </div>

        <h1>Recuperar conta</h1>
        
        <div className='inputsRec'>

        <label htmlFor="email1">
          email de recuperação
        <input type="text" id='email1' />
        </label>

        <label htmlFor="email2">
          digite novamente
        <input type="text"  id='email2'/>
        </label>
        </div>
        
        <div>
          <Link to='/cadastro'>
        <button>enviar</button>
          </Link>
        </div>
      </div>
    )}
    </div>

    </div>

    </>
  )
}

export default Login
