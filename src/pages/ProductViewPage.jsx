//Mostra os produtos adicionados ao carrinho. Permite remover itens individualmente ou limpar tudo.

//Lê os itens do carrinho via contexto (CartContext).

//Mostra as informações principais do pedido.

//Permite remover um item ou limpar o carrinho.
import React from "react";
import { useCart } from "../components/UseCart";

const ProductViewPage = () => {
  const {
    cartItems,
    removeFromCart,     // remove item específico
    clearCart           // esvazia todo o carrinho
  } = useCart(); // hook do contexto

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Meus Pedidos</h1>

      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cartItems.map((item) => (
              <li
                key={item.id + item.tamanho + item.cor}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0.5rem 0",
                  borderBottom: "1px solid #ccc"
                }}
              >
            <div>
              <strong>{item.nome}</strong><br />
                Quantidade: {item.quantity}<br />
                Tamanho: {item.tamanho}<br />
                Cor: {item.cor}<br />
                Nome da Cor: {item.corNome} <br />
                Preço unitário: R$ {item.preco?.toFixed(2) ?? "???"} <br />
                Subtotal: R$ {(item.preco * item.quantity).toFixed(2)} <br />
                  {item.imagem && (
                <img 
      src={item.imagem} 
      alt={item.nome} 
      style={{ width: "50px", height: "50px", objectFit: "cover", marginTop: "5px" }}
    />
  )}
</div>

                <button
                  onClick={() => removeFromCart(item.id, item.tamanho, item.cor, item.corNome)}
                  style={{
                    background: "none",
                    border: "1px solid #C92071",
                    color: "#C92071",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
<h3>
  Total a pagar: R$ {cartItems.reduce((total, item) => total + (item.preco * item.quantity), 0).toFixed(2)}
</h3>
          <button
            onClick={clearCart}
            style={{
              marginTop: "1.5rem",
              backgroundColor: "#C92071",
              color: "white",
              padding: "0.7rem 1.5rem",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Esvaziar Carrinho
          </button>
        </>
      )}
    </div>
  );
};

export default ProductViewPage;
