//Esse componente permite ao usuário selecionar uma cor e um tamanho de produto.

import { useState, useEffect } from "react";
import ProductOptions from "./ProductOptions"
//useState: Hook para controlar estado local (ex: tamanho e cor selecionados).
//useEffect: Hook para executar efeitos colaterais (ex: comunicar mudanças).
//ProductOptions: Componente que renderiza opções clicáveis de tamanhos e cores.
const BuyBox = ({ produto, onSelectionChange }) => {
//: Armazena o tamanho selecionado.
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
//: Armazena a cor selecionada.
  
//Toda vez que o tamanho ou cor muda, chama a função onSelectionChange, informando ao componente pai as seleções feitas.

//Exibe mensagem enquanto o produto ainda não está carregado.
  useEffect(() => {
  if (onSelectionChange) {
      onSelectionChange({
         tamanho: selectedSize,
        cor: selectedColor
      });
    }
  }, [selectedSize, selectedColor, onSelectionChange]);

  if (!produto) {
    return <div>Carregando opções...</div>;
  }

  return (
    <>
    {/* //Mostra os tamanhos disponíveis e define qual foi selecionado. */}
      <h5>Tamanho</h5>
      <ProductOptions
        options={produto.tamanhos || ["39", "40", "41", "42", "43"]}
        shape="square"
        radius="8px"
        type="text"
        onSelect={(option) => setSelectedSize(option)} // <- CAPTURA TAMANHO
      />

{/* //Mostra as cores disponíveis e define qual foi selecionada.
 */}
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

export default BuyBox
