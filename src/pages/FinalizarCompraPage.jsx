import React, { useState } from "react";
import styled from "styled-components";

// Cores e estilos
const bg = "#faf8fd";
const white = "#fff";
const border = "#e9e6f0";
const text = "#222";
const subtitle = "#363636";
const inputBg = "#faf8fc";
const label = "#1d1d1d";
const primary = "#C92071";
const yellow = "#F6AA1C";
const gray = "#888";

// Layout principal
const PageBg = styled.div`
  background: ${bg};
  min-height: 100vh;
  padding: 0;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px 0 16px;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0;
  }
`;

// Coluna dos formulários
const FormsColumn = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

// Card genérico para cada form/seção
const FormCard = styled.div`
  background: ${white};
  border-radius: 7px;
  padding: 30px 28px 22px 32px;
  box-sizing: border-box;
  border: 1px solid ${border};
  min-width: 340px;

  @media (max-width: 900px) {
    padding: 18px 8px 12px 8px;
    min-width: unset;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.08rem;
  font-weight: 700;
  color: ${text};
  margin-bottom: 22px;
  margin-top: 0;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${border};
  margin: 0 0 18px 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  color: ${label};
  font-weight: bold;
  font-size: 0.85rem;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid ${border};
  background: ${inputBg};
  padding: 12px 10px;
  font-size: 1rem;
  outline: none;
  border-radius: 5px;
  margin-bottom: 0;
  &::placeholder {
    color: #b0aeb8;
    font-size: 0.97em;
  }
  &:focus {
    border-color: ${primary};
    background: #fff;
  }
`;

const PaymentMethods = styled.div`
  display: flex;
  gap: 34px;
  margin-bottom: 14px;
  margin-top: 5px;
`;

const Radio = styled.input.attrs({ type: "radio" })`
  accent-color: ${primary};
  margin-right: 5px;
`;

const PaymentLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: ${text};
  font-weight: 500;
  cursor: pointer;
`;

const CardFieldsRow = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 8px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 4px;
  }
`;

const CardField = styled(FormField)`
  flex: 1;
`;

// SEÇÃO DE TOTAL/FINALIZAÇÃO
const TotalSectionCard = styled(FormCard)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  padding-bottom: 26px;
`;

const TotalContent = styled.div`
  width: 100%;
`;

// Linha com "Total" à esquerda e valor à direita
const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 26px 0 0 0;
  width: 100%;
`;

const TotalLabelLeft = styled.span`
  font-size: 1.08rem;
  font-weight: 700;
  color: #222;
  margin-left: 1px;
`;

const TotalValue = styled.span`
  font-size: 1.19rem;
  color: ${primary};
  font-weight: 700;
`;

const FormButton = styled.button`
  width: 100%;
  background: ${yellow};
  color: #fff;
  border: none;
  padding: 13px 0;
  border-radius: 6px;
  font-weight: 700;
  font-size: 1.09rem;
  cursor: pointer;
  margin-top: 18px;
  transition: background 0.2s;

  &:hover {
    background: #f7b22c;
  }
`;

// Resumo pedido (igual ao exemplo anterior)
const SummarySide = styled.div`
  background: ${white};
  border-radius: 7px;
  min-width: 310px;
  max-width: 360px;
  padding: 24px 26px 20px 26px;
  box-sizing: border-box;
  box-shadow: 0 2px 10px #0000000a;

  @media (max-width: 900px) {
    margin-top: 32px;
    min-width: 0;
    max-width: 100%;
    width: 100%;
    padding: 18px 8px;
  }
`;

const SummaryTitle = styled.h4`
  color: ${subtitle};
  font-weight: 700;
  margin: 0 0 14px 0;
  font-size: 1.05rem;
`;

const ProductSummary = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  border-bottom: 1px solid ${border};
  padding-bottom: 10px;
  margin-bottom: 14px;
`;

const ProductImg = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 5px;
  background: #f8f8f8;
  border: 1px solid #eee;
`;

const ProductName = styled.span`
  color: #222;
  font-size: 0.98rem;
  font-weight: 500;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.0rem;
  color: ${gray};
  margin-bottom: 7px;
`;

const SummaryTotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 700;
  color: #222;
  margin: 17px 0 18px 0;
`;

const SummaryLabel = styled.span`
  color: ${gray};
`;

const SummaryValue = styled.span`
  color: #222;
  font-weight: 500;
`;

const SummaryTotalLabel = styled.span`
  color: #222;
`;

const SummaryTotalValue = styled.span`
  color: #222;
  font-weight: 700;
`;

const OrangeButton = styled.button`
  width: 100%;
  background: ${yellow};
  color: #fff;
  border: none;
  padding: 13px 0;
  border-radius: 6px;
  font-weight: 700;
  font-size: 1.09rem;
  cursor: pointer;
  margin-top: 8px;
  transition: background 0.2s;

  &:hover {
    background: #f7b22c;
  }
`;

function formatarPreco(valor) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2
  }).format(valor);
}

const FinalizarCompraPage = () => {
  const [metodoPagamento, setMetodoPagamento] = useState("cartao");

  // Mock de produto e valores
  const produto = {
    nome: "Tênis Nike Revolution 6 Next Nature Masculino",
    img: "/imagens/miniaturas/miniatura1.png",
    subtotal: 237,
    frete: 0,
    desconto: 18,
    total: 219
  };

  // Handlers de envio de cada form (apenas para demonstração)
  const handleSubmitPessoal = (e) => {
    e.preventDefault();
  };
  const handleSubmitEntrega = (e) => {
    e.preventDefault();
  };
  const handleSubmitPagamento = (e) => {
    e.preventDefault();
  };
  const handleFinalizarCompra = (e) => {
    e.preventDefault();
  };

  return (
    <PageBg>
      <MainContent>
        {/* COLUNA DOS FORMULÁRIOS */}
        <FormsColumn>
          {/* Informações Pessoais */}
          <FormCard>
            <SectionTitle>Informações Pessoais</SectionTitle>
            <Divider />
            <StyledForm onSubmit={handleSubmitPessoal} autoComplete="off">
              <FormField>
                <Label htmlFor="nome">Nome Completo *</Label>
                <Input id="nome" type="text" placeholder="Digite seu nome" required />
              </FormField>
              <FormField>
                <Label htmlFor="cpf">CPF *</Label>
                <Input id="cpf" type="text" placeholder="Digite seu CPF" required />
              </FormField>
              <FormField>
                <Label htmlFor="email">E-mail *</Label>
                <Input id="email" type="email" placeholder="Digite seu e-mail" required />
              </FormField>
              <FormField>
                <Label htmlFor="celular">Celular *</Label>
                <Input id="celular" type="text" placeholder="Digite seu celular" required />
              </FormField>
            </StyledForm>
          </FormCard>

          {/* Informações de Entrega */}
          <FormCard>
            <SectionTitle>Informações de Entrega</SectionTitle>
            <Divider />
            <StyledForm onSubmit={handleSubmitEntrega} autoComplete="off">
              <FormField>
                <Label htmlFor="endereco">Endereço *</Label>
                <Input id="endereco" type="text" placeholder="Digite seu endereço" required />
              </FormField>
              <FormField>
                <Label htmlFor="bairro">Bairro *</Label>
                <Input id="bairro" type="text" placeholder="Digite seu bairro" required />
              </FormField>
              <FormField>
                <Label htmlFor="cidade">Cidade *</Label>
                <Input id="cidade" type="text" placeholder="Digite sua cidade" required />
              </FormField>
              <FormField>
                <Label htmlFor="cep">CEP *</Label>
                <Input id="cep" type="text" placeholder="Digite seu CEP" required />
              </FormField>
              <FormField>
                <Label htmlFor="complemento">Complemento</Label>
                <Input id="complemento" type="text" placeholder="Digite complemento (opcional)" />
              </FormField>
            </StyledForm>
          </FormCard>

          {/* Informações de Pagamento */}
          <FormCard>
            <SectionTitle>Informações de Pagamento</SectionTitle>
            <Divider />
            <StyledForm onSubmit={handleSubmitPagamento} autoComplete="off">
              <PaymentMethods>
                <PaymentLabel>
                  <Radio
                    name="metodoPagamento"
                    checked={metodoPagamento === "cartao"}
                    onChange={() => setMetodoPagamento("cartao")}
                  />
                  Cartão de Crédito
                </PaymentLabel>
                <PaymentLabel>
                  <Radio
                    name="metodoPagamento"
                    checked={metodoPagamento === "boleto"}
                    onChange={() => setMetodoPagamento("boleto")}
                  />
                  Boleto Bancário
                </PaymentLabel>
              </PaymentMethods>
              {metodoPagamento === "cartao" && (
                <>
                  <FormField>
                    <Label htmlFor="nome-cartao">Nome no Cartão *</Label>
                    <Input id="nome-cartao" type="text" placeholder="Digite o nome do Cartão" required />
                  </FormField>
                  <CardFieldsRow>
                    <CardField>
                      <Label htmlFor="numero-cartao">Número do Cartão *</Label>
                      <Input id="numero-cartao" type="text" placeholder="Digite o número do Cartão" required />
                    </CardField>
                    <CardField>
                      <Label htmlFor="validade-cartao">Data de validade do Cartão *</Label>
                      <Input id="validade-cartao" type="text" placeholder="MM/AA" required />
                    </CardField>
                  </CardFieldsRow>
                  <CardFieldsRow>
                    <CardField>
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input id="cvv" type="text" placeholder="CVV" required />
                    </CardField>
                  </CardFieldsRow>
                </>
              )}
            </StyledForm>
          </FormCard>

          {/* Seção Finalizar Compra */}
          <TotalSectionCard as="section">
            <TotalContent>
              <SectionTitle>Finalizar Compra</SectionTitle>
              <Divider />
              <TotalRow>
                <TotalLabelLeft>Total</TotalLabelLeft>
                <TotalValue>{formatarPreco(produto.total)}</TotalValue>
              </TotalRow>
              <FormButton style={{ marginTop: 18 }} onClick={handleFinalizarCompra}>
                Finalizar Pagamento
              </FormButton>
            </TotalContent>
          </TotalSectionCard>
        </FormsColumn>

        {/* RESUMO */}
        <SummarySide>
          <SummaryTitle>RESUMO</SummaryTitle>
          <ProductSummary>
            <ProductImg src={produto.img} alt={produto.nome} />
            <ProductName>{produto.nome}</ProductName>
          </ProductSummary>
          <SummaryRow>
            <SummaryLabel>Subtotal:</SummaryLabel>
            <SummaryValue>{formatarPreco(produto.subtotal)}</SummaryValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryLabel>Frete:</SummaryLabel>
            <SummaryValue>{formatarPreco(produto.frete)}</SummaryValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryLabel>Desconto:</SummaryLabel>
            <SummaryValue>-{formatarPreco(produto.desconto)}</SummaryValue>
          </SummaryRow>
          <SummaryTotalRow>
            <SummaryTotalLabel>Total</SummaryTotalLabel>
            <SummaryTotalValue>{formatarPreco(produto.total)}</SummaryTotalValue>
          </SummaryTotalRow>
          <OrangeButton type="button">Finalizar Pagamento</OrangeButton>
        </SummarySide>
      </MainContent>
    </PageBg>
  );
};

export default FinalizarCompraPage;