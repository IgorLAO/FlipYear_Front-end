import './ListagemCarrinho.scss'



export default function ListagemCarrinho(props) {

    return (<div className='lista-carrinho'>
              
              <div className='linha-produtos'>
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