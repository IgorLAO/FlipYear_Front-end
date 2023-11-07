import './style.scss';
import ben from '../../../assets/images/sobreNos/ben.gif';


export default function JaoCard() {

    return (
        <main className='Main_Card2'>
            <div className='Card'>
                <header className='H1'>
                    <span className='NameTier'>
                        <span className='basic'>Basic</span>
                        <h4>
                          João F.
                        </h4>
                    </span>

                    <span className='hp'>
                        <a >HP</a>
                        <h5>400</h5>
                        <h4>J</h4>
                    </span>
                </header>

                <div className='img'>
                    <img src={ben} />
                </div>

                <div className='infos'>
                    <header className='H2'>
                        <a>Ability</a>
                        <h4>JOGO PREFERIDO</h4>
                    </header>
                    <p>Ben 10 Protector of the Earth</p>

                    <header className='H2'>
                        <h4>Memoria</h4>
                    </header>
                    <p>DEV FODA MUITI KKKKKKK OIAsdasddasdaKAsdKK OIAsdasddasadassadsdaSdaASdK OIAsdasddasdaasdsdaKKK OIAsdasddasdaA ELAAAA</p>
                </div>

                <div className='AirLine'>
                    <div>
                        <a>Fraqueza</a>
                        <span>
                            forca
                        </span>
                    </div>
                </div>

            </div>
        </main>
    );
}