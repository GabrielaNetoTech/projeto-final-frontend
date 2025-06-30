import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produtos from "../pages/ProductListingPage";
import MeusPedidos from "../pages/MeusPedidosPage";
import HomePage from "../pages/HomePage";
import PageLayout from "../layout/PageLayout";
import NotFound from "../components/NotFound";
import Product from "../components/Produto";
import MeuCarrinho from "../pages/meucarrinho";
import FormsCadastro from "../pages/FormsCadastro";
import LoginPage from "../pages/Login";
import AuthLayout from "../layout/AuthLayout";
import UserLayout from "../layout/UserLayout";
import MinhasInformacoesPage from "../pages/MinhasInformacoesPage";
import FinalizarCompras from "../pages/FinalizarCompraPage";
import ProtectedRoute from "../components/ProtectedRoute";

const nomeUsuario = "Gabriela";

const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="produto/:id" element={<Product />} />
          <Route path="produtos/meucarrinho" element={<MeuCarrinho />} />
        </Route>

        {/* Rotas de login/cadastro */}
        <Route element={<AuthLayout />}>
          <Route path="/cadastro" element={<FormsCadastro />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* Rotas privadas/autenticadas */}
        <Route
          element={
            <ProtectedRoute>
              <UserLayout nomeUsuario={nomeUsuario} />
            </ProtectedRoute>
          }
        >
          <Route path="/meuspedidos" element={<MeusPedidos />} />
          <Route path="/meuspedidos/minhasinformacoes" element={<MinhasInformacoesPage />} />
          <Route path="/finalizarcompras" element={<FinalizarCompras />} />
        </Route>

        {/* Rota NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;