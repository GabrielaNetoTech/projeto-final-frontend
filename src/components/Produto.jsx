//Página de exibição de um produto individual.

//Busca o produto pelo ID da URL.

//Mostra galeria de imagens, detalhes e a caixa de compra (BuyBox).

//Ao final, mostra produtos relacionados.

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductById } from '../acoes/products'; // ajuste o caminho conforme necessário
import styled from "styled-components";
import BuyBox from "../components/BuyBox";
import Gallary from "../components/Gallary";
import ProductDetails from "../components/ProductDetails";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
import variacoes from "../api/products-variation.json"

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

// Componente de produtos relacionados
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
  const [, setSelecoes] = useState({ tamanho: null, cor: null }); //// estado reservado para uso no BuyBox

  // // Executa a busca do produto quando o ID muda
  useEffect(() => {
    const buscarProduto = async () => {
      setLoading(true);

      try {
        const produtoAPI = await getProductById(id);

        // Imagens mockadas (ajuste os caminhos conforme suas imagens reais) //    // Simulação de imagens (mock)
        const imagensProduto = [
          { src: '/images/1.png' },
          { src: '/images/2.png' },
          { src: '/images/3.png' },
          { src: '/images/4.png' },
          { src: '/images/5.png' }
        ];

        // Montar o produto final
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

  // Renderizações condicionais
  if (loading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Carregando...</div>;
  }

  if (!produto) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Produto não encontrado</div>;
  }

  return (
    <>
      <ContainerPai>
        <div>
          <Gallary showThumb={true} images={produto.imagens} />
        </div>
        <div>
          <ProductDetails produto={produto}>
            <BuyBox produto={produto} onSelectionChange={setSelecoes} />
          </ProductDetails>

        </div>
      </ContainerPai>
      <Produtos>
        <ProdutosRelacionado />
      </Produtos>
    </>
  );
};

export default Product;
