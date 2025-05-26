import styled from "styled-components";

const CardContainer = styled.div`
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

const ProductCard = ({image, name, price, priceDiscount, onClick}) => {

     const formatarPreco = (valor) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(valor);
  };

    return ( 
        <CardContainer className="card" onClick={onClick}>
            <div className="cardimagem">
                <img src={image} alt={name}/>
            </div>
            <div className="informacoes">
                <h5>{name}</h5>
                <div className="precos">
                    <h6>{formatarPreco(price)}</h6>
                    <h4>{formatarPreco(priceDiscount)}</h4>
                </div>
            </div>   
        </CardContainer>
    );
}
 
export default ProductCard;