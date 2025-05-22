import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
    return ( 
        <div>
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    );
};
 
export default PageLayout;