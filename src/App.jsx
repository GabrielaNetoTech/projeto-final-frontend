import Paths from "./Routes/Paths";
import { createGlobalStyle } from 'styled-components';
import { AuthProvider } from "./contexts/AuthContext"; // <- Importe o AuthProvider

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>       {/* <-- Envolva o Paths aqui */}
        <Paths />
      </AuthProvider>
    </>
  );
}

export default App;