import React from "react";
import styled from "styled-components";
import { useCart } from "./UseCart";
import { Link } from "react-router-dom";

// Overlay escurecido ao fundo (toda tela)
const Overlay = styled.div`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  background: rgba(0,0,0,0.13);
  z-index: 90;
`;

// Container do minicart
const MiniCartContainer = styled.div`
  position: fixed;
  top: 90px;
  right: 44px;
  width: 330px;
  background: #fff;
  box-shadow: 0 8px 24px rgba(41, 42, 53, 0.21);
  z-index: 101;
  padding: 30px;
  display: flex;
  flex-direction: column;
  animation: mini-cart-fade .18s;
  @keyframes mini-cart-fade {
    from { opacity: 0; transform: translateY(-12px);}
    to { opacity: 1; transform: translateY(0);}
  }
`;

// Botão de fechar (se quiser mostrar)
const CloseBtn = styled.button`
  position: absolute;
  top: 13px; right: 13px;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #C92071;
  padding: 3px;
  &:hover { background: #f2e6ec; }
`;

// Título
const Title = styled.h3`
  font-size: 1.08rem;
  font-weight: bold;
  color: #333;
  padding-bottom: 10px;
`;

// Lista e item de produto
const ProductList = styled.ul` list-style: none; `;
const ProductItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 13px;
  margin-top: 10px;
`;

// Imagem do produto
const ProductImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
  background: #f8f8f8;
  border: 1px solid #eee;
`;

// Detalhes do produto e nome
const ProductDetails = styled.div` flex: 1; `;
const ProductName = styled.div`
  font-size: 0.96rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 2px;
  line-height: 1.2em;
`;

// Preços (atual e antigo)
const Prices = styled.div`
  display: flex;
  align-items: baseline;
  gap: 7px;
  margin-top: 4px;
`;
const PriceActual = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: #222;
`;
const PriceOld = styled.div`
  font-size: .8rem;
  color: #bbb;
  text-decoration: line-through;
`;

// Botão para remover produto do carrinho
const RemoveBtn = styled.button`
  background: none;
  border: 1px solid #C92071;
  border-radius: 4px;
  color: #C92071;
  font-size: 11px;
  cursor: pointer;
  margin-top: 3px;
  padding: 3px 5px;
  &:hover { background: #C92071; color: white; }
`;

// Linha do total
const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 13px 0 10px 0;
  font-size: 1rem;
`;
const TotalLabel = styled.span`
  color: #333;
  font-weight: bold
`;
const TotalValue = styled.span`
  color: #c92071;
  font-size: 1.13rem;
  font-weight: bold;
`;

// Rodapé
const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  gap: 10px;
`;

// Botão para esvaziar carrinho
const ClearBtn = styled.button`
  background: none;
  border: none;
  color: #a3a3a3;
  font-size: 0.93rem;
  cursor: pointer;
  text-decoration: underline;
  font-weight: 500;
  padding: 0;
  &:hover { color: #C92071; }
`;

// Botão/link para abrir página do carrinho
const ViewCartBtn = styled(Link)`
  display: block;
  background: #C92071;
  color: #fff;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  padding: 8px 0;
  text-decoration: none;
  flex: 1;
  transition: background .18s;
  &:hover { background: #9d1957; }
`;

// Componente MiniCart principal
const MiniCart = ({ open, onClose }) => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  // Soma do total dos itens do carrinho
  const total = cartItems.reduce((sum, item) => sum + item.preco * item.quantity, 0);

  // Função para mostrar preço antigo (simulado, 5% maior)
  const getOldPrice = (item) => {
    if (!item.preco) return null;
    return (item.preco * 1.05).toFixed(2);
  };

  // Só mostra componente se open=true
  if (!open) return null;

  return (
    <>
      {/* Overlay escurecido ao fundo, fecha ao clicar */}
      <Overlay onClick={onClose} />
      <MiniCartContainer>
        {/* Título */}
        <Title>Meu Carrinho</Title>
        <hr />
        {/* Se carrinho vazio, mostra mensagem */}
        {cartItems.length === 0 ? (
          <div style={{ color: '#777', fontSize: '0.98rem', textAlign: 'center', margin: '30px 0' }}>
            Seu carrinho está vazio.
          </div>
        ) : (
          <>
            {/* Lista de itens do carrinho */}
            <ProductList>
              {cartItems.map((item) => (
                <ProductItem key={item.id + item.tamanho + item.cor}>
                  {/* Imagem do produto */}
                  {item.imagem && <ProductImg src={item.imagem} alt={item.nome} />}
                  <ProductDetails>
                    <ProductName>{item.nome}</ProductName>
                    <Prices>
                      <PriceActual>R$ {item.preco.toFixed(2)}</PriceActual>
                      <PriceOld>R$ {getOldPrice(item)}</PriceOld>
                    </Prices>
                    {/* Remove do carrinho */}
                    <RemoveBtn
                      onClick={() => removeFromCart(item.id, item.tamanho, item.cor, item.corNome)}
                    >Remover</RemoveBtn>
                  </ProductDetails>
                </ProductItem>
              ))}
            </ProductList>
            <hr />
            {/* Total dos itens */}
            <TotalRow>
              <TotalLabel>Valor total:</TotalLabel>
              <TotalValue>
                R$ {total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </TotalValue>
            </TotalRow>
            {/* Rodapé com opções */}
            <FooterRow>
              <ClearBtn onClick={clearCart}>Esvaziar</ClearBtn>
              <ViewCartBtn to="/produtos/meucarrinho" onClick={onClose}>
                Ver Carrinho
              </ViewCartBtn>
            </FooterRow>
          </>
        )}
      </MiniCartContainer>
    </>
  );
};

export default MiniCart;