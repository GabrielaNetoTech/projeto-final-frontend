// Importa logo, styled-components, ícones, hooks, rotas e contexto do carrinho
import Logo from "./Logo";
import styled from "styled-components";
import { Search, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "./UseCart";
import MiniCart from "./MiniCart";

// Estilização do cabeçalho (header) com styled-components
const HeaderContainer = styled.header`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .div-container { margin: 0rem 2rem; padding: 1rem; }
  .form-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & input {
      width: 100%;
      border: none;
      background-color: #f5f5f5;
      border-radius: 5px;
      padding: 15px;
      margin: 15px;
      height: 50px;
    }
  }
  .search {
    display: flex;
    align-items: center;
    position: relative;
    max-width: 100%;
    flex: 1;
    & input { width: 100%; }
  }
  .search .lupa {
    position: absolute;
    right: 20px;
    top: 40px;
    transform: translateY(-50%);
    color: #cccccc;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  .user-cart-area {
    display: flex;
    align-items: center;
    gap: 22px;
  }
  .cart-icon {
    position: relative;
    cursor: pointer;
  }
  .cart-count {
    position: absolute;
    top: -8px;
    right: -10px;
    background-color: #c92071;
    color: white;
    font-size: 12px;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: bold;
  }
  .user-info {
    display: flex;
    align-items: center;
    gap: 7px;
    background: #f5f5f5;
    border-radius: 8px;
    padding: 7px 14px 7px 10px;
    font-size: 15px;
    color: #474747;
    font-weight: bold;
  }
  .navegacao-container { margin: 0rem 2rem; padding: 1rem; }
  .navegacao {
    display: flex;
    gap: 30px;
    list-style: none;
    font-size: 1.3em;
    & a:hover, & .active {
      color: #c92071;
      text-decoration: underline;
      text-underline-offset: 5px;
      text-decoration-thickness: 2px;
    }
  }
  .navegacao a {
    text-decoration: none;
    color: #474747;
  }
`;

// Componente do header para usuário logado
const HeaderLogado = ({ nomeUsuario }) => {
  // Pega quantidade de itens do carrinho (contexto)
  const { getCartQuantity } = useCart();
  const quantity = getCartQuantity();

  // States para barra de busca e exibição do minicart
  const [busca, setBusca] = useState('');
  const [miniCartOpen, setMiniCartOpen] = useState(false);

  // Hook de navegação do React Router
  const navigate = useNavigate();

  // Função disparada ao submeter busca
  const BarraPesquisa = (e) => {
    e.preventDefault();
    const Limpo = busca.trim();
    if (Limpo !== '') {
      navigate(`/products?filter=${encodeURIComponent(Limpo)}`);
    } else {
      navigate("/produtos");
    }
  };

  // nomeUsuario: prop que deve ser passada (ex: "Gabriela")

  return (
    <HeaderContainer>
      <div className="div-container">
        <form className="form-container" onSubmit={BarraPesquisa}>
          <Logo />
          <div className="search">
            <input
              type="text"
              placeholder="Pesquisar produto..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
            <button className="lupa" type="submit">
              <Search />
            </button>
          </div>
          <div className="user-cart-area">
            {/* Carrinho: abre o MiniCart ao clicar */}
            <div className="cart-icon" onClick={() => setMiniCartOpen(true)}>
              <ShoppingCart size={28} color="#c92071" />
              {quantity > 0 && <div className="cart-count">{quantity}</div>}
            </div>
            {/* Info do usuário logado */}
            <div className="user-info">
              <User size={22} color="#c92071" />
              <span>Olá, {nomeUsuario}</span>
            </div>
          </div>
        </form>
      </div>
      <div>
        <nav className="navegacao-container">
          <ul className="navegacao">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/produtos">Produtos</NavLink></li>
            <li><NavLink to="/categorias">Categorias</NavLink></li>
            <li><NavLink to="/meuspedidos">Meus Pedidos</NavLink></li>
          </ul>
        </nav>
      </div>
      {/* MiniCarrinho flutuante */}
      <MiniCart open={miniCartOpen} onClose={() => setMiniCartOpen(false)} />
    </HeaderContainer>
  );
};

export default HeaderLogado;