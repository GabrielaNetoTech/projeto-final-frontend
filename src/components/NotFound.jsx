import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px);}
  to   { opacity: 1; transform: translateY(0);}
`;

const NotFoundContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(120deg, #fbe3f2 0%, #fff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;

  .content {
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 4px 24px rgba(201,32,113,0.06), 0 1.5px 8px #fbe3f2;
    padding: 54px 44px 48px 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${fadeIn} 0.5s;
  }

  h1 {
    font-size: 5rem;
    font-weight: 900;
    color: #C92071;
    margin-bottom: 0.3em;
    letter-spacing: 2px;
  }

  p {
    font-size: 1.33rem;
    color: #444;
    margin-bottom: 2.5em;
    font-weight: 500;
    text-align: center;
    max-width: 350px;
  }

  .btn-back {
    border-radius: 10px;
    background-color: #C92071;
    padding: 12px 38px;
    border: none;
    color: white;
    font-weight: 700;
    font-size: 1.12rem;
    letter-spacing: 0.03em;
    cursor: pointer;
    box-shadow: 0 2px 8px #fae1f1;
    transition: background 0.21s, transform 0.16s;
    &:hover, &:focus {
      background: #9d1957;
      transform: translateY(-2px) scale(1.04);
    }
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <div className="content">
        <h1>404</h1>
        <p>
          Ops! A página que você procura não existe ou foi removida.<br />
          Você pode voltar para a página inicial.
        </p>
        <Link to="/">
          <button className="btn-back">Voltar para o início</button>
        </Link>
      </div>
    </NotFoundContainer>
  );
};

export default NotFound;