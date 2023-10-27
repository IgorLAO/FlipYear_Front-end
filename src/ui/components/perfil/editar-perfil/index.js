import './style.scss';

import localStorage from 'local-storage'
import { useNavigate } from 'react-router-dom';

import Corvo from '../../../../ui/assets/images/perfil-publico_assets/download 2.png'
import cam from '../../../../ui/assets/images/edit_profi/cam.png'

import { useEffect, useState } from 'react';
import { EnviarImagem, GetBannerImage, GetProfileImage, GetUserById } from '../../../../api/usuario';


export default function EditarPerfil(props) {
    const navigate = useNavigate();
    const [IsHide, setIsHide] = useState(true);

    const [NewProfilePic, setNewProfilePicShow] = useState();
    const [NewBannerPic, setNewBannerPicShow] = useState();

    const [SendNewProfilePic, setSendNewProfilePic] = useState();
    const [SendNewBannerPic, setSendNewBannerPic] = useState();
    const [CurrentProfilePic, setCurrentProfilePic] = useState('');
    const [CurrentBannerPic, setCurrentBanner] = useState('');




    async function ShowImagesProfile() {
        if (SendNewProfilePic) {
            let Profile = URL.createObjectURL(SendNewProfilePic);
            setNewProfilePicShow(Profile);
        }

    }

    // esse envia imagem
    // essa função vai dar erro provavelmente. Vou dar uma encurtada dps
    async function Save() {
        const infos = localStorage("NORMAL_USER_Logado");
        console.log(SendNewProfilePic);

        let das = await GetUserById(infos.data.Id);

        EnviarImagem(infos.data.Id, SendNewProfilePic);

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

        ShowImagesProfile();
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const images = await GETImages();
                props.SendProfileToD(images.profile);
            } catch (error) {
                console.error('Erro ao buscar imagens:', error);
            }
        }
        fetchData();




    }, [GETImages, props]);

    // ---------------------------------------------
    if (IsHide) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

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
                            TESTES NESSA PORRA
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
                                <div className='banner' id='banner' style={{ backgroundImage: `url(${CurrentBannerPic})`, backgroundSize: 'cover' }} onClick={() => document.getElementById('fileBanner').click()}>
                                    {/* {!NewBannerPic ?
                                        // (() => document.getElementById('banner').style.backgroundImage = `url(${CurrentBannerPic})`)
                                        // (<div style={{backgroundImage: `url(${CurrentBannerPic})`, backgroundSize: 'cover'}}></div>)
                                        :
                                        (NewBannerPic(() => document.getElementById('banner').style.backgroundImage = `url(${NewBannerPic})`))} */}
                                    {/* {!NewBannerPic ?
                                        (<span className='IMG' style={{ width: '100%' }} >
                                            <img src={CurrentBannerPic} style={{
                                                width: '100%',
                                                height: '100%',
                                                maxHeight: '200px',
                                                objectFit: 'cover'
                                            }} />
                                        </span>
                                        )
                                        :
                                        (
                                            <span className='IMG' style={{ width: '100%' }} >
                                                <img src={NewBannerPic} style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    maxHeight: '200px',
                                                    objectFit: 'cover'
                                                }} />
                                            </span>
                                        )
                                    } */}

                                    <span className='IMG' style={{ width: '100%' }} >
                                        <div style={{
                                            width: '100%',
                                            height: '100%',
                                            maxHeight: '200px',
                                            objectFit: 'cover',
                                            backgroundColor: 'blue'
                                        }}>

                                        </div>

                                    </span>


                                    <span className='blockCam' id='cam' style={{
                                        position: 'absolute',
                                        maxHeight: "200px",
                                        maxWidth: '49.7%'
                                    }} >
                                        {() => document.getElementById('cam').style.backgroundColor = 'transparent'}

                                        <input style={{ border: 'red solid' }} type='file' id='fileBanner' onChange={e => setSendNewBannerPic(e.target.files[0])} />

                                    </span>
                                </div>

                                <span className='perfil' onClick={() => document.getElementById('fileProfile').click()}>
                                    {!NewProfilePic ?
                                        (<img className='foto' src={CurrentProfilePic} alt='imagem antiga' />)
                                        :
                                        (<img className='foto' src={NewProfilePic} alt='nova imagem de perfil' />)}

                                    {/* <img className='foto' src={ CurrentProfilePic } alt='CameraIcon' style={{ maxHeight: '50px', objectFit: 'cover' }} /> */}

                                    <span className='blockCam' id='cam'>
                                        <img src={cam} alt='CameraIcon' />

                                        <input type='file' id='fileProfile' onChange={e => setSendNewProfilePic(e.target.files[0])} onMouseEnter={ShowImagesProfile} />
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

