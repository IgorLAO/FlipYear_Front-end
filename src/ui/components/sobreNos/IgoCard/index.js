import './style.scss';

import Corvo from '../../../assets/images/sobreNos/mrKarate.gif';

export default function IgoCard() {

    return (
        <main className='Main_Card'>
            <div className='Card'>
                <div id='corvo'>
                    <img src={Corvo} />
                    <p>{ }Igor</p>
                </div>

                <div className='dados_integrantes'>
                    <div className='cargo'>
                        <div>
                            <h5>{ }Cargo</h5>
                            <p>{ }DEV Full-Stack</p>
                        </div>
                        <div>
                            <h5>Jogo Favorito</h5>
                            <p>{ }Shadown of the Colossus</p>
                        </div>
                    </div>
                    <div className='memorias'>
                        <p>Uma memória com videogame</p>
                        <div>
                            <p style={{fontSize: '13px'}}> Tiltar jogando The King of Fighters. IMPOSSIVEL VENCER O RUGAL </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}