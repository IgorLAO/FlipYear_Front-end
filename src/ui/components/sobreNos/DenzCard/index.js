import './style.scss';

import pyram from '../../../assets/images/sobreNos/pyram-unscreen.gif';

export default function DenzCard() {

    return (
        <main className='Main_Card2'>
            <div className='Card'>
              <header>
                <span>DEV</span>
                <h4>
                    Denzel N.
                </h4>
              </header>
              <div className='img'>
                <img src={pyram} />
              </div>
              <div className='infos'>
                <header>
                    <a>Ability</a>
                    <h4>Excited Heart</h4>
                </header>
                <p>DEV FODA MUITI KKKKKKK OIAAA ELAAAA</p>
              </div>
            </div>
        </main>
    );
}