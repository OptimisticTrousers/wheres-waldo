import Game from "./components/Game";
import GlobalStyles from "./components/styled/Global.styled";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
function App() {

  const theme = {
    width: "80%"
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <h1>owhy</h1>
      <GlobalStyles />
      <Game />
    </ThemeProvider>
  );
}

export default App;
