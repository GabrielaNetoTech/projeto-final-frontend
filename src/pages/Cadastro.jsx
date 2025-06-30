import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styled from "styled-components";
import gmailSvg from "../assets/gmail-svgrepo-com.svg";
import facebookSvg from "../assets/facebook-1-svgrepo-com.svg";

// Container centralizado com fundo gradiente
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #bbbbf4 0%, #dadafb 100%);
  padding: 24px;
`;

// Box do formulário
const Box = styled.div`
  background: #fff;
  padding: 40px 32px 32px 32px;
  border-radius: 12px;
  box-shadow: 0 2px 24px rgba(0, 0, 0, 0.07);
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 1;
`;

// Título principal
const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

// Subtítulo
const Subtitle = styled.h5`
  margin: 0 0 8px 0;
  color: #555;
  font-weight: 400;
  text-align: center;
  a {
    color: #1976d2;
    text-decoration: underline;
    cursor: pointer;
  }
`;

// Formulário alinhado verticalmente
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

// Label alinhada
const Label = styled.label`
  font-weight: 600;
  margin-bottom: 4px;
`;

// Input do email
const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  margin-bottom: 0;
  box-sizing: border-box;
`;

// Botão principal, igual largura do input
const Button = styled.button`
  width: 100%;
  background: #C92071;
  color: #fff;
  border: none;
  padding: 12px 0;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 4px;
  transition: background 0.2s;
  &:hover {
    background: #a3185d;
  }
`;

// Linha de login social
const SocialRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

// Texto do login social
const SocialText = styled.span`
  color: #888;
  font-size: 1rem;
  white-space: nowrap;
`;

// Div para os ícones sociais
const SocialLogin = styled.div`
  display: flex;
  gap: 16px;
`;

// Wrapper do ícone social
const IconWrapper = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: box-shadow .2s;
  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.18);
    background: #fff;
  }
  img {
    width: 24px;
    height: 24px;
  }
`;

// Imagem do tênis (desaparece em telas menores)
const SneakerImage = styled.img`
  height: 70vh;
  min-height: 400px;
  max-height: 90vh;
  width: auto;
  object-fit: cover;
  margin-left: 48px;
  border-radius: 16px;
  @media (max-width: 900px) {
    display: none;
  }
`;

const CadastroPage = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !senha) {
      setErro("Preencha email e senha.");
      return;
    }
    const res = register(email, senha);
    if (res.success) {
      navigate("/painel");
    } else {
      setErro(res.message);
    }
  };

  return (
    <Container>
      <Box>
        <Title>Crie sua conta</Title>
        <Subtitle>
          Já possui uma conta? Entre <Link to="/login">aqui</Link>.
        </Subtitle>
        <StyledForm onSubmit={handleSubmit}>
          <Label htmlFor="email">Email*</Label>
          <Input
            id="email"
            type="email"
            placeholder="Insira seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Label htmlFor="senha">Senha*</Label>
          <Input
            id="senha"
            type="password"
            placeholder="Insira sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          {erro && <div style={{ color: "red", marginBottom: "8px" }}>{erro}</div>}
          <Button type="submit">Criar Conta</Button>
        </StyledForm>
        <SocialRow>
          <SocialText>ou faça login com</SocialText>
          <SocialLogin>
            <a href="#" title="Login com Gmail" aria-label="Login com Gmail">
              <IconWrapper>
                <img src={gmailSvg} alt="Gmail" />
              </IconWrapper>
            </a>
            <a href="#" title="Login com Facebook" aria-label="Login com Facebook">
              <IconWrapper>
                <img src={facebookSvg} alt="Facebook" />
              </IconWrapper>
            </a>
          </SocialLogin>
        </SocialRow>
      </Box>
      <SneakerImage src="shoes.png" alt="Tênis"/>
    </Container>
  );
};

export default CadastroPage;