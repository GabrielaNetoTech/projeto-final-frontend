import { useState } from "react";
import styled from "styled-components";
import arrowLeft from '../assets/icons/arrow-left.svg';
import arrowRight from '../assets/icons/arrow-right.svg';
import GalleryMini from "./GalleryMini";

const Gallary = ({ images, showThumb }) => {

  const SectionContainer = styled.section`
  position: relative; /* Importante para as setas */
  width: 100%;
  max-width: 98%; /* ou o tamanho desejado */
  margin: 0 auto; /* centraliza */
  display: flex;
  justify-content: center;
  align-items: center;

  .imagem {
    width: 100%;
    height: auto;
    max-height: 570px;
    object-fit: cover;
    border-radius: 4px;
  }

  .imagens-produto{
    width: 100%;
    max-width: 98%; /* ou o tamanho desejado */
    margin: 0 auto; /* centraliza */
     object-fit: cover;
  }

  .botao {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 10;
  }

  .esquerda {
    left: 10px;
  }

  .direita {
    right: 10px;
  }
`;

  const MiniaturasContainer = styled.section`
        .mini {
        display: flex;
        flex-direction: row; 
        width: 100%;
        gap: 12px;
        margin-top: 10px;
        margin-bottom: 10px;
        }

        img{
          border-radius: 4px;
          width: 18.6%;
        }

`;


  const [atualPag, setAtualPag] = useState(0);


  const MiniFotos = [
    '/images/miniaturas/miniatura1.png',
    '/images/miniaturas/miniatura2.png',
    '/images/miniaturas/miniatura3.png',
    '/images/miniaturas/miniatura4.png',
    '/images/miniaturas/miniatura5.png',
]


  return ( 
    <>
    <SectionContainer>
      <div className="imagens-produto">
{atualPag > 0 && (
        <button onClick={() => setAtualPag(atualPag - 1)} className="botao esquerda" >
        <img src={arrowLeft} alt="seta a esquerda" />
      </button>
      )}
      
      <img src={images[atualPag].src} className="imagem" alt="" />

       {atualPag < images.length -1 && ( 
        <button onClick={() => setAtualPag(atualPag + 1)} className="botao direita">
        <img src={arrowRight} alt="seta a direita" />
      </button>
       )}
        {showThumb && (
    <MiniaturasContainer>
      <GalleryMini thumbs={MiniFotos} onSelect={setAtualPag} />
    </MiniaturasContainer>
    )}
      </div>
    </SectionContainer>
   </>
  );
}
 
export default Gallary;




