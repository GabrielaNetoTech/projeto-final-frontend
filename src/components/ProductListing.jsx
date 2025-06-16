// Exibe uma grade de cards de produto. Ao clicar, navega para página do produto.

import styled from "styled-components";
import ProductCard from "./ProductCard";
import { useNavigate } from 'react-router-dom';

// Grid responsivo de produtos
const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  background-color: #F8F9FE;
  width: 100%;
  box-sizing: border-box;
  justify-items: center;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .cardimagem {
    background-color: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
  .card {
    padding: 1rem;
    text-align: center;
  }
  img {
    width: 100%;
    max-width: 292px;
    height: auto;
    max-height: 321px;
    object-fit: contain;
    display: block;
    margin: 0 auto;
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

// Mock de produtos para exibir (simula 20 produtos)
const valorReal = 100 * 2;
const products = new Array(20).fill(0).map((_, i) => ({
  id: i + 1,
  image: "/tenis.png",
  name: `K-Swiss V8 - Masculino`,
  price: valorReal,
  priceDiscount: valorReal * 0.5
}));

const ProductListing = ({ limit }) => {
  const navigate = useNavigate();

  // Mostra apenas até o limite informado, se houver
  let displayedProducts = limit ? products.slice(0, limit) : products;

  // Ao clicar no produto, navega para página dele
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