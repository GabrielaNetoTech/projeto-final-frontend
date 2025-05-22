
const ProductCard = ({image, name, price, priceDiscount}) => {

     const formatarPreco = (valor) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(valor);
  };

    return ( 
        <div className="card">
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
        </div>
    );
}
 
export default ProductCard;