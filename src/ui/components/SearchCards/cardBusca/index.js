import './style.scss'
import consolo from '../../../assets/images/imageExamples/atari_console.png'

const SearchCard = (props) => {
    return(
        <div className="Main_SearchCard">
           <img src={consolo}/>

           <span className='Texts' style={{display: 'flex', flexDirection: 'column'}}>
            <b> {props.i.Nome} </b>
            <a style={{display: 'flex'}}> {props.i.Estado} - {props.i.Fabricante} </a>
           </span>

           <span className='Prices' style={{display: 'flex', flexDirection: 'column'}}>
            <b> {props.i.Preco} </b>
            <a style={{textDecoration: 'line-through'}}> {props.i.Promo} </a>
           </span>
    </div>
    );
}

export default SearchCard;      