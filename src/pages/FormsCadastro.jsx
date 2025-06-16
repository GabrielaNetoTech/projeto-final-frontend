import React, { useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Cores do layout
const bgColor = "#faf8fd";
const white = "#fff";
const primary = "#C92071";
const border = "#e9e6f0";
const inputBg = "#faf8fc";
const text = "#222";
const label = "#1d1d1d";
const subtitle = "#363636";
const checkbox = "#C92071";

const PageWrapper = styled.div`
  background: ${bgColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  background: ${white};
  border-radius: 6px;
  padding: 36px 32px 24px 32px;
  width: 100%;
  max-width: 600px;
  margin-bottom: 28px;
  @media (max-width: 700px) {
    padding: 20px 10px 16px 10px;
  }
`;

const Title = styled.h1`
  color: ${text};
  font-size: 1.8rem;
  margin-bottom: 15px;
  margin-top: 65px;
  width: 100%;
  max-width: 650px;
`;

const Section = styled.div`
  margin-bottom: 4px;
`;

const SectionTitle = styled.h5`
  color: ${subtitle};
  font-weight: 600;
  font-size: 1.05rem;
  margin: 0 0 12px 0;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${border};
  margin: 0 0 22px 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  color: ${label};
  font-weight: bold;
  font-size: 0.8rem;
`;

const Input = styled.input`
  width: 95%;
  border: 1px solid ${border};
  background: ${inputBg};
  padding: 14px;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;
  &::placeholder {
    color: #b0aeb8;
  }
  &:focus {
    border-color: ${primary};
    background: #fff;
  }
`;

const SecondFormContainer = styled(FormContainer)`
  margin-top: 0;
`;

const FooterContainer = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 0 20px 79px 20px;
  box-sizing: border-box;
  @media (max-width: 700px) {
    padding: 0 10px 16px 10px;
  }
`;

const ConsentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 20px 0 28px 0;
  width: 100%;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  accent-color: ${checkbox};
  width: 18px;
  height: 18px;
  margin-top: 2px;
  flex-shrink: 0;
`;

const ConsentText = styled.h6`
  margin: 0;
  color: #363636;
  font-size: 0.96rem;
  font-weight: 400;
  line-height: 1.5;
  flex: 1;
`;

const Button = styled.button`
  width: 100%;
  background: ${primary};
  color: #fff;
  border: none;
  padding: 14px 0;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1.09rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #a3185d;
  }
`;



const FormsCadastro = () => {
  const formPessoalRef = useRef(null);
  const formEntregaRef = useRef(null);
  const navigate = useNavigate();

  // Validação dos dois forms ao clicar em criar conta
  const handleCriarConta = (e) => {
    e.preventDefault();

    const isPessoalValid = formPessoalRef.current.reportValidity();
    const isEntregaValid = formEntregaRef.current.reportValidity();

    if (!isPessoalValid || !isEntregaValid) {
      // O navegador já mostra os alerts dos campos obrigatórios
      return;
    }

    // Aqui vai a integração com o backend no futuro
    alert("Conta criada com sucesso!");
    navigate("/login"); // Ou "/login", ou "/" se preferir.
  };

  return (
    <PageWrapper>
      <Title>Criar Conta</Title>
      <FormContainer>
        <Section>
          <SectionTitle>Informações Pessoais</SectionTitle>
          <Divider />
          <StyledForm ref={formPessoalRef}>
            <FormField>
              <Label htmlFor="nome">Nome Completo *</Label>
              <Input id="nome" name="nome" type="text" placeholder="Insira seu nome" required />
            </FormField>
            <FormField>
              <Label htmlFor="cpf">CPF *</Label>
              <Input id="cpf" name="cpf" type="number" inputMode="numeric" placeholder="Insira seu CPF" required />
            </FormField>
            <FormField>
              <Label htmlFor="email">E-mail *</Label>
              <Input id="email" name="email" type="email" placeholder="Insira seu email" required />
            </FormField>
            <FormField>
              <Label htmlFor="celular">Celular *</Label>
              <Input id="celular" name="celular" type="number" inputMode="numeric" placeholder="Insira seu celular" required />
            </FormField>
          </StyledForm>
        </Section>
      </FormContainer>
      <SecondFormContainer>
        <Section>
          <SectionTitle>Informações de Entrega</SectionTitle>
          <Divider />
          <StyledForm ref={formEntregaRef}>
            <FormField>
              <Label htmlFor="endereco">Endereço *</Label>
              <Input id="endereco" name="endereco" type="text" placeholder="Insira seu endereço" required />
            </FormField>
            <FormField>
              <Label htmlFor="bairro">Bairro *</Label>
              <Input id="bairro" name="bairro" type="text" placeholder="Insira seu bairro" required />
            </FormField>
            <FormField>
              <Label htmlFor="cidade">Cidade *</Label>
              <Input id="cidade" name="cidade" type="text" placeholder="Insira sua cidade" required />
            </FormField>
            <FormField>
              <Label htmlFor="cep">CEP *</Label>
              <Input id="cep" name="cep" type="number" placeholder="Insira seu CEP" required />
            </FormField>
            <FormField>
              <Label htmlFor="numero">Número *</Label>
              <Input id="numero" name="numero" type="number" inputMode="numeric" placeholder="Insira o número da residência" required />
            </FormField>
            <FormField>
              <Label htmlFor="complemento">Complemento</Label>
              <Input id="complemento" name="complemento" type="text" placeholder="Insira complemento" />
            </FormField>
          </StyledForm>
        </Section>
      </SecondFormContainer>
      <FooterContainer>
        <ConsentWrapper>
          <Checkbox id="consent" name="consent" />
          <ConsentText>
            Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.
          </ConsentText>
        </ConsentWrapper>
        <Button type="button" onClick={handleCriarConta}>Criar Conta</Button>
      </FooterContainer>
    </PageWrapper>
  );
};

export default FormsCadastro;