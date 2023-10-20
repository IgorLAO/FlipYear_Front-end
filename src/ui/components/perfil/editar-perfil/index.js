import './style.scss';

import localStorage from 'local-storage'
import { useNavigate } from 'react-router-dom';

import Corvo from '../../../../ui/assets/images/perfil-publico_assets/download 2.png'
import cam from '../../../../ui/assets/images/edit_profi/cam.png'

import { useEffect, useState } from 'react';
import { EnviarImagem, GetImage, GetUserById } from '../../../../api/usuario';


export default function EditarPerfil(props) {
    const navigate = useNavigate();
    const [Infos, setInfos] = useState('default');
    const [isHide, setIsHide] = useState(props.IsHideEdit);
    const [BannerImg, setBannerImg] = useState();
    const [ProfileImg, setProfileImg] = useState();
    const [userInfos, setUserInfos] = useState();



     const getId = async () => {
         const infos = localStorage("NORMAL_USER_Logado");
         const datas = await GetUserById(infos.data.Id);
         setUserInfos(infos);
         console.log(datas);
     }


    if (isHide) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }



    function mostrarBanner() {
        return URL.createObjectURL(BannerImg)
    }

    function mostrarProfile() {
        return GetImage(ProfileImg)
    }

    const Save = () => {
        
        const infos = localStorage("NORMAL_USER_Logado");
        setInfos(infos.data);
        EnviarImagem(infos.data.Id, userInfos.ImageProfile)
        console.log(userInfos.ImageProfile)
    }


    return (
        <>
            {isHide &&
                <div className='MainPerfil-edit'>
                    <div className='EditFrame'>
                        <button onClick={getId}> 
                            oii
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
                                <div className='banner' onClick={() => document.getElementById('fileBanner').click()}>

                                    <span className='blockCam' id='cam'>
                                        {() => document.getElementById('cam').style.backgroundColor = 'transparent'}
                                        {!BannerImg && <img src={cam} alt='CameraIcon' />}

                                        <input type='file' id='fileBanner' onChange={e => setBannerImg(e.target.files[0])} />
                                    </span>
                                </div>

                                <span className='perfil' onClick={() => document.getElementById('fileProfile').click()}>
                                    {!ProfileImg && <img className='foto' src={Corvo} alt='CameraIcon' />}
                                    {ProfileImg && <img className='foto' src={mostrarProfile()} alt='CameraIcon' />}

                                    <span className='blockCam' id='cam'>
                                        <img src={cam} alt='CameraIcon' />

                                        <input style={{ border: 'red solid' }} type='file' id='fileProfile' onChange={e => setProfileImg(e.target.files[0])} />
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

