import './style.scss';


export default function ItaloCard() {

    return (
        <main className='Main_ItaloCard'>
            <div className='dados_integrantes'>
                <div className='cargo'>
                    <div>
                        <h5>{ }Cargo</h5>
                        <p>{ }DEV Brabo</p>
                    </div>
                    <div>
                        <h5>Jogo Favorito</h5>
                        <p>{ }Silent Hill 2</p>
                    </div>
                </div>
                <div className='memorias'>
                    <p>Uma memória com videogame</p>
                    <div>
                        <p>Zerar Top Gear com meu pai. Malditas uvas!!!</p>
                    </div>
                </div>
            </div>
        </main>
    );
}