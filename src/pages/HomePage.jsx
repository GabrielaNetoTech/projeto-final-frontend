import React, { useEffect, useState } from 'react';
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import styled from "styled-components";
import { CircleSmall } from "lucide-react"; 

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
    .parte-principal{
      position: relative;
      z-index: 3;
      display: flex;
      justify-content: left;
      align-items: center;
      gap: 3rem;
      height: 100%;
      margin-left: 7rem;
    }

    .informacoes {
      & h5{
        color: #f6aa1c;
        margin-bottom: 1rem;
      } & h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
      } & button {
        background-color: #C92071;
        border-radius: 5px;
        border: none;
        width: 150px;
        height: 40px;
        font-weight: bold;
        color: white;
        font-size: 14px;
        cursor: pointer;
        margin-top: 1rem;
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
    }

    .dot-icon.active {
      color: #C92071;
    }
    
`;

const ColecaoContainer = styled.section`
  width: 100%;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .colecao h5{
    color: #474747;
    font-size: 24px;
    margin: 10px;
  }

  .imagens-colecao{
    display: flex;
    gap: 10px;
    width: 100%;
    & img {
      width: 50%;
      border-radius: 8px;
    }
  }
`;

const TesteContainer = styled.section`
    width: 100%;
    margin: 40px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
`;


const Images = [
  '/home-slide/tenis-nike-lado.png',
  '/home-slide/home-slide-2.jpeg',
  '/home-slide/home-slide-7.jpeg',
]

function Produtos() {
  return (
    <Section
      title="Produtos em alta"
      titleAlign="left"
      link={
        { text: "Ver todos →",
          href: "/produtos" }}
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
    }, 6000); // troca a cada 3 segundos

    return () => clearInterval(intervalo); // limpa o intervalo ao desmontar
    }, []);

    return ( 
      <>
      <PrincipalContainer>
        <div
          className="background"
          style={{ backgroundImage: `url(${Images[controleImage]})` }}>
        </div>
        <section className="parte-principal">
          <div className="informacoes">
            <h5>Melhores ofertas personalizadas</h5>
            <h1>Queima de <br /> stoque Nike 🔥</h1>
            <p>Consequat culpa exercitation mollit nisi exceoteur do <br /> do tempor laboris eiusmod irure consectetur.</p>
            <button>Ver ofertas</button>
          </div>
          </section>
          <div className='dots'>
              {Images.map((_, index) => (
                <CircleSmall           
                    size={12}
                    className={`dot-icon ${index === controleImage ? 'active' : "" }`}
                    onClick={() => setControleImage(index)}
                />
              ))}
          </div>
      </PrincipalContainer>
      <ColecaoContainer>
        <section className='colecao'>
          <h5>Coleções em destaque</h5>
          <div className='imagens-colecao'>
            <img src="/collection-1.png" alt="" />
            <img src="/collection-2.png" alt="" />
            <img src="/collection-3.png" alt="" />
          </div>
        </section>
      </ColecaoContainer>
      
      <TesteContainer>
        <Produtos />
      </TesteContainer>
        
      </>
    );
}
 
export default HomePage;
