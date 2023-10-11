import './style.scss';

import localStorage from 'local-storage'
import { useNavigate } from 'react-router-dom';

import Corvo from '../../../ui/assets/images/perfil-publico_assets/download 2.png'
import cam from '../../../ui/assets/images/edit_profi/cam.png'

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
                        <span className='editIconsProf'>

                        <div className='banner'></div>
                       <img src={cam} />
                        </span>

                        <span>
                       <img src={cam} />
                        <img src={Corvo} />
                        </span>
                    </div>
                    <div className='inputs'>

                    </div>
                </section>
            </div>
        </div>
    )




}