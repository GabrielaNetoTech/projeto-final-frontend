import Gallary from "../components/Gallary";
import BuyBox from "../components/BuyBox";
import styled from "styled-components";

const PaginaProdutos = styled.body`
    
    
    .pagina{
        display: flex;
    }
`;

const Teste = () => {
    return ( 
        <>
        <Gallary
        showThumb={true}
        images={[
            {"src": '/images/1.png'},
            {"src": '/images/2.png'},
            {"src": '/images/3.png'},
            {"src": '/images/4.png'},
            {"src": '/images/5.png'}
            ]}
        />  
       
        </>
     )
}
 
export default Teste;