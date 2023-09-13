import './index.scss';

export default function Esqueceu(){

    return (
        <div className='main'>
            <h1> Recuperar senha </h1>

            <div className='prt-1'>
                <p className='bloco-1'> Email </p>
                <input type="text" />
            </div>
            <div className='prt-2'>
                <p className='bloco-2'> Confirme Email </p>
                <input type="text" />
            </div>

            <button>Enviar</button>
        </div>
    );


}