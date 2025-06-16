import React from "react";
import styled from "styled-components";
import { useCart } from "../components/UseCart";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // ajuste o path conforme seu projeto

const ContainerMeuCarrinho = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px;
  font-family: Arial, sans-serif;

  .container-main-content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 32px;
  }
  .container-itens {
    flex: 1;
    min-width: 0;
  }

  .tabela {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 10px;
  }

  .tabela th {
    text-align: left;
    font-size: 14px;
    color: #888;
    padding-bottom: 8px;
    font-weight: bold;
  }

  .tabela th.qtd-header {
    text-align: center;
    width: 110px;
  }
  .tabela td.qtd-cell {
    text-align: center;
    width: 110px;
  }
  .tabela th.preco-header {
    padding-right: 16px;
  }
  .tabela th.subtotal-header {
    padding-left: 16px;
  }
  .tabela td.preco-cell {
    padding-right: 16px;
  }
  .tabela td.subtotal-cell {
    padding-left: 16px;
  }

  .tabela td {
    background: #fafafa;
    border-radius: 8px;
    padding: 12px 8px;
    font-size: 13px;
    vertical-align: middle;
  }

  .produto-nome {
    font-weight: bold;
    font-size: 15px;
    color: #222;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 2px;
  }

  .produto-detalhes {
    margin-top: 2px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    line-height: 1.3;
  }

  .produto-detalhes span {
    font-size: 13px;
    color: #555;
    margin-bottom: 0;
  }
  .detalhe-label {
    color: #333;
    margin-right: 3px;
    display: inline-block;
    min-width: 0;
    text-transform: none;
  }
  .detalhe-info {
    font-weight: bold;
    color: #555;
  }

  .tabela img {
    width: 48px;
    height: 48px;
    border-radius: 4px;
    background: #f8f8f8;
    object-fit: cover;
    border: 1px solid #eee;
    margin-right: 8px;
  }

  .quantidade-detalhes {
    display: flex;
    align-items: center;
    gap: 4px;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 2px 8px;
    background: #fff;
    justify-content: center;
    width: 100px;
    margin: 0 auto;
  }
  .quantidade-detalhes button {
    background-color: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #C92071;
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
  .quantidade-detalhes p {
    margin: 0 2px;
    font-size: 15px;
    min-width: 20px;
    text-align: center;
    font-weight: bold;
  }

  .remover-container {
    margin-top: 6px;
  }
  .remover-btn {
    background: none;
    border: 1px solid #C92071;
    color: #C92071;
    padding: 0.10rem 0.55rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 11px;
    font-weight: bold;
    margin-left: 0;
    margin-top: 3px;
    transition: 0.2s;
    display: inline-block;
  }
  .remover-btn:hover {
    background: #C92071;
    color: #fff;
  }

  .subtotal-destaque {
    font-weight: bold;
    color: #222;
    font-size: 14px;
  }

  .esvaziar-btn {
    margin: 24px 0 0 0;
    background-color: #fff;
    color: #C92071;
    border: 1px solid #C92071;
    border-radius: 8px;
    font-weight: bold;
    height: 38px;
    width: 180px;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    display: block;
  }
  .esvaziar-btn:hover {
    background: #C92071;
    color: #fff;
  }

  /* RESUMO AO LADO */
  .resumo {
    background-color: #f9f9f9;
    padding: 24px;
    border-radius: 12px;
    max-width: 300px;
    min-width: 230px;
    box-shadow: 0 2px 8px #0001;
    position: sticky;
    top: 24px;
    align-self: flex-start;
  }
  .resumo h4 { font-size: 18px; margin-top: 0; margin-bottom: 12px; }
  .resumo .linha { border-top: 1px solid #eee; margin: 16px 0; }
  .resumo-detalhe {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #333;
    margin: 6px 0;
  }
  .resumo-total {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: bold;
    color: #222;
    margin: 20px 0 8px 0;
  }
  .resumo button {
    width: 100%;
    background-color: #F6AA1C;
    color: #fff;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    height: 42px;
    font-size: 15px;
    margin-top: 14px;
    cursor: pointer;
    transition: background 0.2s;
  }
  .resumo button:hover { background: #a0185c; }

  @media (max-width: 900px) {
    .container-main-content {
      flex-direction: column;
      gap: 0;
    }
    .resumo {
      margin: 32px auto 0 auto;
      position: static;
      max-width: 100%;
      min-width: unset;
      width: 100%;
    }
    .produto-nome {
      white-space: normal;
    }
    .esvaziar-btn {
      width: 100%;
    }
  }
`;

const formatarPreco = valor => new Intl.NumberFormat("pt-BR", {
  style: "currency", currency: "BRL", minimumFractionDigits: 2
}).format(valor);

const MeuCarrinho = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    incrementQuantity,
    decrementQuantity
  } = useCart();

  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const subtotal = cartItems.reduce((total, item) => total + (item.preco * item.quantity), 0);
  const desconto = subtotal > 300 ? 30 : 0;
  const frete = subtotal > 199 ? 0 : 19.9;
  const total = subtotal - desconto + frete;

   const handleContinuar = () => {
    if (isAuthenticated) {
      navigate("/finalizarcompras");
    } else {
      navigate("/login", { state: { from: "/finalizarcompras" } }); // opcional: já passa info do destino
    }
  };
  // Verifica se o usuário está autenticado
  return (
    <ContainerMeuCarrinho>
      <div className="container-main-content">
        <div className="container-itens">
          {cartItems.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            <>
              <table className="tabela">
                <thead>
                  <tr>
                    <th style={{color: "black"}}>MEU CARRINHO</th>
                    <th className="qtd-header">Qtd</th>
                    <th className="preco-header">Preço unit.</th>
                    <th className="subtotal-header">Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id + item.tamanho + item.cor}>
                      <td>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                          {item.imagem &&
                            <img src={item.imagem} alt={item.nome} />
                          }
                          <div>
                            <div className="produto-nome" title={item.nome}>{item.nome}</div>
                            <div className="produto-detalhes">
                              <span>
                                <span className="detalhe-label">Cor:</span>
                                <span className="detalhe-info">{item.corNome || item.cor}</span>
                              </span>
                              <span>
                                <span className="detalhe-label">Tamanho:</span>
                                <span className="detalhe-info">{item.tamanho}</span>
                              </span>
                            </div>
                            <div className="remover-container">
                              <button
                                className="remover-btn"
                                onClick={() => removeFromCart(item.id, item.tamanho, item.cor, item.corNome)}
                              >Remover</button>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="qtd-cell">
                        <div className="quantidade-detalhes">
                          <button
                            aria-label="Diminuir quantidade"
                            onClick={() => decrementQuantity(item.id, item.tamanho, item.cor, item.corNome)}
                            disabled={item.quantity === 1}
                          >-</button>
                          <p>{item.quantity}</p>
                          <button
                            aria-label="Aumentar quantidade"
                            onClick={() => incrementQuantity(item.id, item.tamanho, item.cor, item.corNome)}
                          >+</button>
                        </div>
                      </td>
                      <td className="preco-cell">{formatarPreco(item.preco)}</td>
                      <td className="subtotal-cell">
                        <span className="subtotal-destaque">
                          {formatarPreco(item.preco * item.quantity)}
                        </span>
                      </td>
                      <td />
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="esvaziar-btn" onClick={clearCart}>
                Esvaziar carrinho
              </button>
            </>
          )}
        </div>
        {/* RESUMO AO LADO */}
        <div className="resumo">
          <h4>Resumo do Pedido</h4>
          <div className="linha" />
          <div className="resumo-detalhe">
            <span>Subtotal</span>
            <span>{formatarPreco(subtotal)}</span>
          </div>
          <div className="resumo-detalhe">
            <span>Frete</span>
            <span>{formatarPreco(frete)}</span>
          </div>
          <div className="resumo-detalhe">
            <span>Desconto</span>
            <span>-{formatarPreco(desconto)}</span>
          </div>
          <div className="resumo-total">
            <span>Total</span>
            <span>{formatarPreco(total)}</span>
          </div>
          <button onClick={handleContinuar}>Continuar</button>
        </div>
      </div>
    </ContainerMeuCarrinho>
  );
};

export default MeuCarrinho;