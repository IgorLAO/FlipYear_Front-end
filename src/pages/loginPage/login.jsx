import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import storage from 'local-storage';

import { RecupararSenha } from '../../ui/components/recuperarSenhaComponets/recuperar_senha';
import './login.scss';

import googleLogo from '../../ui/assets/images/imagesLogin/google 1.png';
import FacebookeLogo from '../../ui/assets/images/imagesLogin/face 1.png';

let url = "http://localhost:5000/usuarios/login"

function Login(props2) {
  const navigate = useNavigate();
  const [hide, setHide] = useState(true);
  const [reveal, setReveal] = useState(false);
  const [Tier, setTier] = useState('');

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const hideReveal = () => {
    setHide(false)
    setReveal(true)
  }

  const hideReveal2 = () => {
    setHide(true)
    setReveal(false)
  }



  const logar = async () => {
    try {
      let res = await axios.post(url, {
        Email: email,
        Senha: senha
      })

      if (res.data.Tier == "ADM") {
        storage('ADM_Logado', res)
        navigate('/ADM');
        setTier(res)
        console.log(Tier)
      }
      if (res.data.Tier === "NORMAL_USER") {
        storage('NORMAL_USER_Logado', res)
        navigate('/perfil-pessoal');
        setTier(res.data.Tier)
        console.log(Tier)

      }

      

    } catch (err) {

      if (err.response.status === 401) {
        console.log(err.response.data.erro)
      }
    }
  }

  const verify = () => {
    if (storage('ADM_Logado'))
      navigate('/ADM')

    else if (storage('NORMAL_USER_Logado'))
      navigate('/perfil-pessoal')

    const valor = localStorage.getItem('Chave');
    console.log(Tier)
  }

  useEffect(() => {
    // localStorage.clear();
    verify()
  }, [Tier])

  return (
    <>
      <div className='main'>
        <div className='Frame'>

          <div className='DetailsInside'>
            {hide && (
              <>
                <h2>Ola! seja bem-vindo </h2>

                <form action="">
                  <label for='email'>
                    Email
                    <input type="text" id='email' value={email} onChange={e => setEmail(e.target.value)} />
                  </label>
                  <label for='senha'>
                    Senha
                    <input type="password" id='senha' value={senha} onChange={e => setSenha(e.target.value)} />
                  </label>
                  <h6 onClick={hideReveal}>Esqueceu a senha</h6>
                </form>
                <a onClick={logar} className='entrarButton'> APERTE PARA ENTRAR </a>

                <hr className='linha' />

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
          </div>

          {reveal && (
            <RecupararSenha hideReveal2={hideReveal2} />
          )}
        </div>

      </div>

    </>
  )
}

export default Login
