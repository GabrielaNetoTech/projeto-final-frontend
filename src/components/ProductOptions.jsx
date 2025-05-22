import React, { useState } from "react";
import styled, { css } from "styled-components";


const OptionWrapper = styled.div`
  display: flex;
  gap: 8px;         
  flex-wrap: wrap;   
`;

// Cada item individual de opção
const ItemOpcao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid #D3D3D3;

 
  ${({ shape, radius }) => {
    if (shape === "circle") {
      return css`
          width: 31px;
          height: 31px;
          border-radius: 50%;
        `;
    } else {
      return css`
        width: auto;
          min-width: 40px;
          height: 40px;
          padding: 0 12px;
          border-radius: ${radius};
        `;
    }
  }};

   ${({ type, option }) => type === "color" &&
    css`
      background-color: ${option};
    `};


  ${({ selected, type }) => selected && type === "text" 
    ? css`
        background-color: #C92071;
        border-color: #C92071;
        color: white;
      `
    : selected && type === "color"
    ? css`
        border: 1px solid #C92071
      `
    :""};
  
`;

// Componente principal
const ProductOptions = ({
  options = [],     // lista das opções (ex: ["39", "40", "41"] ou ["#000", "#FFF"])
  shape = "square", // "square" ou "circle"
  type = "text",    // "text" ou "color"
  radius = "4px",    // valor do border-radius para squares
}) => {
  const [selectedOption, setSelectedOption] = useState(null); // controla o valor selecionado

  return (
      <OptionWrapper>
      {options.map((option, index) => (
        <ItemOpcao
          key={index}
          shape={shape}
          type={type}
          radius={radius}
          option={option}
          selected={selectedOption === option}
          onClick={() => setSelectedOption(option)}
        >
          {type === "text" ? option : ""}
        </ItemOpcao>
      ))}
    </OptionWrapper>
  );
};

export default ProductOptions;
