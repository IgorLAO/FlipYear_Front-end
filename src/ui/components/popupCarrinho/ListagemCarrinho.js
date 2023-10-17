import { useState } from 'react';
import './ListagemCarrinho.scss'
import axios from 'axios';



export default function ListagemCarrinho(props) {

  const [border, setBorder] = useState('none');
  const [idProduto, setIdProduto] = useState(props.idProduto);

    async function ApagarProduto(){

      let resp = await axios.delete('http://localhost:5000/carrinho/produto/'+ 3 + '/' + idProduto);



    }

    function Hover(){

      setBorder('1px solid black')


    }

    function Unset(){


      setBorder('none');


    }


    return (<div className='lista-carrinho'>
              
              <div className='linha-produtos'
              onMouseEnter={Hover}
              onMouseLeave={Unset} 
              onClick={ApagarProduto}
              style={{border: `${border}`}}>
              <p>{props.qtd}</p>
              <p>{props.nome}</p>
            
              {
                (props.promocao == true)
                ?<p>${props.precoPromocional}</p>

                :<p>${props.precoOriginal}</p>
              }
              
              </div>

          </div>);
  }