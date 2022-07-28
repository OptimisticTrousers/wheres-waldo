import Game from "./components/Game";
import GlobalStyles from "./components/styled/Global.styled";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {

  return (
    <>
      <GlobalStyles />
      <Header />
      <Game />
      <Footer />
    </>
  );
}

export default App;
