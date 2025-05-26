import styled from "styled-components"
import { FaStar } from "react-icons/fa"

const Teste = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;

     h1{
       font-size: 32px;
       color: #1F1F1F;
       margin-bottom: 8px;
      word-wrap: break-word;
      overflow-wrap: break-word;
      line-height: 1em; 
     }
     .referencia{
       font-size: 12px;
       color: #666666;
       margin-bottom: 12px;
     }
     .estrela{
       border-radius: 4px;
       background-color: #F6AA1C;
       width: 50px;
       height: 20px;
       font-size: 14px;
       color: white;
       display: flex;
       justify-content: center;
       align-items: center;
       gap: 5px;
     }

     .avaliacao {
      display: flex;
      align-items: center;
      gap: 7px;
      margin-bottom: 16px;
     }
     
     & span{
      font-size: 14px;
      color: #8F8F8F;
     }

     .prices{
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
      & h2{
        font-size: 32px;
        color: #474747;
        margin: 0;
        & .price-detalhes{
          font-size: 14px;
          color: #474747;
        }
      }
      & h4 {
        font-size: 14px;
        color: #CCCCCC;
        text-decoration: line-through;
        margin: 0;
      }
     }

     .descricao-title {
       font-size: 16px;
       font-weight: bold;
       color: #1F1F1F;
       margin-bottom: 8px;
     }

     .descricao{
      font-size: 14px;
      color: #474747;
      flex-wrap: wrap;
      line-height: 1.5;
      margin-bottom: 20px;
     }

     .button{
      background-color: #F6AA1C;
        border-radius: 5px;
        border: none;
        width: 150px;
        height: 40px;
        font-weight: bold;
        color: white;
        font-size: 14px;
        cursor: pointer;
        margin-top: 1rem;
        margin-bottom: 1rem;
        transition: background-color 0.2s ease;
        
        &:hover {
          background-color: #e09915;
        }
     }
`

const ProductDetails = ({ children, produto }) => {
  if (!produto) {
    return <div>Carregando detalhes do produto...</div>
  }

  const formatarPreco = (valor) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(valor)
  }

  return (
    <Teste>
      <h1>{produto.nome}</h1>
      <p className="referencia">Ref: {produto.id.toString().padStart(10, "0")}</p>
      <div className="avaliacao">
        <div className="estrela">
          <h5>4.7</h5>
          <FaStar color="white" size={12} />
        </div>
        <span>90 avaliações</span>
      </div>
      <div className="prices">
        <h2>{formatarPreco(produto.preco)}</h2>
        {produto.precoOriginal && produto.precoOriginal !== produto.preco && (
          <h4>{formatarPreco(produto.precoOriginal)}</h4>
        )}
      </div>
      <h5 className="descricao-title">Descrição do produto</h5>
      <p className="descricao">{produto.descricao}</p>
      <div className="opcoes-produtos">{children}</div>
      <button className="button">Comprar</button>
    </Teste>
  )
}

export default ProductDetails
