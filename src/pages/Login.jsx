import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styled from "styled-components";
import gmailSvg from "../assets/gmail-svgrepo-com.svg";
import facebookSvg from "../assets/facebook-1-svgrepo-com.svg";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #bbbbf4 0%, #dadafb 100%);
  padding: 24px;
`;

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

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

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

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  box-sizing: border-box;
`;

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

const ForgotPassword = styled.div`
  text-align: right;
  margin-bottom: 0;
  a {
    color: #1976d2;
    font-size: 0.95rem;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const SocialRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

const SocialText = styled.span`
  color: #888;
  font-size: 1rem;
  white-space: nowrap;
`;

const SocialLogin = styled.div`
  display: flex;
  gap: 16px;
`;

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

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !senha) {
      setErro("Preencha email e senha.");
      return;
    }
    const res = login(email, senha);
    if (res.success) {
      navigate("/meuspedidos"); // <-- Redireciona para Meus Pedidos!
    } else {
      setErro(res.message);
    }
  };

  return (
    <Container>
      <Box>
        <Title>Acesse sua conta</Title>
        <Subtitle>
          Novo cliente? Então registre-se <Link to="/cadastro">aqui</Link>.
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
          <ForgotPassword>
            <Link to="/recuperarsenha">Esqueci minha senha</Link>
          </ForgotPassword>
          {erro && <div style={{ color: "red", marginBottom: "8px" }}>{erro}</div>}
          <Button type="submit">Acessar conta</Button>
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

export default LoginPage;