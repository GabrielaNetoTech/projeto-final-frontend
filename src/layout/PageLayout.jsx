// Layout geral das páginas públicas do site (home, produtos, etc)

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
    return ( 
        <div>
            {/* Header principal (com navegação, login/cadastro, etc) */}
            <Header/>
            {/* Outlet: a página filha (home, produtos, etc) será renderizada aqui */}
            <Outlet />
            {/* Rodapé padrão */}
            <Footer/>
        </div>
    );
};
 
export default PageLayout;