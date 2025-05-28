import styled from "styled-components";
import ProductListing from "../components/ProductListing";
import { useState } from "react";
import FilterGroup from "../components/FilterGroup";
import Section from "../components/Section";

const BackgroundWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #F8F9FE;
  overflow-x: hidden;
`;

const PageLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  box-sizing: border-box;
  background: transparent;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
`;

const BarraLateral = styled.aside`
  width: 308px;
  min-width: 220px;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 1000px) {
    width: 100%;
    min-width: 0;
    margin-right: 0;
  }
`;

const OrdemContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  /* Remove o overflow e ajuste display */
  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 1px solid #eee;
    padding: 10px 16px;
    width: 100%;
    background: #F8F9FE;
    border-radius: 6px;
    box-sizing: border-box;
  }
  label {
    font-weight: bold;
    font-size: 16px;
    white-space: nowrap;
  }
select {
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  background-color: #F8F9FE;
  color: #474747;
  font-size: 16px;
  box-sizing: border-box;
  outline: none;
  min-width: 120px;
  cursor: pointer;
  /* NÃO adicione appearance: none aqui! */
}
  /* Força o fundo das opções igual ao select (depende do browser, mas ajuda) */
  select option {
    background: #F8F9FE;
    color: #474747;
  }
`;

const FiltroContainer = styled.aside`
  width: 100%;
  background-color: white;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 6px;
`;

const TituloFiltro = styled.h3`
  font-size: 16px;
  color: #474747;
  margin-bottom: 8px;
`;

const Linha = styled.hr`
  margin-top: 10px;
`;

const MainContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const ProductListingPage = () => {
  const [ordem, setOrdem] = useState("menor");

  return ( 
    <BackgroundWrapper>
      <PageLayout>
        <BarraLateral>
          <OrdemContainer>
            <div>
              <label htmlFor="selecionarOrdem">Ordenar por:</label>
              <select
                id="selecionarOrdem"
                value={ordem}
                onChange={(e) => setOrdem(e.target.value)}
              >
                <option value="menor">Menor preço</option>
                <option value="maior">Maior preço</option>
              </select> 
            </div>
          </OrdemContainer>
          <FiltroContainer>
            <TituloFiltro>Filtrar por</TituloFiltro>
            <Linha />
            <FilterGroup 
              title="Marka" 
              inputType="checkbox" 
              options={[
                { text: "Adidas" },
                { text: "Calenciaga" },
                { text: "K-Swiss" },
                { text: "Nike" },
                { text: "Puma" }
              ]}  
            />
            <FilterGroup 
              title="Categoria"
              inputType="checkbox" 
              options= {[
                { text: "Esporte e lazer" },
                { text: "Casual" },
                { text: "Utilitário" },
                { text: "Corrida" }
              ]}  
            />
            <FilterGroup 
              title="Gênero" 
              inputType="checkbox" 
              options={[
                { text: "Masculino" },
                { text: "Feminino" },
                { text: "Unisex" }
              ]}  
            />
            <FilterGroup 
              title="Condição" 
              inputType="radio" 
              options={[
                { text: "Novo" },
                { text: "Usado" }
              ]}  
            />
          </FiltroContainer> 
        </BarraLateral>
        <MainContent>
          <Section title="Produtos em alta" titleAlign="left" />
          <ProductListing order={ordem} />
        </MainContent>
      </PageLayout>
    </BackgroundWrapper>
  );
}
export default ProductListingPage;