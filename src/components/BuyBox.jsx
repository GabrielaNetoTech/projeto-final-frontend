import ProductOptions from "./ProductOptions"

const BuyBox = ({ produto }) => {
  if (!produto) {
    return <div>Carregando opções...</div>
  }

  return (
    <>
      <h5>Tamanho</h5>
      <ProductOptions
        options={produto.tamanhos || ["39", "40", "41", "42", "43"]}
        shape="square"
        radius="8px"
        type="text"
      />

      <h5>Cor</h5>
      <ProductOptions
        options={produto.cores || ["#E2E3FF", "#FFE8BC", "#FFC0BC", "#DEC699", "#E8DFCF"]}
        shape="circle"
        type="color"
      />
    </>
  )
}

export default BuyBox
