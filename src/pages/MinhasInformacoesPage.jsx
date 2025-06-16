import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

// CORES
const pink = "#C92071";
const lightBg = "#faf8fd";
const dark = "#1d1d1d";
const white = "#fff";
const border = "#e9e6f0";

// LAYOUT GERAL
const PageBg = styled.div`
  background: ${lightBg};
  min-height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 36px;
  max-width: 1200px;
  margin: 40px auto 0 auto;
  padding: 34px;
`;

// SIDEBAR
const Sidebar = styled.aside`
  background: ${white};
  border-radius: 6px;
  min-width: 230px;
  max-width: 230px;
  padding: 28px 0 28px 0;
  box-shadow: none;
  border: 1px solid ${border};
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const SidebarItem = styled(Link)`
  display: block;
  padding: 14px 32px;
  color: ${({ $active }) => ($active ? pink : dark)};
  font-weight: ${({ $active }) => ($active ? "700" : "500")};
  text-decoration: none;
  cursor: pointer;
  border-left: ${({ $active }) => ($active ? `4px solid ${pink}` : "4px solid transparent")};
  background: ${({ $active }) => ($active ? "#fbe3f2" : "none")};
  transition: background 0.18s, color 0.18s, font-weight 0.18s;
  &:hover {
    background: #fbe3f2;
    color: ${pink};
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${border};
  }
`;

const InfoContainer = styled.section`
  background: ${white};
  border-radius: 6px;
  flex: 1;
  padding: 28px 0 32px 0;
  border: 1px solid ${border};
  min-width: 410px;
  max-width: 800px;
  box-sizing: border-box;
  position: relative;
  @media (max-width: 900px) {
    padding: 24px 8px 22px 8px;
    min-width: unset;
    max-width: 100%;
  }
`;

// HEADER E BOTÃO EDITAR
const InfoHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 32px 10px 32px;
  border-bottom: 1px solid ${border};
`;

const InfoTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: #222;
  margin: 0;
`;

const EditLink = styled(Link)`
  font-size: 1rem;
  color: ${pink};
  font-weight: 500;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 2px;
  transition: color 0.2s;
  &:hover {
    color: #a3185d;
  }
`;

// BLOCO DE INFORMAÇÕES
const InfoBlock = styled.div`
  margin-bottom: 36px;
  padding: 0 32px;
`;

const InfoSectionTitle = styled.h5`
  font-size: 1.04rem;
  font-weight: 700;
  color: #1d1d1d;
  margin: 0 0 17px 0;
`;

const InfoDivider = styled.hr`
  border: none;
  border-top: 1px solid #e9e6f0;
  margin: 0 0 27px 0;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  font-size: 1.04rem;
`;

const InfoLabel = styled.span`
  color: #888;
  font-weight: 400;
  min-width: 95px;
  margin-right: 2px;
`;

const InfoValue = styled.span`
  color: #222;
  font-weight: 500;
  margin-left: 6px;
  letter-spacing: 0.01em;
  &.bold {
    font-weight: 700;
    color: #111;
    letter-spacing: 0.03em;
  }
`;

const InfoValueCpf = styled(InfoValue)`
  font-weight: 700;
  color: #111;
  letter-spacing: 0.03em;
`;

const InfoValueCidade = styled(InfoValue)`
  font-weight: 700;
  color: #111;
  margin-left: 6px;
`;

// COMPONENTE PRINCIPAL
const MinhasInformacoesPage = () => {
  const location = useLocation();
  const path = location.pathname;

  // Dados de exemplo, pode vir do contexto/autenticação/api
  const info = {
    nome: "Francisco Antonio Pereira",
    cpf: "123485913-35",
    email: "francisco@gmail.com",
    celular: "(85) 5555-5555",
    endereco: "Rua João Pessoa, 333",
    bairro: "Centro",
    cidade: "Fortaleza, Ceará",
    cep: "433-8800"
  };

  return (
    <PageBg>
      <MainContent>
        {/* Sidebar */}
        <Sidebar>
          <SidebarItem to="/meuperfil" $active={path === "/meuperfil"}>Meu Perfil</SidebarItem>
          <SidebarItem to="/meuspedidos" $active={path === "/meuspedidos"}>Meus Pedidos</SidebarItem>
          <SidebarItem to="/meuspedidos/minhasinformacoes" $active={path === "/meuspedidos/minhasinformacoes"}>Minhas Informações</SidebarItem>
          <SidebarItem to="/metodospagamento" $active={path === "/metodospagamento"}>Métodos de Pagamento</SidebarItem>
        </Sidebar>
        {/* Conteúdo das informações */}
        <InfoContainer>
          <InfoHeaderRow>
            <InfoTitle>Minhas Informações</InfoTitle>
            <EditLink to="/editar-informacoes">Editar</EditLink>
          </InfoHeaderRow>
          <InfoDivider />

          {/* Informações Pessoais */}
          <InfoBlock>
            <InfoSectionTitle>Informações Pessoais</InfoSectionTitle>
            <InfoRow>
              <InfoLabel>Nome:</InfoLabel>
              <InfoValue>{info.nome}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>CPF:</InfoLabel>
              <InfoValueCpf>{info.cpf}</InfoValueCpf>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Email</InfoLabel>
              <InfoValue>{info.email}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Celular</InfoLabel>
              <InfoValue>{info.celular}</InfoValue>
            </InfoRow>
          </InfoBlock>

          <InfoDivider />

          {/* Informações de Entrega */}
          <InfoBlock>
            <InfoSectionTitle>Informações de Entrega</InfoSectionTitle>
            <InfoRow>
              <InfoLabel>Endereço:</InfoLabel>
              <InfoValue>{info.endereco}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Bairro:</InfoLabel>
              <InfoValue>{info.bairro}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Cidade:</InfoLabel>
              <InfoValueCidade>{info.cidade}</InfoValueCidade>
            </InfoRow>
            <InfoRow>
              <InfoLabel>CEP:</InfoLabel>
              <InfoValueCpf>{info.cep}</InfoValueCpf>
            </InfoRow>
          </InfoBlock>
        </InfoContainer>
      </MainContent>
    </PageBg>
  );
};

export default MinhasInformacoesPage;