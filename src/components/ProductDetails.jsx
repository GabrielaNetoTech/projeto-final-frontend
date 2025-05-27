import styled from "styled-components"
import { FaStar } from "react-icons/fa"
import { useCart } from "./CartContext";
import { useNavigate } from 'react-router-dom';
import { cloneElement } from "react";
import { useState } from "react";

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

const formatarPreco = (valor) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(valor)
}

const ProductDetails = ({ children, produto }) => {
  const [selecoes, setSelecoes] = useState({ tamanho: null, cor: null });
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!produto) {
    return <div>Carregando detalhes do produto...</div>
  }

  const handleComprar = () => {
    if (!selecoes.tamanho || !selecoes.cor) {
      alert("Por favor, selecione um tamanho e uma cor.");
      return;
    }

    // Busca a variação correspondente à seleção do usuário
    let detalheVariacao = null;
    if (produto.variacoes) {
      // flatMap todos os detalhes das variações
      detalheVariacao = produto.variacoes
        .flatMap(v => v.detalhes)
        .find(
          d =>
            String(d.tamanho) === String(selecoes.tamanho) &&
            d.cor === selecoes.cor
        );
    }

    const corNome = detalheVariacao ? detalheVariacao.corNome : "";
    const imagemSelecionada = detalheVariacao
      ? detalheVariacao.imagem
      : (produto.imagens && produto.imagens.length > 0
          ? (produto.imagens[0].src || produto.imagens[0])
          : "");

    addToCart(
      produto,
      1,
      selecoes.tamanho,
      selecoes.cor,
      corNome,
      imagemSelecionada
    );
    navigate("/meuspedidos");
  };

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

      <div className="opcoes-produtos">
        {children && cloneElement(children, { onSelectionChange: setSelecoes })}
      </div>
      <button className="button" onClick={handleComprar}>Comprar</button>
    </Teste>
  )
}

export default ProductDetails