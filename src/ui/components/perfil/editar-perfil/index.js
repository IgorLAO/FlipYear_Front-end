import './style.scss';

import localStorage from 'local-storage'
import { useNavigate } from 'react-router-dom';

import Corvo from '../../../../ui/assets/images/perfil-publico_assets/download 2.png'
import cam from '../../../../ui/assets/images/edit_profi/cam.png'

import { useEffect, useState } from 'react';


export default function EditarPerfil() {
    const navigate = useNavigate();
    const [NomeUser, setNomeUser] = useState('default');

    const LogOut = () => {
        localStorage.remove('NORMAL_USER_Logado');
        navigate('/login');
    };

    useEffect(() => {
        if (!localStorage("NORMAL_USER_Logado")) {
            navigate('/login')
        } else {
            const infos = localStorage("NORMAL_USER_Logado");
            setNomeUser(infos.data.Nome);

        }

    })

    document.body.style.overflow = 'hidden';

    return (
        <div className='MainPerfil-edit'>
            <div className='EditFrame'>
                <header>
                    <span>
                        <a>X</a>
                        <h5>Edit Profile</h5>
                    </span>
                    <a className='SaveBtn'>SAVE</a>
                </header>
                <section>
                    <div className='ProfilePic' >
                        <div className='banner'>
                            <span className='blockCam'>
                                <img src={cam} />
                                <input type='file' />
                            </span>
                        </div>

                        <span className='perfil'>
                            <img src={Corvo} id='foto' />

                            <span className='blockCam'>
                                <img src={cam} />
                                <input type='file' />
                            </span>
                        </span>
                    </div>
                    <div className='inputs'>
                        <input type='text' placeholder='Digite um novo Nome' />
                    </div>
                        <div className='advancedOP'>
                            <span>
                            <a>Opções avançadas</a>  <a>{'>'}</a>
                            </span>
                            <p>
                                Informações da sua conta, como endereços, email e alterar senha
                            </p>
                        </div>
                </section>
            </div>
        </div>
    )
}

