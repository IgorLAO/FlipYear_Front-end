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
    const [NewProfilePic, setNewProfilePicShow] = useState('');
    const [SendNewProfilePic, setSendNewProfilePic] = useState();
    const [CurrentProfilePic, setCurrentProfilePic] = useState('');
    const [userImage, setUserImage] = useState('');

    function mostrarBanner() {
        return URL.createObjectURL(BannerImg);
    }

    async function mostrarProfile() {
        let infos = localStorage('NORMAL_USER_Logado');
        let id = infos.data.Id
        let das = await GetUserById(id);
        let img = GetImage(das.data[0].ImageProfile);
        console.log(das);
        return GetImage(img);
    }
    //esse define a imagem no estado
    function ShowNewProfileIMG(e) {
        let files = e.target.files[0];
        setSendNewProfilePic(files);
        console.log(SendNewProfilePic);
        let i = URL.createObjectURL(files);
        setNewProfilePicShow(i);
    }

    // esse envia imagem
    function Save() {
        if(NewProfilePic){
            const infos = localStorage("NORMAL_USER_Logado");
            console.log(SendNewProfilePic)
            EnviarImagem(infos.data.Id, SendNewProfilePic)
            setIsHide(false)
            window.location.reload();
        }
    }
    async function TESTE() {
        let infos = localStorage('NORMAL_USER_Logado');
        let id = infos.data.Id
        let das = await GetUserById(id);
        let img = GetImage(das.data[0].ImageProfile);
        setCurrentProfilePic(img)
    }


    useEffect(() => {
        TESTE();
        props.enviarDadosParaPai(CurrentProfilePic);
    }, [TESTE])


    // ---------------------------------------------
    if (isHide) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }

    return (
        <>
            {isHide &&
                <div className='MainPerfil-edit'>
                    <div className='EditFrame'>
                        <button
                            onClick={TESTE}
                            style={{
                                backgroundColor: '#6BAEFF',
                                padding: '15px 30px',
                                color: 'fff', border: 'solid #fff',
                                borderRadius: '15px',
                                margin: '15px'
                            }} >
                            ShowNewProfileIMG
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

                                    {!NewProfilePic ?
                                        (<img className='foto' src={CurrentProfilePic} alt='CameraIcon' />)
                                        :
                                        (<img className='foto' src={NewProfilePic} alt='CameraIcon' />)}

                                    <span className='blockCam' id='cam'>
                                        <img src={cam} alt='CameraIcon' />

                                        <input style={{ border: 'red solid' }} type='file' id='fileProfile' onChange={ShowNewProfileIMG} />
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

