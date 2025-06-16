// Importa styled-components para estilização
import styled from "styled-components";

// Container estilizado para cada seção do footer (ou outras infos)
const SectionContainer = styled.div`
    h4 { margin-bottom: 1rem; }
    a {
        text-decoration: none;
        color: #ffffff; 
        transition: color 0.3s ease;
        &:hover { color: #C92071; }
    }
    li {
        list-style: none;
        line-height: 2em;
    }
`;

// Componente InfoSection: recebe título e lista de infos/links
const InfoSection = ({ title, informations }) => {
    return ( 
        <SectionContainer>
          <div className="informacoes">
            <h4>{title}</h4>
            <ul className="ul-infos">
              {/* Renderiza cada item como link */}
              {informations.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </SectionContainer>
    );
};
 
export default InfoSection;