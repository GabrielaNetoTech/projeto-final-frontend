import Logo from "./Logo";
import styled from "styled-components";
import { Search } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const HeaderContainer = styled.header`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.div-container{
     margin: 0rem 2rem;
     padding: 1rem;
}
.form-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    & input {
        height: 2.5rem;
        width: 100%;
        border: none;
        background-color: #F5F5F5;
        border-radius: 5px;
        padding: 15px;
        margin: 15px;
        height: 50px;
    }
}
.search{
    display: flex;
    align-items: center;
    position: relative;
    max-width: 100%;
    flex: 1;
    & input{
        width: 100%;
    }
}
.search .lupa{
        position: absolute;
        right: 20px;
        top: 40px;
        transform: translateY(-50%);
        color: #CCCCCC;
        border: none;
        background-color: transparent;
    }
.cadastrar{
    color: #474747; 
    padding: 0.1rem;
    font-size: 16px;
}
.cadastrar-entrar-cart{
    display: flex;
    align-items: center;
    gap: 20px;
}

.entrar{
    background-color: #C92071;
    border-radius: 5px;
    width: 114px;
    height: 40px;
    font-weight: bold;
    color: white;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navegacao-container{
    margin: 0rem 2rem;
    padding: 1rem;
}

.navegacao{
    display: flex;
    gap: 30px;
    list-style: none;
    font-size: 1.3em;
    & a:hover, & .active{
        color: #C92071;
        text-decoration: underline;
        text-underline-offset: 5px;
        text-decoration-thickness: 2px;
    } 
}

.navegacao a{
    text-decoration: none;
    color: #474747;
}
`;

const Header = () => {

const [busca, setBusca] = useState('');
const navigate = useNavigate();

const BarraPesquisa = (e) => {
    e.preventDefault();
    const Limpo = busca.trim();
    if (Limpo !== '') {
        navigate(`/products?filter=${encodeURIComponent(Limpo)}`);
    }
}
const TeclaEnter = (e) => {
    if (e.key === 'Enter') {
        BarraPesquisa(e);
    }
}


    return (
        <HeaderContainer>
        <div className="div-container">
           <form className="form-container">
            <Logo/>
            <div className="search">
               <input 
               type="text" placeholder="Pesquisar produto..."
               value={busca}
               onChange={(e) => setBusca(e.target.value)}
               onKeyDown={TeclaEnter}
               />
               <button className="lupa" onClick={BarraPesquisa}>
                < Search/>
                </button>
            </div>
            <div className="cadastrar-entrar-cart">
            <a className="cadastrar" href="#">Cadastre-se</a>
            <a className="entrar">Entrar</a>
            <img src="./src/assets/mini-cart.svg" alt="" /> 
            </div>
           </form>
        </div>
        <div >
            <nav className="navegacao-container">
                <ul className="navegacao">
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/produtos"}>Produtos</NavLink></li>
                    <li><NavLink to={"/categorias"}>Categorias</NavLink></li>
                    <li><NavLink to={"meuspedidos"}>Meus Pedidos</NavLink></li>
                </ul>
           </nav>
        </div>
    </HeaderContainer>
    );
}
 
export default Header;