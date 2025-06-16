// Esse componente permite ao usuário selecionar uma cor e um tamanho de produto.

import { useState, useEffect } from "react";
import ProductOptions from "./ProductOptions";

// Componente principal: recebe o produto e uma função de callback
const BuyBox = ({ produto, onSelectionChange }) => {
  // Estado para armazenar o tamanho selecionado
  const [selectedSize, setSelectedSize] = useState(null);
  // Estado para armazenar a cor selecionada
  const [selectedColor, setSelectedColor] = useState(null);

  // Sempre que o tamanho ou cor mudar, chama o callback avisando ao componente pai
  useEffect(() => {
    if (onSelectionChange) {
      onSelectionChange({
        tamanho: selectedSize,
        cor: selectedColor
      });
    }
  }, [selectedSize, selectedColor, onSelectionChange]);

  // Se o produto ainda não foi carregado (undefined/null), mostra mensagem de loading
  if (!produto) {
    return <div>Carregando opções...</div>;
  }

  return (
    <>
      {/* Mostra as opções de tamanho e registra o tamanho selecionado */}
      <h5>Tamanho</h5>
      <ProductOptions
        options={produto.tamanhos || ["39", "40", "41", "42", "43"]}
        shape="square"
        radius="8px"
        type="text"
        onSelect={(option) => setSelectedSize(option)} // <- CAPTURA TAMANHO
      />

      {/* Mostra as opções de cor e registra a cor selecionada */}
      <h5>Cor</h5>
      <ProductOptions
        options={produto.cores || ["#E2E3FF", "#FFE8BC", "#FFC0BC", "#DEC699", "#E8DFCF"]}
        shape="circle"
        type="color"
        onSelect={(option) => setSelectedColor(option)} // <- CAPTURA COR
      />
    </>
  )
}

export default BuyBox;