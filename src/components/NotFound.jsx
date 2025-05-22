import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
   
   button {
    border-radius: 8px;
    background-color: #C92071;
    padding: 8px;
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
}

`;

const NotFound = () => {
    return ( 
        <NotFoundContainer>
        <div>
        <h1>404</h1>
        <p>Página não encontrada</p>
        <Link to={"/"}><button>Voltar</button></Link>
        </div>
        </NotFoundContainer>
    );
}
 
export default NotFound;