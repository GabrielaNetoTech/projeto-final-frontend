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
import { useAuth } from "../contexts/AuthContext";


const nomeUsuario = "Gabriela";


const Paths = () => {

    const { isAuthenticated } = useAuth();      
    // Aqui você pode pegar o estado de autenticação do contexto ou de onde preferir

    return ( 
        <BrowserRouter>
            <Routes>
                {/* Rotas públicas */}
                <Route path="/" element={<PageLayout/>}>
                    <Route index element={ <HomePage /> } />
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
                  path="/meuspedidos"
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <UserLayout nomeUsuario={nomeUsuario}>
                        <MeusPedidos />
                      </UserLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/meuspedidos/minhasinformacoes"
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <UserLayout nomeUsuario={nomeUsuario}>
                        <MinhasInformacoesPage />
                      </UserLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/finalizarcompras"
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <UserLayout nomeUsuario={nomeUsuario}>
                        <FinalizarCompras />
                      </UserLayout>
                    </ProtectedRoute>
                  }
                />


                {/* Rota NotFound */}
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    );
}
 
export default Paths;