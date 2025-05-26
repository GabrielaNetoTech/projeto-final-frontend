import styled from "styled-components";
import ProductCard from "./ProductCard";
import { useNavigate } from 'react-router-dom';

const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  background-color: #F8F9FE;

  .cardimagem {
    background-color: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }

  .card {
    padding: 1rem;
    text-align: center;
  }

  img {
    width: 292px;
    height: 321px;
  }

  .informacoes {
    margin-top: 20px;
  }

  h5 {
    font-size: 20px;
    text-align: left;
    color: #474747;
  }

  .precos {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 0.5rem;
  }

  h5, h4, h6 {
    margin: 2px;
    padding: 1px;
  }

  h6 {
    color: #8F8F8F;
    text-decoration: line-through;
    font-size: 24px;
  }

  h4 {
    color: #1F1F1F;
    font-size: 24px;
  }
`;

const valorReal = 100 *2; 
const products = new Array(20).fill(0).map((_, i) => ({
  id: i +1,
  image: "/tenis.png",
  name: `K-Swiss V8 - Masculino`,
  price: valorReal,
  priceDiscount: valorReal * 0.5
}));

const ProductListing = ({ limit}) => {
  const navigate = useNavigate()

  const displayedProducts = limit ? products.slice(0, limit) : products;

  const handleProductClick = (productId) => {
    navigate(`/produto/${productId}`);
  };

  return (
    <GridContainer>
      {displayedProducts.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
          onClick={() => handleProductClick(product.id)}
        />
      ))}
    </GridContainer>
  );
};

export default ProductListing;
