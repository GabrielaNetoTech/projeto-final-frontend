import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produtos from "../pages/ProductListingPage";
import Categorias from "../pages/Categorias";
import MeusPedidos from "../pages/ProductViewPage";
import HomePage from "../pages/HomePage"
import PageLayout from "../layout/PageLayout";
import NotFound from "../components/NotFound";
import Product from "../components/Produto";


const Paths = () => {
    return ( 
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout/>}>
                    <Route index element={ <HomePage /> } />
                    <Route path="/produtos" element={<Produtos />} />
                    <Route path="/produto/:id" element={<Product />} />
                    <Route path="/categorias" element={<Categorias />} />
                    <Route path="/meuspedidos" element={<MeusPedidos />} />
                </Route>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
        </>

    );
}
 
export default Paths;