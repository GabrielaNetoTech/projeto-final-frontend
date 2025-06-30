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
  width: 440px;
  display: flex;
  flex-direction: column;
  gap: 18px;
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
  gap: 10px;
`;

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 2px;
`;

const InputRow = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
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
  margin-top: 6px;
  transition: background 0.2s;
  &:hover {
    background: #a3185d;
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

const FormsCadastro = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
    senha: "",
  });
  const [erro, setErro] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validação básica
    for (const key in form) {
      if (!form[key]) {
        setErro("Preencha todos os campos.");
        return;
      }
    }
    const res = register(form.email, form.senha, form); // Passa todos os dados
    if (res.success) {
      navigate("/login"); // Redireciona para login após cadastro!
    } else {
      setErro(res.message);
    }
  };

  return (
    <Container>
      <Box>
        <Title>Cadastro</Title>
        <Subtitle>
          Já possui uma conta? <Link to="/login">Entre aqui</Link>.
        </Subtitle>
        <StyledForm onSubmit={handleSubmit} autoComplete="off">
          <Label htmlFor="nome">Nome completo*</Label>
          <Input
            id="nome"
            name="nome"
            type="text"
            placeholder="Seu nome completo"
            value={form.nome}
            onChange={handleChange}
            required
          />

          <InputRow>
            <div style={{ flex: 2 }}>
              <Label htmlFor="email">Email*</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Seu e-mail"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div style={{ flex: 1 }}>
              <Label htmlFor="cpf">CPF*</Label>
              <Input
                id="cpf"
                name="cpf"
                type="text"
                placeholder="000.000.000-00"
                value={form.cpf}
                onChange={handleChange}
                required
              />
            </div>
          </InputRow>

          <InputRow>
            <div style={{ flex: 1 }}>
              <Label htmlFor="telefone">Telefone*</Label>
              <Input
                id="telefone"
                name="telefone"
                type="text"
                placeholder="(99) 99999-9999"
                value={form.telefone}
                onChange={handleChange}
                required
              />
            </div>
            <div style={{ flex: 1 }}>
              <Label htmlFor="senha">Senha*</Label>
              <Input
                id="senha"
                name="senha"
                type="password"
                placeholder="Crie uma senha"
                value={form.senha}
                onChange={handleChange}
                required
              />
            </div>
          </InputRow>

          <Label htmlFor="rua">Endereço*</Label>
          <InputRow>
            <Input
              id="rua"
              name="rua"
              type="text"
              placeholder="Rua"
              value={form.rua}
              onChange={handleChange}
              required
              style={{ flex: 2 }}
            />
            <Input
              id="numero"
              name="numero"
              type="text"
              placeholder="Número"
              value={form.numero}
              onChange={handleChange}
              required
              style={{ flex: 1 }}
            />
            <Input
              id="complemento"
              name="complemento"
              type="text"
              placeholder="Comp."
              value={form.complemento}
              onChange={handleChange}
              style={{ flex: 1 }}
            />
          </InputRow>

          <InputRow>
            <Input
              id="bairro"
              name="bairro"
              type="text"
              placeholder="Bairro"
              value={form.bairro}
              onChange={handleChange}
              required
              style={{ flex: 1 }}
            />
            <Input
              id="cidade"
              name="cidade"
              type="text"
              placeholder="Cidade"
              value={form.cidade}
              onChange={handleChange}
              required
              style={{ flex: 1 }}
            />
            <Input
              id="estado"
              name="estado"
              type="text"
              placeholder="UF"
              value={form.estado}
              onChange={handleChange}
              required
              style={{ flex: 0.5 }}
              maxLength={2}
            />
            <Input
              id="cep"
              name="cep"
              type="text"
              placeholder="CEP"
              value={form.cep}
              onChange={handleChange}
              required
              style={{ flex: 1 }}
            />
          </InputRow>

          {erro && <div style={{ color: "red", marginBottom: "8px" }}>{erro}</div>}
          <Button type="submit">Cadastrar</Button>
        </StyledForm>
        <SocialRow>
          <SocialText>ou cadastre-se com</SocialText>
          <SocialLogin>
            <a href="#" title="Cadastro com Gmail" aria-label="Cadastro com Gmail">
              <IconWrapper>
                <img src={gmailSvg} alt="Gmail" />
              </IconWrapper>
            </a>
            <a href="#" title="Cadastro com Facebook" aria-label="Cadastro com Facebook">
              <IconWrapper>
                <img src={facebookSvg} alt="Facebook" />
              </IconWrapper>
            </a>
          </SocialLogin>
        </SocialRow>
      </Box>
      <SneakerImage src="shoes.png" alt="Tênis" />
    </Container>
  );
};

export default FormsCadastro;