import ProductOptions from "../components/ProductOptions";

const  BuyBox= () => {
        return ( 
    <>
    <h5>Tamanho</h5>
    <ProductOptions
    options={["39", "40", "41", "42","43"]}
    shape="square"
    radius="8px"
    type="text"
  />  

    <h5>Cor</h5>
    <ProductOptions
    options={["#E2E3FF", "#FFE8BC", "#FFC0BC", "#DEC699","#E8DFCF"]}
    shape="circle"
    type="color"
  />  
    </>
    );
}
 
export default BuyBox;