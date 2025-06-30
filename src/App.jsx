import Paths from "./Routes/Paths";
import { createGlobalStyle } from 'styled-components';
import { AuthProvider } from "./contexts/AuthContext";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>       
        <Paths />
      </AuthProvider>
    </>
  );
}

export default App;