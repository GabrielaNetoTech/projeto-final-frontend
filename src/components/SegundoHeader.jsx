// Header secundário simples, exibe apenas o logo e link para home

import { Link } from "react-router-dom";
import Logo from "./Logo";
import styled from "styled-components";

// Estilo simples para o header
const HeaderContainer = styled.header`
    background-color: #fff; 
    padding: 10px;
`;

const SegundoHeader = () => {
    return ( 
        <HeaderContainer>
          {/* Header interno: logo clicável leva para a "/" (home) */}
          <header>
            <Link to="/">
              <Logo />
            </Link>
          </header>
        </HeaderContainer>
     );
}
 
export default SegundoHeader;