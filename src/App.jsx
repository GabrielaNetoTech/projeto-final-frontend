import Paths from "./Routes/Paths"
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
  }
`;

function App() {

  return (
    <>
      <GlobalStyle />
      <Paths />
    </>
  )
}

export default App
