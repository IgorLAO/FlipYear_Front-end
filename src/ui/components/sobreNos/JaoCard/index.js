import './style.scss';
import Corvo from '../../../assets/images/perfil-publico_assets/download 2.png';


export default function JaoCard() {

    return (
        <main className='Main_Card'>
            <div className='Card'>
                <div id='corvo'>
                    <img src={Corvo} />
                    <p>{ }João</p>
                </div>

                <div className='dados_integrantes'>
                    <div className='cargo'>
                        <div>
                            <h5>{ }Cargo</h5>
                            <p>{ }DEV Full-Stack</p>
                        </div>
                        <div>
                            <h5>Jogo Favorito</h5>
                            <p>{ }Ben 10 Protector of Earth</p>
                        </div>
                    </div>
                    <div className='memorias'>
                        <p>Uma memória com videogame</p>
                        <div>
                            <p style={{fontSize: '13px'}} >Acordar 5h da manha, logo depois da minha mãe sair, para jogar Ben 10 de ps2</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}