import Game from "./components/Game";
import { GlobalStyles } from "./components/styled/Global.styled";
import { ThemeProvider } from "styled-components";
function App() {

  const theme = {
    width: "80%"
  }
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Game />
    </ThemeProvider>
  );
}

export default App;
