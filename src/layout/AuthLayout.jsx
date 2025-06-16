// Layout para páginas de autenticação (login/cadastro, etc)

import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import SegundoHeader from "../components/SegundoHeader";

// Componente funcional de layout
const AuthLayout = () => (
  <div>
    {/* Header simples, geralmente só com logo */}
    <SegundoHeader />
    {/* Outlet é onde será renderizada a página filha (login, cadastro, etc) */}
    <Outlet />
    {/* Rodapé padrão */}
    <Footer />
  </div>
);

export default AuthLayout;