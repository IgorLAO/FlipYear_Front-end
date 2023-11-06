import './style.scss';

import pyram from '../../../assets/images/sobreNos/pyram-unscreen.gif';

export default function DenzCard() {

    return (
        <main className='Main_Card2'>
            <div className='Card'>
                <header>
                    <img src={pyram} />
                    <h4>
                        Denzel
                    </h4>
                </header>
                <section>
                    <div>
                        <h5>Cargo</h5>
                        <a>DEV</a>
                    </div>

                    <div>
                        <h5>Jogo Favorito</h5>
                        <a>Silent Hill 2</a>
                    </div>
                    <div>
                        <h5>Uma memoria com videogames</h5>
                    </div>
                </section>
            </div>
        </main>
    );
}