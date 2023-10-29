import './style.scss';

import localStorage from 'local-storage'
import { useNavigate } from 'react-router-dom';

import Corvo from '../../../../ui/assets/images/perfil-publico_assets/download 2.png'
import cam from '../../../../ui/assets/images/edit_profi/cam.png'

import { useEffect, useState } from 'react';
import { EnviarImagem, GetProfileImage, GetUserById } from '../../../../api/usuario';


export default function EditarPerfil(props) {
    const navigate = useNavigate();
    const [IsHide, setIsHide] = useState(true);
    const [NewProfilePic, setNewProfilePicShow] = useState();

    const [SendNewProfilePic, setSendNewProfilePic] = useState();
    const [CurrentProfilePic, setCurrentProfilePic] = useState('');
    const [BannerColor, setBannerColor] = useState('');


    // esse envia imagem
    // essa função vai dar erro provavelmente. Vou dar uma encurtada dps
    async function Save() {
        const infos = localStorage("NORMAL_USER_Logado");
        console.log(SendNewProfilePic);
        let das = await GetUserById(infos.data.Id);
        if (SendNewProfilePic) {
            EnviarImagem(infos.data.Id, SendNewProfilePic);
        }
        setIsHide(false);
        // window.location.reload();


    }

    async function GETImages() {
        let infos = localStorage('NORMAL_USER_Logado');
        let id = infos.data.Id
        let das = await GetUserById(id);
        let profile = GetProfileImage(das.data[0].ImageProfile);

        setCurrentProfilePic(profile);

        return { profile }
    }

    async function TESTES() {

    }

    // ---------------------------------------------
    if (IsHide) {
        document.body.style.overflow = 'hidden';

    } else {
        document.body.style.overflow = 'auto';

    }

    useEffect(() => {
        GETImages();

        props.SendProfileToD(CurrentProfilePic);
        props.SendColorToD(BannerColor);
    
    }, [props, CurrentProfilePic, BannerColor])

    return (
        <>
            {IsHide &&
                <div className='MainPerfil-edit' id='MainPerfil-edit'>
                    <div className='EditFrame'>
                        <button
                            onClick={TESTES}
                            style={{
                                backgroundColor: '#6BAEFF',
                                padding: '15px 30px',
                                color: 'fff', border: 'solid #fff',
                                borderRadius: '15px',
                                margin: '15px'
                            }} >
                            TESTES kkkkk
                        </button>
                        <header>
                            <span>
                                <a onClick={() => setIsHide(false)}>X</a>
                                <h5>Edit Profile</h5>
                            </span>
                            <a className='SaveBtn' onClick={Save}>SAVE</a>
                        </header>

                        <section>
                            <div className='ProfilePic' >
                                <div className='banner' style={{ backgroundColor: localStorage('color') }} onClick={() => document.getElementById('color').click()}>
                                    <input type='color' id='color' value={BannerColor} onChange={e => { setBannerColor(e.target.value); localStorage('color', e.target.value) }} />

                                </div>

                                <span className='perfil' onClick={() => document.getElementById('fileProfile').click()}>
                                    {!NewProfilePic ?
                                        (<img className='foto' src={CurrentProfilePic} alt='imagem antiga' />)
                                        :
                                        (<img className='foto' src={NewProfilePic} alt='nova imagem de perfil' />)}

                                    <span className='blockCam' id='cam'>
                                        <img src={cam} alt='CameraIcon' />

                                        <input type='file' id='fileProfile' onChange={e => setSendNewProfilePic(e.target.files[0])} />
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
                                <p> Informações da sua conta, como endereços, email e alterar senha </p>
                            </div>
                        </section>
                    </div>
                </div>
            }
        </>
    )


}

