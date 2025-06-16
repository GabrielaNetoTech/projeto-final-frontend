// Importações de hooks, styled-components e componentes utilitários.
import { useState } from "react";
import styled from "styled-components";
import arrowLeft from '../assets/icons/arrow-left.svg';
import arrowRight from '../assets/icons/arrow-right.svg';
import GalleryMini from "./GalleryMini";

// Componente principal que exibe galeria de imagens de um produto.
// Permite navegação entre imagens e miniaturas (thumbnails).
const Gallary = ({ images, showThumb }) => {

  // Styled component para o container da galeria (inclui setas de navegação)
  const SectionContainer = styled.section`
    position: relative; /* Necessário para posicionar setas absolutas */
    width: 100%;
    max-width: 98%; /* Limita largura máxima */
    margin: 0 auto; /* Centraliza no container pai */
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
      max-width: 98%;
      margin: 0 auto;
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

  // Styled component para o container das miniaturas (mini thumbs)
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

  // Estado que controla qual imagem está sendo exibida (índice atual)
  const [atualPag, setAtualPag] = useState(0);

  // Lista de caminhos das imagens miniatura para usar nas thumbs
  // (Você pode conectar isso ao produto real se quiser variar)
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
          {/* Botão seta para a esquerda. Só aparece se não está na primeira imagem */}
          {atualPag > 0 && (
            <button onClick={() => setAtualPag(atualPag - 1)} className="botao esquerda" >
              <img src={arrowLeft} alt="seta a esquerda" />
            </button>
          )}
          
          {/* Imagem principal exibida */}
          <img src={images[atualPag].src} className="imagem" alt="" />

          {/* Botão seta para a direita. Só aparece se não está na última imagem */}
          {atualPag < images.length -1 && ( 
            <button onClick={() => setAtualPag(atualPag + 1)} className="botao direita">
              <img src={arrowRight} alt="seta a direita" />
            </button>
          )}

          {/* Miniaturas (thumbnails) abaixo da imagem principal, se showThumb for true */}
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