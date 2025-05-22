import styled from "styled-components";
import ProductListing from "../components/ProductListing";
import { useState } from "react";
import FilterGroup from "../components/FilterGroup";
import Section from "../components/Section";


const PageLayout = styled.div`
  display: flex;
  padding: 2rem;
  background-color: #F8F9FE;
`;

const BarraLateral = styled.aside`
  width: 308px;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const OrdemContainer = styled.aside`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  width: 100%;
  div{
    display: flex;
    justify-content: space-around;
    border: 1px solid black;
    padding: 10px;
    margin-left: auto;
    width: 100%;
    & label{
        font-weight: bold;
        font-size: 16px;
    } & select {
        border: none;
        border-radius: 4px;
        padding-right: 7rem;
        background-color: none;
        font-size: 16px;
        margin-right: -10px;
    } 
  } 
`;

const FiltroContainer = styled.aside`
  width: 308px;
  background-color: white;
  padding: 16px;
`;

const TituloFiltro = styled.h3`
  font-size: 16px;
  color: #474747;
  margin-bottom: 8px;
`;

const Linha = styled.hr`
    margin-top: 10px;
`;

const CardContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    background-color: #F8F9FE;
    margin: 0px;
    padding: 0px 20px;
    border: 2px solid green;

    .cardimagem {
        background-color: white;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }

    .card {
        border: 2px solid yellow;
        padding: 1rem;
        text-align: center;
    }

    img {
        border: 2px solid red;
    }

    .informacoes{
        margin-top: 20px;
    }

    h5{
        font-size: 20px;
        text-align: left;
        color:  #474747;
    }

    .precos {
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 0.5rem; 
    }

    h5, h4, h6{
        margin: 2px;
        padding: 1px;
    }

    h6{
        color: #8F8F8F;
        text-decoration: line-through;
        font-size: 24px;
    }

    h4{
        color: #1F1F1F;
        font-size: 24px;
    }
`;



const ProductListingPage = () => {

     const [ordem, setOrdem] = useState("menor");

    return ( 
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
                            <option             value="menor">Menor preço</option>
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
                    title="Gênero" 
                    inputType="radio" 
                    options={[
                        { text: "Novo" },
                        { text: "Usado" }
                    ]}  
                />
            </FiltroContainer> 
            </BarraLateral>
            
            <CardContainer>
                <Section />
                <ProductListing order={ordem} />
            </CardContainer>
        </PageLayout>
    );
}
 
export default ProductListingPage;