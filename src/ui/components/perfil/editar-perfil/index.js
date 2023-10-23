import './style.scss';

import localStorage from 'local-storage'
import { useNavigate } from 'react-router-dom';

import Corvo from '../../../../ui/assets/images/perfil-publico_assets/download 2.png'
import cam from '../../../../ui/assets/images/edit_profi/cam.png'

import { useEffect, useState } from 'react';
import { EnviarImagem, GetBannerImage, GetProfileImage, GetUserById } from '../../../../api/usuario';


export default function EditarPerfil(props) {
    const navigate = useNavigate();
    const [isHide, setIsHide] = useState(props.IsHideEdit);
    const [NewProfilePic, setNewProfilePicShow] = useState('');
    const [NewBannerPic, setNewBannerPicShow] = useState('');
    const [SendNewProfilePic, setSendNewProfilePic] = useState();
    const [SendNewBannerPic, setSendNewBannerPic] = useState();
    const [CurrentProfilePic, setCurrentProfilePic] = useState('');
    const [CurrentBannerPic, setCurrentBanner] = useState('');

    const [userImage, setUserImage] = useState('');


    // async function mostrarProfile() {
    //     let infos = localStorage('NORMAL_USER_Logado');
    //     let id = infos.data.Id
    //     let das = await GetUserById(id);
    //     let img = GetImage(das.data[0].ImageProfile);
    //     console.log(das);
    //     return GetImage(img);
    // }

    //esse define a imagem no estado
    function ShowNewProfileIMG(eProfi, eBanner) {
        // console.log(SendNewProfilePic);
        // let i = URL.createObjectURL(filesProfi);
        // setNewProfilePicShow(i);
    }

    // esse envia imagem
    // essa função vai dar erro provavelmente. Vou dar uma encurtada dps
    function Save() {
        const infos = localStorage("NORMAL_USER_Logado");
        console.log(SendNewProfilePic);
        EnviarImagem(infos.data.Id, SendNewProfilePic, SendNewBannerPic);
        setIsHide(false);
        window.location.reload();
    }

    async function GETImages() {
        if (!CurrentBannerPic && !CurrentProfilePic) {
            let infos = localStorage('NORMAL_USER_Logado');
            let id = infos.data.Id
            let das = await GetUserById(id);
            let Banner = GetBannerImage(das.data[0].ImageBanner);
            let profile = GetProfileImage(das.data[0].ImageProfile);
            setCurrentProfilePic(profile);
            setCurrentBanner(Banner);
            return { profile, Banner }
        }
        return {  Banner: CurrentBannerPic, profile: CurrentProfilePic }
    }

    async function TESTES() {
        // document.getElementById('fileBanner').click();
        let i = await GETImages()
        console.log(i);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const images = await GETImages();
                props.SendBannerToD(images.Banner);
                props.SendProfileToD(images.profile);

            } catch (error) {
                console.error('Erro ao buscar imagens:', error);
            }
        }

        fetchData();
    }, [GETImages, props]);






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
                                    <span className='IMG' style={{ width: '100%' }} >
                                        <img src={CurrentBannerPic || NewBannerPic} style={{ width: '100%', height: '100%', maxHeight: '200px', objectFit: 'cover' }} />

                                    </span>

                                    <span className='blockCam' id='cam' style={{ position: 'absolute', maxHeight: "200px", maxWidth: '49.7%' }} >
                                        {() => document.getElementById('cam').style.backgroundColor = 'transparent'}

                                        <input style={{ border: 'red solid' }} type='file' id='fileBanner' onChange={e => setSendNewBannerPic(e.target.files[0])} />
                                        
                                    </span>
                                </div>

                                <span className='perfil' onClick={() => document.getElementById('fileProfile').click()}>
                                    {/* {!NewProfilePic ?
                                        (<img className='foto' src={CurrentProfilePic} alt='CameraIcon' />)
                                        :
                                        (<img className='foto' src={NewProfilePic} alt='CameraIcon' />)}  */}
                                    
                                    <img className='foto' src={CurrentProfilePic || NewProfilePic} alt='CameraIcon' />

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

