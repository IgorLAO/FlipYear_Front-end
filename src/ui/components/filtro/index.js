import './index.scss';
import filtro from '../../assets/images/NavBar_assets/filtro_logo.png'

export default function Filtro(props){

    return(
    
    <div>

        {
            (props.popUpFiltro == true)

            ? <div className='card-filtro'>

            <div className='titulo'>
                <div>
                <img src={filtro} className='filtro'></img>
                <h2>Tipo de Produto</h2>
                    
                </div>
            </div>
            
            
            </div>

            :<></>


        }


    </div>
    
    
    )




}
