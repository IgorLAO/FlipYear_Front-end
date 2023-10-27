import { useState, useEffect } from 'react';
import './ListagemCarrinho.scss'
import axios from 'axios';



export default function ListagemCarrinho(props) {

  const [border, setBorder] = useState('none');
  const [idProduto, setIdProduto] = useState(props.idProduto);
  const [qtdProdutos, SetQtdProdutos] = useState(props.QTD_PRODUTO_CARRINHO);
  const [apagar, setApagar] = useState('');

    async function ApagarProduto(){

      let resp = await axios.delete('http://localhost:5000/carrinho/produto/'+ 3 + '/' + idProduto);



    }



    function Hover(){

      setBorder('1px solid black');
      setApagar('X');


    }

    function Unset(){


      setBorder('none');
      setApagar('');


    }



    return (<div className='lista-carrinho'>
              
              <div className='linha-produtos'
              onMouseEnter={Hover}
              onMouseLeave={Unset} 
              style={{border: `${border}`}}>
              <p>{props.qtd}</p>
              <p>{props.nome}</p>
            
              {
                (props.promocao == true)
                ?<p>${props.precoPromocional}</p>

                :<p>${props.precoOriginal}</p>
              }

              { 

              (apagar == 'X')

              ?<p className='apagar' onClick={ApagarProduto}>{apagar}</p>


              :<></>



              }

              
              </div>

          </div>);
  }