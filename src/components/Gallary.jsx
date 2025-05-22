import { useState } from "react";
import styled from "styled-components";
import arrowLeft from '../assets/icons/arrow-left.svg';
import arrowRight from '../assets/icons/arrow-right.svg';
import GalleryMini from "./GalleryMini";

const Gallary = ({ images, showThumb }) => {

  const SectionContainer = styled.section `
    position: relative;
    width: 100%;
    margin: 0 auto;

  .imagem {
    width: 700px;
    height: 570px;
    display: block;
    border-radius: 4px;
  }

  .botao {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    cursor: pointer;
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
        gap: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        }
        

        img{
          border-radius: 8px;
          width: 15%;
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
    </SectionContainer>
    {showThumb && (
    <MiniaturasContainer>
      <GalleryMini thumbs={MiniFotos} onSelect={setAtualPag} />
    </MiniaturasContainer>
    )};
   </>
  );
}
 
export default Gallary;




