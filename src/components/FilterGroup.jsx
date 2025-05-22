import styled from "styled-components";

const Titulo = styled.h4`
  font-size: 14px;
  color: #474747;
  margin-bottom: 12px;
`;

const ItensContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #474747;

  input {
    width: 22px;
    height: 22px;
    accent-color: #C92071;
  }
`;

const FilterGroup = ({ title, inputType = "checkbox", options = [] }) => {
  return (
    <div style={{ marginBottom: "24px" }}>
        <Titulo>
            <h4>{title}</h4>
        </Titulo>
        {options.map((opt, index) => (
        <ItensContainer key={index}>
            <input
                type={inputType}
                value={opt.value ?? opt.text}
                name={title.replace(/\s+/g, "-").toLowerCase()}
            />
        {opt.text}
        </ItensContainer>
      ))}
    </div>
  );
};

export default FilterGroup;
