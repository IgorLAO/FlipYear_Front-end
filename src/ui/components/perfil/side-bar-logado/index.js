import './index.scss'
import Pfp from '../../../assets/images/perfil-publico_assets/download 2.png'
import Lapis from '../../../assets/images/perfil-pessoal/105b06c79bc402f 1.png'
import Adm from '../../../assets/images/perfil-side-bar/usuario icon.png'
import SetaBaixo from '../../../assets/images/perfil-side-bar/setapabaixo.png'
import Logo from '../../../assets/images/perfil-side-bar/arcade_Logo 21.png'
import Carrinho from '../../../assets/images/perfil-pessoal/image-removebg-preview (8) 2.png'
export default function SideBarLogado(){

    return(<div className='side-bar-logado'>
        <div className='pfp-nome'>
            <div className='foto'>
                <img src={Pfp}></img>
            </div>

            <p className='nome-side-bar'>Ind0m4bl3_Cr0w</p>
        </div>

            <div className='menu-side-bar'>
                <div className='linha-side-bar'></div>
                <div className='item-side-bar'>
                    <img src={Lapis} className='lapis'></img>
                    <p>Editar Perfil</p>
                </div>
                <div className='linha-side-bar'></div>
                <div className='item-side-bar'>
                    <img src={Carrinho} className='carrinho-side-bar'></img>
                    <p>Meus Pedidos</p>
                    <img src={SetaBaixo} className='seta-baixo'></img>
                </div>
                <div className='linha-side-bar'></div>
                <div className='item-side-bar'>
                    <img src={Adm} className='adm'></img>
                    <p>Administrador</p>
                    <img src={SetaBaixo} className='seta-baixo'></img>
                </div>
                <div className='linha-side-bar'></div>

                <div className='logo'>

                <img src={Logo}/>
                <p>FLIP-YEAR</p>
                <p className='doisk'>2000</p>

                </div>

            </div>
        </div>
    )



}