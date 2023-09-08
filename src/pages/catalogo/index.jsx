import './index.scss';
import filtro from '../../ui/assets/images/filtro_logo.png'
export default function Catalogo(){
    return(
        <>
            <div className="container-ctlg">
                   <h1>Catálogo</h1> 
                <div className="bloco-filtro-ctlg">
                    <div>
                        <img src={filtro}/>
                        <p>Tipo de Produto</p>

                    </div>
                    <div className="filtros-ctlg">
                        <div>
                            <a>Jogos</a>
                            <a>Consoles</a>
                            <a>Super Nintendo</a>
                        </div>
                        <div>
                            <a>Colecionador</a>
                            <a>Funcionando</a>
                            <a>Mega Drive</a>    
                        </div>
                    </div>
                </div>
                <h1>Exibindo todos os resultados para {}</h1>

            </div>
        
        </>
    )
}