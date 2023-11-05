import './style.scss';

import Corvo from '../../../assets/images/sobreNos/pyram-unscreen.gif';

export default function DenzCard() {

    return (
        <main className='Main_Card'>
            <div className='Card'>
                <div id='corvo'>
                    <img src={Corvo} style={{width: '85%'}} />
                    <p>{ } Denzel </p>
                </div>

                <div className='dados_integrantes'>
                    <div className='cargo'>
                        <div>
                            <h5>{ }Cargo</h5>
                            <p>{ }DEV Full-Stack</p>
                        </div>
                        <div>
                            <h5>Jogo Favorito</h5>
                            <p>{ }Silent Hill 2</p>
                        </div>
                    </div>
                    <div className='memorias'>
                        <p>Uma memória com videogame</p>
                        <div>
                            <p style={{fontSize: '13px'}} >Zerar Top Gear com meu pai. Malditas uvas!!!</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}