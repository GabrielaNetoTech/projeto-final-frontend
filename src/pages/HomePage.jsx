import React, { useEffect, useState } from 'react';
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import styled from "styled-components";
import { CircleSmall } from "lucide-react"; 
import { IoShirtOutline } from "react-icons/io5";
import { PiPantsLight, PiBaseballCapLight, PiHeadphonesLight } from "react-icons/pi";
import { GiRunningShoe } from "react-icons/gi";
import { NavLink } from 'react-router-dom';

const PrincipalContainer = styled.section`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #F5F5F5;
    position: relative;
    height: 50vh;
    width: 100%;
    overflow: hidden;
    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      transition: background-image 1s ease-in-out;
      z-index: 1;
    }
    .parte-principal {
      position: relative;
      z-index: 3;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 2rem;
      height: 100%;
      margin-left: 4rem;
    }
    .informacoes {
      & h5{
        color: #f6aa1c;
        margin-bottom: 0.5rem;
        margin-top: 0;
      }
      & h1 {
        font-size: 2.2rem;
        margin: 0.5rem 0 0.5rem 0;
        line-height: 1.1;
      }
      & p {
        margin: 0;
        color: #757575;
        font-size: 1rem;
        line-height: 1.4;
      }
      & button {
        background-color: #C92071;
        border-radius: 5px;
        border: none;
        width: 130px;
        height: 38px;
        font-weight: bold;
        color: white;
        font-size: 14px;
        cursor: pointer;
        margin-top: 0.8rem;
      }
    }
    .dots {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 4;
    }
    .dot-icon {
      cursor: pointer;
      opacity: 0.5;
      transition: opacity 0.3s;
      margin: 0 2px;
    }
    .dot-icon.active {
      color: #C92071;
      opacity: 1;
    }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none !important;
  color: #fff !important;

  &:visited, &:active {
    color: #fff !important;
    text-decoration: none !important;
  }
`

const ColecaoContainer = styled.section`
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F8F9FE;

  .colecao h5 {
    color: #474747;
    font-size: 22px;
  }

  .imagens-colecao {
    display: flex;
    gap: 10px;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; /* permite quebrar linha */

    img {
      width: 40%;
      min-width: 120px;
      max-width: 250px;
      border-radius: 8px;
      object-fit: cover;
      flex: 1 1 120px;
      height: auto;
      
    }
  }

  /* Ajuste para telas menores */
  @media (max-width: 700px) {
    .imagens-colecao {
      flex-direction: column;
      gap: 12px;
      align-items: center;
      img {
        width: 80vw;
        max-width: 95vw;
        min-width: 0;
      }
    }
  }
`;

const ProdutosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F8F9FE;
`;

const ColecaoMiniatura = styled.section`
  background-color: #F8F9FE;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h5 {
    color: #474747;
    font-size: 22px;
  }
`;

const MiniaturaNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  @media (max-width: 700px) {
    gap: 0.7rem;
    flex-wrap: wrap;
  }
  @media (max-width: 500px) {
    gap: 0.4rem;
    flex-wrap: wrap;
  }
`;

const Miniatura = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100px;
  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .icon-wrapper {
    background-color: white;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.3rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    color: #8F8F8F;
  }
  h5 {
    font-size: 0.95rem;
    margin-top: 0.2rem;
    color: #474747;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover .icon-wrapper,
  a:hover .icon-wrapper {
    color: #C92071;
  }
  &:hover h5,
  a:hover h5 {
    color: #C92071;
  }
`;

const Oferta = styled.section`
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  border-radius: 14px;
  box-shadow: 0 2px 18px rgba(0,0,0,0.06);

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 12px;
    padding: 12px 0;
    border-radius: 0;
  }

  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: auto;
      max-width: 100%;
      height: auto;
    }
  }

  .oferta-especial {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.45rem; /* reduzido! */
    h5 {
      color: #C92071;
      margin: 0;
      font-size: 1.1rem;
      font-weight: 600;
    }
    h2 {
      font-size: 2rem;
      margin: 0.2rem 0 0.2rem 0;
      line-height: 1.1;
      font-weight: 700;
    }
    p {
      color: #8F8F8F;
      margin: 0;
      font-size: 1rem;
      line-height: 1.3;
      max-width: 430px;
    }
    button {
      background-color: #C92071;
      border-radius: 5px;
      border: none;
      width: 130px;
      height: 38px;
      font-weight: bold;
      color: white;
      font-size: 14px;
      cursor: pointer;
      margin-top: 0.6rem;
    } 
  }
`;

const Images = [
  '/home-slide/tenis-nike-lado.png',
  '/home-slide/home-slide-2.jpeg',
  '/home-slide/home-slide-7.jpeg',
];

function Produtos() {
  return (
    <Section
      title="Produtos em alta"
      titleAlign="left"
      link={{ text: "Ver todos →", href: "/produtos" }}
    >
      <ProductListing limit={8} />
    </Section>
  );
}

const HomePage = () => {
  const [controleImage, setControleImage] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setControleImage(prevIndex => (prevIndex + 1) % Images.length); 
    }, 6000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <PrincipalContainer>
        <div
          className="background"
          style={{ backgroundImage: `url(${Images[controleImage]})` }}
        />
        <section className="parte-principal">
          <div className="informacoes">
            <h5>Melhores ofertas personalizadas</h5>
            <h1>Queima de <br /> estoque Nike 🔥</h1>
            <p>Consequat culpa exercitation mollit nisi excepteur do <br /> do tempor laboris eiusmod irure consectetur.</p>
           <StyledNavLink to="/produtos">  
            <button>Ver ofertas</button></StyledNavLink>
          </div>
        </section>
        <div className='dots'>
          {Images.map((_, index) => (
            <CircleSmall
              key={index}
              size={12}
              className={`dot-icon${index === controleImage ? ' active' : ''}`}
              onClick={() => setControleImage(index)}
            />
          ))}
        </div>
      </PrincipalContainer>
      <ColecaoContainer>
        <section className='colecao'>
          <h5>Coleções em destaque</h5>
          <div className='imagens-colecao'>
            <img src="/collection-1.png" className='teste-imagem' alt="" />
            <img src="/collection-2.png" alt="" />
            <img src="/collection-3.png" alt="" />
          </div>
        </section>
      </ColecaoContainer>
      <ColecaoMiniatura>
        <h5>Coleções em destaque</h5>
        <MiniaturaNav>
          <Miniatura>
            <a href="#">
              <div className="icon-wrapper">
                <IoShirtOutline size={32} color="currentColor"/>
              </div>
              <h5>Camisetas</h5>
            </a>
          </Miniatura>
          <Miniatura>
            <a href="#">
              <div className="icon-wrapper">
                <PiPantsLight size={32} color="currentColor" />
              </div>
              <h5>Calças</h5>
            </a>
          </Miniatura>
          <Miniatura>
            <a href="#">
              <div className="icon-wrapper">
                <PiBaseballCapLight size={32} color="currentColor" />
              </div>
              <h5>Bonés</h5>
            </a>
          </Miniatura>
          <Miniatura>
            <a href="#">
              <div className="icon-wrapper">
                <PiHeadphonesLight size={32} color="currentColor" />
              </div>
              <h5>Headphones</h5>
            </a>
          </Miniatura>
          <Miniatura>
            <a href="#">
              <div className="icon-wrapper">
                <GiRunningShoe size={32} color="currentColor" />
              </div>
              <h5>Tênis</h5>
            </a>
          </Miniatura>
        </MiniaturaNav>
      </ColecaoMiniatura>
      <ProdutosContainer>
        <Produtos />
      </ProdutosContainer>
      <Oferta>
        <div>
          <img src="/home-icons/oferta.png" alt="" />
        </div>
        <div className="oferta-especial">
          <h5>Melhores ofertas personalizadas</h5>
          <h2>Air Jordan edição de colecionador</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio reiciendis ipsam laborum. Facilis cum corporis voluptate doloribus at iste ipsa deleniti nam! Repellendus repellat sequi, voluptatibus enim voluptatum magni?</p>
          <button><StyledNavLink to="/produtos">  Ver ofertas</StyledNavLink></button>
        </div>
      </Oferta>
    </>
  );
};

export default HomePage;