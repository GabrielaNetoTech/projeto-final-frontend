import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

// CORES
const pink = "#C92071";
const lightBg = "#faf8fd";
const border = "#e9e6f0";
const grayText = "#9A9A9A";
const dark = "#1d1d1d";
const white = "#fff";

// LAYOUT PRINCIPAL
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

// PEDIDOS WRAPPER
const PedidosWrapper = styled.section`
  background: ${white};
  border-radius: 6px;
  flex: 1;
  padding: 28px 0 32px 0;
  border: 1px solid ${border};
  min-width: 410px;
  max-width: 800px;
`;

const PedidosHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 32px 10px 32px;
  border-bottom: 1px solid ${border};
`;

const PedidosTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${dark};
  margin: 0;
`;

const StatusHeader = styled.span`
  color: ${grayText};
  font-size: 1.01rem;
  font-weight: 600;
`;

const ListaPedidos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;
  padding: 0 32px;
`;

// CARD PEDIDO
const PedidoCard = styled.div`
  display: flex;
  align-items: center;
  background: #f7f5fa;
  border-radius: 6px;
  padding: 14px 20px;
  gap: 20px;
  box-shadow: none;
  border: 1px solid #f0eef5;
  min-height: 74px;
`;

const PedidoImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  object-fit: cover;
  background: #f8f8f8;
  border: 1px solid #eee;
  margin-right: 8px;
`;

const PedidoInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const PedidoNum = styled.span`
  color: ${grayText};
  font-size: 0.96rem;
  font-weight: 500;
  line-height: 1.1;
`;

const PedidoTitle = styled.span`
  color: ${dark};
  font-size: 1.08rem;
  font-weight: 600;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PedidoStatus = styled.span`
  font-size: 1rem;
  font-weight: 600;
  margin-left: 12px;
  ${({ status }) =>
    status === "transito"
      ? `color: #F6AA1C;`
      : status === "cancelado"
      ? `color: #E96379;`
      : `color: #8F8F8F;`}
`;

const pedidos = [
  {
    id: "232169132",
    name: "Tênis Nike Revolution 6 Next Nature Masculino",
    status: "transito",
    statusText: "Produto em trânsito",
    img: "/images/1.png",
  },
  {
    id: "445981942",
    name: "Tênis Nike Revolution 6 Next Nature Masculino",
    status: "finalizado",
    statusText: "Finalizado",
    img: "/images/1.png",
  },
  {
    id: "445981943",
    name: "Tênis Nike Revolution 6 Next Nature Masculino",
    status: "cancelado",
    statusText: "Cancelado",
    img: "/images/1.png",
  },
  {
    id: "445981944",
    name: "Tênis Nike Revolution 6 Next Nature Masculino",
    status: "finalizado",
    statusText: "Finalizado",
    img: "/images/1.png",
  },
  {
    id: "445981945",
    name: "Tênis Nike Revolution 6 Next Nature Masculino",
    status: "finalizado",
    statusText: "Finalizado",
    img: "/images/1.png",
  },
];

const MeusPedidosPage = () => {
  const location = useLocation();
  const path = location.pathname;

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
        {/* Pedidos */}
        <PedidosWrapper>
          <PedidosHeader>
            <PedidosTitle>Meus Pedidos</PedidosTitle>
            <StatusHeader>STATUS</StatusHeader>
          </PedidosHeader>
          <ListaPedidos>
            {pedidos.map((pedido, idx) => (
              <PedidoCard key={idx}>
                <PedidoImg src={pedido.img} alt={pedido.name} />
                <PedidoInfo>
                  <PedidoNum>Pedido nº {pedido.id}</PedidoNum>
                  <PedidoTitle>{pedido.name}</PedidoTitle>
                </PedidoInfo>
                <PedidoStatus status={pedido.status}>
                  {pedido.statusText}
                </PedidoStatus>
              </PedidoCard>
            ))}
          </ListaPedidos>
        </PedidosWrapper>
      </MainContent>
    </PageBg>
  );
};

export default MeusPedidosPage;