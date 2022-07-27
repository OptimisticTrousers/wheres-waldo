import Game from "./components/Game";
import GlobalStyles from "./components/styled/Global.styled";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {

  const theme = {
    width: "80%"
  }
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Game />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
