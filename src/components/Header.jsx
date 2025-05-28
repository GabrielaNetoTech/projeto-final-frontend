import Logo from "./Logo";
import styled from "styled-components";
import { Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "./UseCart"

const HeaderContainer = styled.header`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .div-container {
    margin: 0rem 2rem;
    padding: 1rem;
  }

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

    & input {
      width: 100%;
    }
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

  .cadastrar {
    color: #474747;
    padding: 0.1rem;
    font-size: 16px;
    text-decoration: none;
  }

  .cadastrar-entrar-cart {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .entrar {
    background-color: #c92071;
    border-radius: 5px;
    width: 114px;
    height: 40px;
    font-weight: bold;
    color: white;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
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

  .navegacao-container {
    margin: 0rem 2rem;
    padding: 1rem;
  }

  .navegacao {
    display: flex;
    gap: 30px;
    list-style: none;
    font-size: 1.3em;

    & a:hover,
    & .active {
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

const Header = () => {
  const { getCartQuantity } = useCart();
  const quantity = getCartQuantity();

  const [busca, setBusca] = useState('');
  const navigate = useNavigate();

  const BarraPesquisa = (e) => {
    e.preventDefault();
    const Limpo = busca.trim();
    if (Limpo !== '') {
      navigate(`/products?filter=${encodeURIComponent(Limpo)}`);
    }else {
  navigate("/produtos");
  };
 };
  const TeclaEnter = (e) => {
    if (e.key === 'Enter') {
      BarraPesquisa(e);
    }
  };

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
              onKeyDown={TeclaEnter}
            />
            <button className="lupa" type="submit">
              <Search />
            </button>
          </div>
          <div className="cadastrar-entrar-cart">
            <a className="cadastrar" href="#">Cadastre-se</a>
            <a className="entrar" href="#">Entrar</a>
            <div className="cart-icon" onClick={() => navigate("/meuspedidos")}>
              <ShoppingCart size={28} color="#c92071" />
              {quantity > 0 && <div className="cart-count">{quantity}</div>}
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
    </HeaderContainer>
  );
};

export default Header;
