// Página de exibição de um produto individual

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductById } from '../acoes/products';
import styled from "styled-components";
import BuyBox from "../components/BuyBox";
import Gallary from "../components/Gallary";
import ProductDetails from "../components/ProductDetails";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
import variacoes from "../api/products-variation.json"

// Layouts principais
const ContainerPai = styled.section`
  margin: 0;
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const Produtos = styled.section`
  background-color: #F8F9FE;
`;

// Componente de produtos relacionados (mostra 4)
function ProdutosRelacionado() {
  return (
    <Section
      title="Produtos Relacionados"
      titleAlign="left"
      link={{ text: "Ver todos →", href: "/produtos" }}
    >
      <ProductListing limit={4} />
    </Section>
  );
}

const Product = () => {
  const { id } = useParams(); // Pega o ID da URL
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [, setSelecoes] = useState({ tamanho: null, cor: null }); // Estado para BuyBox

  // Busca o produto pelo ID
  useEffect(() => {
    const buscarProduto = async () => {
      setLoading(true);
      try {
        const produtoAPI = await getProductById(id);
        // Simula imagens do produto
        const imagensProduto = [
          { src: '/images/1.png' },
          { src: '/images/2.png' },
          { src: '/images/3.png' },
          { src: '/images/4.png' },
          { src: '/images/5.png' }
        ];
        // Monta produto final (adiciona imagens e variações)
        const produtoFinal = {
          ...produtoAPI,
          imagens: imagensProduto,
          variacoes: variacoes.variacoesProduto
        };
        setProduto(produtoFinal);
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
        setProduto(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      buscarProduto();
    }
  }, [id]);

  // Loading
  if (loading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Carregando...</div>;
  }

  // Produto não encontrado
  if (!produto) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Produto não encontrado</div>;
  }

  return (
    <>
    {/* Container principal do produto (layout em linha: galeria à esquerda, detalhes à direita) */}
    <ContainerPai>
      {/* Coluna da galeria de imagens */}
      <div>
        {/* Componente de galeria de imagens do produto.
            - showThumb={true}: mostra miniaturas abaixo da imagem principal.
            - images={produto.imagens}: recebe a lista de imagens do produto. */}
        <Gallary showThumb={true} images={produto.imagens} />
      </div>
      {/* Coluna dos detalhes do produto e caixa de compra */}
      <div>
        {/* Detalhes do produto (nome, preço, avaliação, descrição etc.)
            - produto={produto}: passa objeto do produto como prop.
            - Dentro de ProductDetails, é renderizado o componente BuyBox. */}
        <ProductDetails produto={produto}>
          {/* BuyBox permite selecionar tamanho/cor e informa seleção via onSelectionChange */}
          <BuyBox produto={produto} onSelectionChange={setSelecoes} />
        </ProductDetails>
      </div>
    </ContainerPai>
    {/* Sessão de produtos relacionados (abaixo dos detalhes principais) */}
    <Produtos>
      <ProdutosRelacionado />
    </Produtos>
    </>
  );
};

export default Product;