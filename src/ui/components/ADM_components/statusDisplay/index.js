import './style.scss';

import react, { useState } from 'react'

export default function StatusDisplay() {
    const [PorcentProgess, setPorcentProgess] = useState(0);

    return (
        <main className='Main_StatusDisplay'>
            <div className='contentDisplay'>
                <header style={{display: 'flex'}}> 
                    <span>X</span>

                    <h4 style={{ display: 'flex', justifyContent: 'center' }}>
                        Selecionar Status do Produto
                    </h4>
                </header>
                <div className='carProgress' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <a className='destino'>
                        <h5>Destino</h5>
                        <span>
                            Rua da silva medeiro campos, n23
                        </span>
                    </a>
                    <div style={{   display: 'flex', 
                                    padding: '0px', 
                                    width: '50%', 
                                    backgroundColor: '#F5F5F5' }}>

                        <span style={{  backgroundColor: '#86C06C', 
                                        padding: '3px', 
                                        width: `${PorcentProgess}%` }}>
    
                        </span>
                    </div>
                </div>

                <div className='btns'>
                    <button onClick={() => setPorcentProgess(20)}>
                        Aguardando Pagamento
                    </button>

                    <button onClick={() => setPorcentProgess(40)} >
                        Pagamento Efetuado
                    </button>

                    <button onClick={() => setPorcentProgess(60)}>
                        Preparando Pedido
                    </button>

                    <button onClick={() => setPorcentProgess(80)}>
                        Produto em Transito
                    </button>

                    <button onClick={() => setPorcentProgess(100)}>
                        Produto Recebido
                    </button>

                </div>
            </div>
        </main>
    );
}