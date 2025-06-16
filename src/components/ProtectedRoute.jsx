import React from "react";
import { Navigate } from "react-router-dom";

// Componente que protege rotas que só devem ser acessadas por usuários autenticados
const ProtectedRoute = ({ isAuthenticated, children }) => {
  // Se não estiver autenticado, redireciona para a página de login
  if (!isAuthenticated) {
    // "replace" faz com que o histórico de navegação não guarde a rota protegida
    return <Navigate to="/login" replace />;
  }
  // Se estiver autenticado, renderiza normalmente os componentes filhos (children)
  return children;
};

export default ProtectedRoute;