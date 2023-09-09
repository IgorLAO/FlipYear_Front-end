import './style.scss'

import LogoArcade from "../../../assets/images/NavBar_assets/arcade_Logo 1.png";
import bellADM from "../../../assets/images/adm_assets/sino_adm.png";
import { useState } from 'react';

export default function AdmTopNavBar() {
    const [isHideOptions, setIsHideOptions] = useState(false)
    const [Ang, setAng] = useState('0')

    function hideValid() {
        setIsHideOptions(true)
        setAng('90')

        if (isHideOptions) {
            setIsHideOptions(false);
            setAng('0')
        }
    }

    return (
        <div className="MainTopNavBar">
            <div className="Logo">
                <img src={LogoArcade} />
                <h3> Flip-Year
                    <h1>2000</h1>
                </h3>
            </div>

            <div className='Perfil'>
                <img src='a' />
                <span className='Name_ArrowMenu' onClick={hideValid} style={{ cursor: "pointer" }}>
                    <h4> ${"nome de usuario"} </h4>
                    <a style={{ transform: `rotate(${Ang}deg)`, marginLeft: 7 }}> >  </a>
                </span>
                <img src={bellADM} id='bell' />
            </div>
        </div>
    );
}