// Layout para páginas protegidas de usuário logado (painel, pedidos, etc)

import HeaderLogado from "../components/HeaderLogado";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

// nomeUsuario deve vir de um contexto de autenticação normalmente
const UserLayout = ({ nomeUsuario }) => (
  <div>
    {/* Header especial para usuário logado (mostra nome do usuário) */}
    <HeaderLogado nomeUsuario={nomeUsuario} />
    {/* Outlet: renderiza o conteúdo da rota protegida */}
    <Outlet />
    {/* Rodapé padrão */}
    <Footer />
  </div>
);

export default UserLayout;